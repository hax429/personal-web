"use client";

import { Section } from "./ui/section";
import { motion } from "framer-motion";
import { SimpleGrid, Text, Group, Stack } from "@mantine/core";
import { Rocket } from "lucide-react";
import { siteConfig } from "@/site-config";

export function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.04 } },
    };

    const item = {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <Section id="skills" title="SKILLS">
            <Stack gap="xl">
                {/* Currently building — flat outlined card, no chroma */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="border border-white/10 rounded-md p-5 hover:border-white/20 transition-colors"
                >
                    <Group align="center" gap="md" wrap="nowrap">
                        <Rocket
                            size={22}
                            strokeWidth={1.6}
                            className="text-white/70 flex-shrink-0"
                        />
                        <div style={{ flex: 1 }}>
                            <Text
                                ff="var(--font-mono)"
                                size="xs"
                                c="white"
                                fw={500}
                                mb={6}
                                style={{ letterSpacing: "0.18em", opacity: 0.45 }}
                            >
                                CURRENTLY BUILDING WITH
                            </Text>
                            <Text c="white" size="md" fw={500} style={{ lineHeight: 1.55, opacity: 0.85 }}>
                                {siteConfig.skills.focus}
                            </Text>
                        </div>
                    </Group>
                </motion.div>

                {/* Categories */}
                {siteConfig.skills.categories.map((category, ci) => (
                    <motion.div
                        key={category.name}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Group gap="sm" align="center" mb="md">
                            <Text
                                ff="var(--font-mono)"
                                size="xs"
                                c="white"
                                style={{ letterSpacing: "0.22em", opacity: 0.35 }}
                            >
                                {String(ci + 1).padStart(2, "0")}
                            </Text>
                            <Text
                                ff="var(--font-mono)"
                                size="xs"
                                c="white"
                                fw={600}
                                style={{ letterSpacing: "0.22em", opacity: 0.7 }}
                            >
                                {category.name.toUpperCase()}
                            </Text>
                            <div
                                aria-hidden
                                className="flex-1 h-px bg-white/8"
                                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                            />
                        </Group>

                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="sm">
                            {category.items.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={item}
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                                    className="group border border-white/10 rounded-md p-4 hover:border-white/25 hover:bg-white/[0.02] transition-all"
                                >
                                    <Group gap="md" align="flex-start" wrap="nowrap">
                                        <skill.icon
                                            size={22}
                                            strokeWidth={1.5}
                                            className="text-white/55 group-hover:text-white transition-colors mt-[2px] flex-shrink-0"
                                        />
                                        <div style={{ minWidth: 0 }}>
                                            <Text
                                                c="white"
                                                fw={600}
                                                size="sm"
                                                style={{ letterSpacing: "0.01em" }}
                                            >
                                                {skill.name}
                                            </Text>
                                            {skill.blurb && (
                                                <Text
                                                    c="white"
                                                    size="xs"
                                                    mt={4}
                                                    style={{ lineHeight: 1.5, opacity: 0.45 }}
                                                >
                                                    {skill.blurb}
                                                </Text>
                                            )}
                                        </div>
                                    </Group>
                                </motion.div>
                            ))}
                        </SimpleGrid>
                    </motion.div>
                ))}
            </Stack>
        </Section>
    );
}
