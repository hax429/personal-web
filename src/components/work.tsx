"use client";

import { Section } from "./ui/section";
import { motion } from "framer-motion";
import { siteConfig } from "@/site-config";

export function Work() {
    return (
        <Section id="work" title="EXPERIENCE">
            <div className="relative border-l border-white/20 ml-3 md:ml-6 my-6">
                {siteConfig.experience.map((exp, index) => (
                    <div key={index} className="mb-12 ml-6 md:ml-12 relative group">
                        {/* Timeline Dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white group-hover:bg-white group-hover:scale-125 transition-all duration-300"
                        />

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:glow-text transition-all">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-2 text-sm font-mono text-gray-400 mt-1 md:mt-0">
                                    <span className="text-white">@ {exp.company}</span>
                                    <span>// {exp.period}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.achievements.map((achievement, i) => (
                                    <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                                        &gt; {achievement}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
