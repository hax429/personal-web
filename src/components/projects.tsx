"use client";

import { Section } from "./ui/section";
import { Github, ExternalLink, Folder, Apple } from "lucide-react";
import { motion } from "framer-motion";
import {
    Group,
    ActionIcon,
    Text,
    SimpleGrid,
    Tooltip,
} from "@mantine/core";
import { siteConfig } from "@/site-config";

type Project = (typeof siteConfig.projects)[number] & {
    status?: string;
};

function isAppStore(url: string) {
    return /apps\.apple\.com/.test(url);
}

export function Projects() {
    return (
        <Section id="projects" title="PROJECTS">
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                {(siteConfig.projects as Project[]).map((project, index) => {
                    const demoIsAppStore = project.demo && isAppStore(project.demo);
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -3 }}
                            className="group border border-white/10 rounded-md p-5 hover:border-white/25 hover:bg-white/[0.02] transition-all"
                        >
                            <Group justify="space-between" align="flex-start" mb="md" wrap="nowrap">
                                <Folder size={22} strokeWidth={1.5} className="text-white/55 group-hover:text-white transition-colors" />
                                <Group gap={4}>
                                    {project.github && (
                                        <Tooltip label="View source" withArrow>
                                            <ActionIcon
                                                component="a"
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                variant="subtle"
                                                color="gray"
                                                size="md"
                                                radius="sm"
                                                aria-label="GitHub repository"
                                                className="hover:!text-white"
                                            >
                                                <Github size={16} strokeWidth={1.6} />
                                            </ActionIcon>
                                        </Tooltip>
                                    )}
                                    {project.demo && (
                                        <Tooltip
                                            label={demoIsAppStore ? "App Store" : "Live demo"}
                                            withArrow
                                        >
                                            <ActionIcon
                                                component="a"
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                variant="subtle"
                                                color="gray"
                                                size="md"
                                                radius="sm"
                                                aria-label={demoIsAppStore ? "App Store" : "Live demo"}
                                                className="hover:!text-white"
                                            >
                                                {demoIsAppStore ? (
                                                    <Apple size={16} strokeWidth={1.6} />
                                                ) : (
                                                    <ExternalLink size={16} strokeWidth={1.6} />
                                                )}
                                            </ActionIcon>
                                        </Tooltip>
                                    )}
                                </Group>
                            </Group>

                            <Group gap="xs" mb={6} align="center" wrap="wrap">
                                <Text size="md" fw={700} c="white">
                                    {project.title}
                                </Text>
                                {project.status && (
                                    <span className="inline-flex items-center gap-1.5 px-2 py-[2px] rounded-full border border-white/15 font-mono text-[10px] tracking-[0.12em] text-white/70">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        </span>
                                        {project.status}
                                    </span>
                                )}
                            </Group>

                            <Text size="sm" c="white" mb="md" style={{ lineHeight: 1.65, opacity: 0.6 }}>
                                {project.description}
                            </Text>

                            <Group gap={6} wrap="wrap">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono text-[11px] px-2 py-[3px] border border-white/12 rounded text-white/55"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </Group>
                        </motion.div>
                    );
                })}
            </SimpleGrid>
        </Section>
    );
}
