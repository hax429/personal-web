"use client";

import { Section } from "./ui/section";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/site-config";

export function Projects() {
    return (
        <Section id="projects" title="PROJECTS">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {siteConfig.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group border border-white/10 bg-white/5 p-6 rounded hover:bg-white/10 hover:border-white/30 transition-colors"
                    >
                        {/* ... content */}
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:glow-text transition-all">{project.title}</h3>
                            <div className="flex gap-4 text-gray-400">
                                <a href={project.github} className="hover:text-white transition-colors"><Github size={20} /></a>
                                <a href={project.demo} className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500">
                            {project.tech.map(t => (
                                <span key={t} className="bg-white/5 px-2 py-1 rounded border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
