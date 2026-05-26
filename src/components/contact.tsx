"use client";

import { useState } from "react";
import { Section } from "./ui/section";
import { siteConfig, CONTACT_EMAIL } from "@/site-config";
import {
    TextInput,
    Textarea,
    Button,
    ActionIcon,
    Group,
    Stack,
    Paper,
    Text,
    Title,
    Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { motion } from "framer-motion";
import { Mail, User, Send, MessageSquare, CheckCircle2, XCircle } from "lucide-react";

const inputStyles = {
    input: {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
        fontFamily: "var(--font-mono)",
        backdropFilter: "blur(6px)",
        transition: "all 200ms ease",
    },
    label: {
        color: "rgba(255, 255, 255, 0.75)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        marginBottom: 6,
    },
    section: {
        color: "rgba(255, 255, 255, 0.5)",
    },
};

export function Contact() {
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        mode: "uncontrolled",
        initialValues: { name: "", email: "", message: "", website: "" },
        validate: {
            name: (value) => (value.trim().length < 2 ? "Name is too short" : null),
            email: (value) =>
                /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email address",
            message: (value) =>
                value.trim().length < 10 ? "Message must be at least 10 characters" : null,
        },
    });

    const handleSubmit = form.onSubmit(async (values) => {
        setSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                notifications.show({
                    color: "red",
                    title: "Could not send",
                    message: data?.error || "Something went wrong. Please email me directly.",
                    icon: <XCircle size={18} />,
                    autoClose: 6000,
                });
                return;
            }

            notifications.show({
                color: "teal",
                title: data?.emailed === false ? "Message saved" : "Message sent",
                message:
                    data?.emailed === false
                        ? "Saved your message — email delivery isn't configured yet, but I'll see it."
                        : `Thanks ${values.name.split(" ")[0]} — I'll get back to you soon.`,
                icon: <CheckCircle2 size={18} />,
                autoClose: 5000,
            });
            form.reset();
        } catch (err) {
            console.error(err);
            notifications.show({
                color: "red",
                title: "Network error",
                message: "Could not reach the server. Please try again or email me directly.",
                icon: <XCircle size={18} />,
                autoClose: 6000,
            });
        } finally {
            setSubmitting(false);
        }
    });

    return (
        <Section id="contact" title="CONTACT">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                {/* Left: description + socials */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-8"
                >
                    <Title order={3} c="white" style={{ fontWeight: 800, lineHeight: 1.15 }}>
                        Let&apos;s build something together.
                    </Title>

                    <Text c="white" size="lg" style={{ lineHeight: 1.7, opacity: 0.65 }}>
                        {siteConfig.contact.description}
                    </Text>

                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-mono text-base md:text-lg text-white/90 hover:text-white transition-colors inline-flex items-center gap-2 group w-fit"
                    >
                        <Mail size={18} strokeWidth={1.6} className="text-white/55" />
                        <span className="border-b border-white/20 group-hover:border-white/60 transition-colors">
                            {CONTACT_EMAIL}
                        </span>
                    </a>

                    <Group gap="xs">
                        {siteConfig.contact.socials.map((social, index) => (
                            <Tooltip key={index} label={social.label} withArrow>
                                <ActionIcon
                                    component="a"
                                    href={social.href}
                                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    size="lg"
                                    radius="md"
                                    variant="default"
                                    aria-label={social.label}
                                    styles={{
                                        root: {
                                            backgroundColor: "transparent",
                                            borderColor: "rgba(255, 255, 255, 0.12)",
                                            color: "rgba(255, 255, 255, 0.6)",
                                        },
                                    }}
                                    className="hover:!border-white/30 hover:!text-white hover:!bg-white/[0.04] transition-all"
                                >
                                    <social.icon size={16} strokeWidth={1.75} />
                                </ActionIcon>
                            </Tooltip>
                        ))}
                    </Group>
                </motion.div>

                {/* Right: form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Paper
                        radius="md"
                        p="xl"
                        withBorder
                        styles={{
                            root: {
                                backgroundColor: "transparent",
                                borderColor: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Stack gap="md">
                                {/* Honeypot: hidden field to trap bots. Real users never see or fill this. */}
                                <input
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    style={{
                                        position: "absolute",
                                        left: "-10000px",
                                        top: "auto",
                                        width: 1,
                                        height: 1,
                                        overflow: "hidden",
                                        opacity: 0,
                                        pointerEvents: "none",
                                    }}
                                    {...form.getInputProps("website")}
                                />
                                <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    radius="md"
                                    size="md"
                                    leftSection={<User size={16} strokeWidth={1.75} />}
                                    leftSectionPointerEvents="none"
                                    styles={inputStyles}
                                    key={form.key("name")}
                                    {...form.getInputProps("name")}
                                />
                                <TextInput
                                    label="Email"
                                    placeholder="you@example.com"
                                    radius="md"
                                    size="md"
                                    leftSection={<Mail size={16} strokeWidth={1.75} />}
                                    leftSectionPointerEvents="none"
                                    styles={inputStyles}
                                    key={form.key("email")}
                                    {...form.getInputProps("email")}
                                />
                                <Textarea
                                    label="Message"
                                    placeholder="Say hi, share an idea, or ask a question..."
                                    radius="md"
                                    size="md"
                                    autosize
                                    minRows={4}
                                    maxRows={8}
                                    leftSection={<MessageSquare size={16} strokeWidth={1.75} />}
                                    leftSectionPointerEvents="none"
                                    styles={inputStyles}
                                    key={form.key("message")}
                                    {...form.getInputProps("message")}
                                />
                                <Button
                                    type="submit"
                                    size="md"
                                    radius="md"
                                    rightSection={<Send size={16} strokeWidth={1.75} />}
                                    loading={submitting}
                                    styles={{
                                        root: {
                                            fontFamily: "var(--font-mono)",
                                            letterSpacing: "0.12em",
                                            fontWeight: 600,
                                            marginTop: 4,
                                            backgroundColor: "#f7f8f8",
                                            color: "#08090a",
                                        },
                                    }}
                                    className="hover:!bg-white"
                                >
                                    {submitting ? "SENDING…" : "SEND MESSAGE"}
                                </Button>
                            </Stack>
                        </form>
                    </Paper>
                </motion.div>
            </div>
        </Section>
    );
}
