import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const CONTACT_TO = process.env.CONTACT_TO || "gabriel@hax429.me";
const SUBMISSIONS_FILE = path.join(
    process.cwd(),
    "data",
    "contact-submissions.ndjson"
);

// Rate limit: 5 submissions / 10 minutes / IP
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const rateLimitBuckets = new Map<string, number[]>();

function checkRateLimit(ip: string): { ok: true } | { ok: false; retryAfterSec: number } {
    const now = Date.now();
    const cutoff = now - RATE_LIMIT_WINDOW_MS;
    const recent = (rateLimitBuckets.get(ip) || []).filter((t) => t > cutoff);
    if (recent.length >= RATE_LIMIT_MAX) {
        const retryAfterSec = Math.ceil((recent[0] + RATE_LIMIT_WINDOW_MS - now) / 1000);
        rateLimitBuckets.set(ip, recent);
        return { ok: false, retryAfterSec: Math.max(retryAfterSec, 1) };
    }
    recent.push(now);
    rateLimitBuckets.set(ip, recent);
    return { ok: true };
}

type Payload = {
    name?: string;
    email?: string;
    message?: string;
    // Honeypot — must stay empty for real users
    website?: string;
};

function validate(
    p: Payload
):
    | { ok: true; data: { name: string; email: string; message: string } }
    | { ok: false; error: string } {
    if (!p) return { ok: false, error: "Missing body" };
    const name = (p.name || "").trim();
    const email = (p.email || "").trim();
    const message = (p.message || "").trim();
    if (name.length < 2) return { ok: false, error: "Name is too short" };
    if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, error: "Invalid email" };
    if (message.length < 10) return { ok: false, error: "Message is too short" };
    if (name.length > 200 || email.length > 320 || message.length > 5000) {
        return { ok: false, error: "Input too long" };
    }
    return { ok: true, data: { name, email, message } };
}

async function appendSubmission(record: object) {
    await fs.mkdir(path.dirname(SUBMISSIONS_FILE), { recursive: true });
    await fs.appendFile(SUBMISSIONS_FILE, JSON.stringify(record) + "\n", "utf8");
}

function buildTransport() {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!host || !user || !pass) return null;
    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
    });
}

export async function POST(request: Request) {
    let payload: Payload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const fwdHeader = request.headers.get("x-forwarded-for") || "";
    const ip = fwdHeader.split(",")[0].trim() || "unknown";
    const userAgent = request.headers.get("user-agent") || null;
    const submittedAt = new Date().toISOString();

    // Honeypot: silently accept and discard bot submissions (don't tell them why)
    if (payload.website && payload.website.trim().length > 0) {
        console.warn("[contact] honeypot tripped", {
            ip,
            ua: userAgent,
            honeypot: payload.website,
        });
        return NextResponse.json({ ok: true, emailed: true });
    }

    // Rate limit
    const limit = checkRateLimit(ip);
    if (!limit.ok) {
        return NextResponse.json(
            {
                error: `Too many submissions. Try again in ${limit.retryAfterSec}s.`,
            },
            {
                status: 429,
                headers: { "Retry-After": String(limit.retryAfterSec) },
            }
        );
    }

    const result = validate(payload);
    if (!result.ok) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }
    const { name, email, message } = result.data;

    const record = { submittedAt, name, email, message, ip, userAgent };

    try {
        await appendSubmission(record);
    } catch (err) {
        console.error("[contact] failed to persist submission", err);
    }

    const transporter = buildTransport();
    if (!transporter) {
        console.warn(
            "[contact] SMTP not configured — submission saved but email not sent. Set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS in .env.local."
        );
        return NextResponse.json({ ok: true, emailed: false });
    }

    const from = process.env.SMTP_FROM || process.env.SMTP_USER!;
    const subject = `Portfolio contact: ${name}`;
    const text = `${message}\n\n—\nFrom: ${name} <${email}>\nIP: ${ip}\nSubmitted: ${submittedAt}`;
    const html = `
        <div style="font-family:system-ui,sans-serif;max-width:560px;">
            <h2 style="margin:0 0 12px;">New portfolio message</h2>
            <p style="white-space:pre-wrap;line-height:1.55;color:#222;">${escapeHtml(message)}</p>
            <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
            <p style="color:#555;font-size:13px;margin:0;">
                <strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;<br/>
                <strong>IP:</strong> ${escapeHtml(ip)}<br/>
                <strong>Submitted:</strong> ${submittedAt}
            </p>
        </div>
    `;

    try {
        await transporter.sendMail({
            from,
            to: CONTACT_TO,
            replyTo: `${name} <${email}>`,
            subject,
            text,
            html,
        });
    } catch (err) {
        console.error("[contact] SMTP send failed", err);
        return NextResponse.json(
            { ok: true, emailed: false, error: "Saved, but email delivery failed" },
            { status: 502 }
        );
    }

    return NextResponse.json({ ok: true, emailed: true });
}

function escapeHtml(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
