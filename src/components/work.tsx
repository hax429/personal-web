"use client";

import { Section } from "./ui/section";
import { motion } from "framer-motion";
import { Timeline, Group, Text } from "@mantine/core";
import { Briefcase, ExternalLink } from "lucide-react";
import { siteConfig } from "@/site-config";

const ITEM_STAGGER = 0.45;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Work() {
    return (
        <Section id="work" title="EXPERIENCE">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
            >
                <Timeline
                    active={siteConfig.experience.length - 1}
                    bulletSize={32}
                    lineWidth={1}
                    color="gray"
                    styles={{
                        itemTitle: {
                            color: "#f7f8f8",
                            fontSize: "1.125rem",
                            fontWeight: 700,
                        },
                    }}
                >
                    {siteConfig.experience.map((exp, index) => {
                        const baseDelay = index * ITEM_STAGGER;
                        return (
                            <Timeline.Item
                                key={index}
                                bullet={
                                    <motion.div
                                        aria-hidden
                                        initial={{ opacity: 0, scale: 0.3 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: baseDelay, ease: EASE }}
                                        className="w-8 h-8 rounded-full border border-white/20 bg-[#08090a] flex items-center justify-center text-white/70"
                                    >
                                        <Briefcase size={14} strokeWidth={1.6} />
                                    </motion.div>
                                }
                                title={
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.55, delay: baseDelay + 0.08, ease: EASE }}
                                    >
                                        <Group justify="space-between" align="baseline" wrap="wrap" gap="xs">
                                            <Group gap={6} align="baseline">
                                                <Text component="span" size="lg" fw={600} c="white">
                                                    {exp.role}
                                                </Text>
                                                {exp.link && (
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label={`${exp.company} link`}
                                                        className="inline-flex items-center text-white/45 hover:text-white transition-colors"
                                                    >
                                                        <ExternalLink size={13} strokeWidth={1.75} />
                                                    </a>
                                                )}
                                            </Group>
                                            <Text component="span" size="xs" ff="var(--font-mono)" c="white" style={{ opacity: 0.5, letterSpacing: "0.04em" }}>
                                                @ <Text component="span" inherit style={{ opacity: 0.85 }}>{exp.company}</Text>
                                                <Text component="span" inherit> // {exp.period}</Text>
                                            </Text>
                                        </Group>
                                    </motion.div>
                                }
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, delay: baseDelay + 0.18, ease: EASE }}
                                    className="mt-2"
                                >
                                    <Text size="sm" c="white" mb="sm" style={{ lineHeight: 1.7, opacity: 0.65 }}>
                                        {exp.description}
                                    </Text>
                                    <Group gap="xs" wrap="wrap">
                                        {exp.achievements.map((a, i) => (
                                            <span
                                                key={i}
                                                className="font-mono text-[11px] px-2 py-[3px] border border-white/12 rounded text-white/65"
                                            >
                                                {a}
                                            </span>
                                        ))}
                                    </Group>
                                </motion.div>
                            </Timeline.Item>
                        );
                    })}
                </Timeline>
            </motion.div>
        </Section>
    );
}
