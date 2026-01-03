"use client";

import { Section } from "./ui/section";
import { motion } from "framer-motion";
import { siteConfig } from "@/site-config";

export function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Section id="skills" title="SKILLS">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {siteConfig.skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={item}
                        className="border border-white/10 bg-white/5 p-4 rounded hover:bg-white/10 hover:border-white/30 transition-all group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <skill.icon className="mb-2 text-gray-400 group-hover:text-white transition-colors" size={24} />
                        <span className="font-mono text-sm text-gray-300 group-hover:text-white group-hover:glow-text transition-all">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
