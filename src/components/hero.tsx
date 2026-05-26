"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowDownRight, Code2 } from "lucide-react";
import { ActionIcon, Button, Group, Tooltip } from "@mantine/core";
import { siteConfig } from "@/site-config";

import { Typewriter } from "@/components/ui/typewriter";

// Sequence (seconds, all measured from page load — total ~3s):
//   0.05  eyebrow container fades in
//   0.10  eyebrow typewriter "HI, MY NAME IS" starts (~0.45s)
//   0.55  name fades in
//   0.70  underline draws (0.7s)
//   1.35  subtitle fades in
//   1.65  typewriter "FULL STACK DEVELOPER" starts (~0.85s)
//   2.30+ status pill, description, CTAs, socials, scroll cue cascade in
const T = {
    eyebrowContainer: 0.05,
    eyebrowType: 0.1,
    name: 0.55,
    underline: 0.7,
    subtitle: 1.35,
    typewriter: 1.65,
    statusPill: 2.3,
    description: 2.4,
    cta: 2.5,
    socials: 2.6,
    scrollCue: 2.8,
};

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto pt-24 pb-28 sm:pt-20 sm:pb-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
            >
                {/* Eyebrow — typewriter "HI, MY NAME IS" */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: T.eyebrowContainer }}
                    className="mb-4 flex items-center gap-2 h-5"
                >
                    <Code2 size={14} className="text-white/55" strokeWidth={1.75} />
                    <span className="font-mono text-xs md:text-sm text-white/55 tracking-[0.18em]">
                        <Typewriter
                            text="HI, MY NAME IS"
                            speed={32}
                            delay={T.eyebrowType}
                            cursor={false}
                        />
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: T.name, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[3rem] sm:text-6xl md:text-[7.5rem] leading-[0.9] font-black tracking-tighter mb-2"
                >
                    <span className="relative inline-block name-shine pr-1">
                        {siteConfig.hero.title}
                        <svg
                            aria-hidden
                            viewBox="0 0 200 12"
                            preserveAspectRatio="none"
                            fill="none"
                            strokeLinecap="round"
                            className="pointer-events-none absolute left-[2%] right-[2%] -bottom-[0.04em] w-[96%] h-[0.22em] overflow-visible"
                        >
                            <defs>
                                <linearGradient id="underline-grad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                                    <stop offset="14%" stopColor="rgba(255,255,255,0.95)" />
                                    <stop offset="86%" stopColor="rgba(255,255,255,0.95)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d="M2 7 C 28 3, 58 10, 100 6 S 162 9, 198 4"
                                stroke="url(#underline-grad)"
                                strokeWidth={2}
                                vectorEffect="non-scaling-stroke"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                    pathLength: { duration: 0.7, delay: T.underline, ease: [0.65, 0, 0.35, 1] },
                                    opacity: { duration: 0.15, delay: T.underline },
                                }}
                                style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.45))" }}
                            />
                        </svg>
                    </span>
                    <span className="text-white/45">.</span>
                </motion.h1>

                {/* Subtitle line */}
                <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: T.subtitle }}
                    className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white/40 mb-8"
                >
                    Connect humans with technology.
                </motion.h2>

                {/* Typewriter line — FULL STACK DEVELOPER */}
                <div className="font-mono text-base sm:text-lg md:text-2xl text-white/70 mb-10 h-9 flex items-center">
                    <span className="text-white/35 mr-2">&gt;</span>
                    <Typewriter
                        text={siteConfig.hero.typewriterText}
                        speed={42}
                        delay={T.typewriter}
                    />
                </div>

                {/* Status pill — outline only, monochrome */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: T.statusPill }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 font-mono text-[11px] tracking-[0.12em] text-white/75">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        AVAILABLE FOR NEW PROJECTS
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45, delay: T.description }}
                    className="max-w-xl text-white/50 text-base md:text-lg mb-12 leading-relaxed"
                >
                    {siteConfig.hero.description}
                </motion.p>

                {/* CTA buttons — monochrome */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: T.cta }}
                >
                    <Group gap="sm">
                        {siteConfig.sections.contact && (
                            <Button
                                component="a"
                                href="#contact"
                                size="md"
                                radius="md"
                                rightSection={<ArrowRight size={16} strokeWidth={1.75} />}
                                styles={{
                                    root: {
                                        fontFamily: "var(--font-mono)",
                                        letterSpacing: "0.12em",
                                        fontWeight: 600,
                                        backgroundColor: "#f7f8f8",
                                        color: "#08090a",
                                    },
                                }}
                                className="hover:!bg-white"
                            >
                                CONTACT ME
                            </Button>
                        )}
                        {siteConfig.sections.about && (
                            <Button
                                component="a"
                                href="#about"
                                size="md"
                                radius="md"
                                variant="default"
                                rightSection={<ArrowDownRight size={16} strokeWidth={1.75} />}
                                styles={{
                                    root: {
                                        fontFamily: "var(--font-mono)",
                                        letterSpacing: "0.12em",
                                        fontWeight: 500,
                                        backgroundColor: "transparent",
                                        borderColor: "rgba(255, 255, 255, 0.15)",
                                        color: "#f7f8f8",
                                    },
                                }}
                                className="hover:!border-white/30 hover:!bg-white/[0.04]"
                            >
                                LEARN MORE
                            </Button>
                        )}
                    </Group>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: T.socials }}
                    className="mt-10"
                >
                    <Group gap="xs">
                        {siteConfig.contact.socials.map((social, i) => (
                            <Tooltip key={i} label={social.label} withArrow>
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

                {/* Decorative side rail */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="hidden md:block absolute -left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent origin-top"
                />
            </motion.div>

            {/* Scroll cue (desktop only) */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: T.scrollCue }}
                className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 hover:text-white transition-colors"
            >
                <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
                <ArrowDown className="w-4 h-4 float-y" strokeWidth={1.75} />
            </motion.a>
        </section>
    );
}
