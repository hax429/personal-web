"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CHARS = ["0", "1", "e", "<", ">", "{", "}", "/", ";", "=", "*", "$"];

type Particle = {
    id: string;
    char: string;
    dx: number;
    dy: number;
    rotate: number;
    duration: number;
    hue: number;
};

type Burst = {
    id: string;
    x: number;
    y: number;
    particles: Particle[];
};

function isFinePointer() {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function ClickBurst() {
    const [bursts, setBursts] = useState<Burst[]>([]);
    const enabledRef = useRef(false);

    useEffect(() => {
        enabledRef.current = isFinePointer();
        if (!enabledRef.current) return;

        const onPointerDown = (e: PointerEvent) => {
            if (e.pointerType !== "mouse") return;
            const target = e.target as HTMLElement | null;
            if (target?.closest("input, textarea, [contenteditable='true']")) return;

            const burstId = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
            const count = 9 + Math.floor(Math.random() * 4);
            const particles: Particle[] = Array.from({ length: count }, (_, i) => {
                const baseAngle = (Math.PI * 2 * i) / count;
                const jitter = (Math.random() - 0.5) * 0.6;
                const angle = baseAngle + jitter;
                const distance = 60 + Math.random() * 70;
                return {
                    id: `${burstId}-${i}`,
                    char: CHARS[Math.floor(Math.random() * CHARS.length)],
                    dx: Math.cos(angle) * distance,
                    dy: Math.sin(angle) * distance,
                    rotate: (Math.random() - 0.5) * 180,
                    duration: 0.7 + Math.random() * 0.4,
                    // Monochrome: 60–90% lightness white
                    hue: 0,
                };
            });

            setBursts((prev) => [
                ...prev,
                { id: burstId, x: e.clientX, y: e.clientY, particles },
            ]);

            window.setTimeout(() => {
                setBursts((prev) => prev.filter((b) => b.id !== burstId));
            }, 1300);
        };

        window.addEventListener("pointerdown", onPointerDown, { passive: true });
        return () => window.removeEventListener("pointerdown", onPointerDown);
    }, []);

    if (!bursts.length) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[60]" aria-hidden>
            <AnimatePresence>
                {bursts.map((burst) => (
                    <div
                        key={burst.id}
                        style={{
                            position: "absolute",
                            left: burst.x,
                            top: burst.y,
                            width: 0,
                            height: 0,
                        }}
                    >
                        {burst.particles.map((p) => (
                            <motion.span
                                key={p.id}
                                initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                                animate={{
                                    opacity: 0,
                                    x: p.dx,
                                    y: p.dy,
                                    scale: 0.4,
                                    rotate: p.rotate,
                                }}
                                transition={{ duration: p.duration, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    position: "absolute",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: "rgba(255, 255, 255, 0.9)",
                                    textShadow: "0 0 6px rgba(255, 255, 255, 0.45)",
                                    transform: "translate(-50%, -50%)",
                                    willChange: "transform, opacity",
                                }}
                            >
                                {p.char}
                            </motion.span>
                        ))}
                    </div>
                ))}
            </AnimatePresence>
        </div>
    );
}
