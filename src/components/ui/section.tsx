import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Reveal } from "@/components/ui/reveal";
import { DecodeText } from "@/components/ui/decode-text";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
    return (
        <section id={id} className={twMerge("min-h-screen flex flex-col justify-center snap-start py-20 max-w-5xl mx-auto px-6", className)}>
            <div className="flex flex-col gap-8">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold flex items-center gap-4 text-white">
                        <span className="text-gray-500 text-2xl select-none">{"//"}</span>
                        <span className="glow-text">
                            <DecodeText text={title} />
                        </span>
                        <span className="text-gray-500 select-none">{" {"}</span>
                    </h2>
                </Reveal>

                <div className="pl-4 md:pl-8 border-l border-white/10 ml-2 md:ml-3">
                    <Reveal delay={0.4} width="100%">
                        {children}
                    </Reveal>
                </div>

                <Reveal delay={0.6}>
                    <div className="text-3xl md:text-4xl font-mono font-bold text-gray-500 select-none">
                        {"}"}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
