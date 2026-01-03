"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site-config";

import { Typewriter } from "@/components/ui/typewriter";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white glow-text">
                    {siteConfig.hero.title}
                </h1>

                <div className="font-mono text-xl md:text-3xl text-gray-400 mb-8 h-8">
                    <Typewriter text={siteConfig.hero.typewriterText} speed={70} delay={0.5} />
                </div>

                <p className="max-w-xl text-gray-400 text-lg mb-12 leading-relaxed">
                    {siteConfig.hero.description}
                </p>

                <div className="flex gap-6">
                    {siteConfig.sections.contact && (
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white text-black font-bold font-mono hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            CONTACT ME
                        </a>
                    )}
                    {siteConfig.sections.about && (
                        <a
                            href="#about"
                            className="px-8 py-4 border border-white/20 text-white font-mono hover:bg-white/10 transition-colors"
                        >
                            LEARN MORE
                        </a>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
