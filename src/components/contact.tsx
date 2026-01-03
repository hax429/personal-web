"use client";

import { Section } from "./ui/section";
import { siteConfig } from "@/site-config";

export function Contact() {
    return (
        <Section id="contact" title="CONTACT">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <p className="text-gray-400 text-lg">
                        {siteConfig.contact.description}
                    </p>

                    <div className="flex gap-4">
                        {siteConfig.contact.socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="p-3 border border-white/10 rounded hover:bg-white/10 hover:text-white text-gray-400 transition-all hover:glow-box"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-white/50 transition-colors font-mono"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-white/50 transition-colors font-mono"
                    />
                    <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-white/50 transition-colors font-mono"
                    />
                    <button
                        className="px-8 py-3 bg-white text-black font-bold font-mono hover:bg-gray-200 transition-colors shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] w-full md:w-auto"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </Section>
    );
}
