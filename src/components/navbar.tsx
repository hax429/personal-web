"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { spotlight } from "@mantine/spotlight";
import { siteConfig } from "@/site-config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMac, setIsMac] = useState(true);

    useEffect(() => {
        if (typeof navigator !== "undefined") {
            setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
        }
    }, []);

    const navLinks = [
        { name: "ABOUT", href: "#about", id: "about" },
        { name: "SKILLS", href: "#skills", id: "skills" },
        { name: "EXPERIENCE", href: "#work", id: "work" },
        { name: "PROJECTS", href: "#projects", id: "projects" },
        { name: "CONTACT", href: "#contact", id: "contact" },
    ].filter((link) => siteConfig.sections[link.id as keyof typeof siteConfig.sections]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-5 sm:py-6 flex justify-between items-center mix-blend-difference text-white">
                <a
                    href="#"
                    className="font-mono text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
                >
                    // HOME
                </a>

                <div className="flex items-center gap-3 sm:gap-5">
                    {/* Cmd+K hint — only on hover-capable devices */}
                    <button
                        onClick={spotlight.open}
                        className="hidden sm:flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors border border-white/15 rounded-md px-2 py-1 backdrop-blur-sm"
                        aria-label="Open command palette"
                    >
                        <Search size={12} />
                        <span>{isMac ? "⌘" : "Ctrl"}K</span>
                    </button>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="font-mono text-sm flex items-center gap-2 hover:text-gray-300 transition-colors"
                    >
                        MENU <Menu size={20} />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-6 sm:gap-8 text-center">
                            <a
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="font-mono text-3xl sm:text-4xl font-bold text-white hover:text-gray-400 hover:glow-text transition-all"
                            >
                                HOME
                            </a>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-mono text-3xl sm:text-4xl font-bold text-white hover:text-gray-400 hover:glow-text transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
