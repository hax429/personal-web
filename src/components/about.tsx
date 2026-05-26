"use client";

import { Section } from "./ui/section";
import { siteConfig } from "@/site-config";
import { Stack, Text, Group } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function About() {
    return (
        <Section id="about" title="ABOUT">
            <Stack gap="sm">
                {/* Profile card with avatar */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="border border-white/10 rounded-md p-3 sm:p-4 hover:border-white/20 transition-colors"
                >
                    <Group align="center" gap="md" wrap="nowrap">
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 rounded-full bg-white/5 blur-xl" />
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/15 bg-white/[0.03]">
                                <Image
                                    src="/avatar.png"
                                    alt="Gabriel avatar"
                                    width={160}
                                    height={160}
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <Text
                                ff="var(--font-mono)"
                                size="xs"
                                c="white"
                                fw={500}
                                mb={2}
                                style={{ letterSpacing: "0.18em", opacity: 0.45 }}
                            >
                                A LITTLE ABOUT ME
                            </Text>
                            <Text c="white" size="sm" fw={500} style={{ lineHeight: 1.4, opacity: 0.9 }}>
                                Gabriel Wang — builder, student, always learning.
                            </Text>
                        </div>
                    </Group>
                </motion.div>

                {/* Numbered narrative cards */}
                <Stack gap="xs">
                    {siteConfig.about.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
                            className="group relative border border-white/10 rounded-md px-4 py-3 sm:px-5 sm:py-3.5 hover:border-white/25 hover:bg-white/[0.015] transition-all"
                        >
                            <Group align="flex-start" gap="md" wrap="nowrap">
                                <Text
                                    ff="var(--font-mono)"
                                    c="white"
                                    fw={700}
                                    style={{
                                        fontSize: "1.25rem",
                                        lineHeight: 1.2,
                                        letterSpacing: "-0.02em",
                                        opacity: 0.18,
                                        flexShrink: 0,
                                        minWidth: 28,
                                        paddingTop: 2,
                                        transition: "opacity 240ms",
                                    }}
                                    className="group-hover:!opacity-40"
                                >
                                    {section.label}
                                </Text>
                                <Text
                                    c="white"
                                    size="sm"
                                    style={{
                                        lineHeight: 1.55,
                                        opacity: 0.82,
                                        flex: 1,
                                    }}
                                >
                                    {section.content}
                                </Text>
                            </Group>
                        </motion.div>
                    ))}
                </Stack>

                {/* Quick facts strip */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
                >
                    {[
                        { label: "BASED IN", value: "USA" },
                        { label: "STUDYING", value: "CS @ JHU" },
                        { label: "BUILDING", value: "BlinkOS" },
                        { label: "STATUS", value: "Open to work" },
                    ].map((fact) => (
                        <div
                            key={fact.label}
                            className="border border-white/10 rounded-md px-3 py-2 hover:border-white/25 transition-colors"
                        >
                            <Text
                                ff="var(--font-mono)"
                                size="xs"
                                c="white"
                                fw={500}
                                mb={2}
                                style={{ letterSpacing: "0.16em", opacity: 0.4, fontSize: "10px" }}
                            >
                                {fact.label}
                            </Text>
                            <Text c="white" size="sm" fw={600} style={{ opacity: 0.9, lineHeight: 1.2 }}>
                                {fact.value}
                            </Text>
                        </div>
                    ))}
                </motion.div>
            </Stack>
        </Section>
    );
}
