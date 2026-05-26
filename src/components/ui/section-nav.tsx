"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/site-config";

type NavItem = { id: string; label: string };

function buildSections(): NavItem[] {
    const items: NavItem[] = [{ id: "hero", label: "Top" }];
    if (siteConfig.sections.about) items.push({ id: "about", label: "About" });
    if (siteConfig.sections.skills) items.push({ id: "skills", label: "Skills" });
    if (siteConfig.sections.work) items.push({ id: "work", label: "Work" });
    if (siteConfig.sections.projects) items.push({ id: "projects", label: "Projects" });
    if (siteConfig.sections.contact) items.push({ id: "contact", label: "Contact" });
    return items;
}

export function SectionNav() {
    const sections = buildSections();
    const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Pick the entry with the largest intersection ratio
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActiveId(visible[0].target.id);
            },
            { threshold: [0.35, 0.55, 0.75] }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav
            aria-label="Section navigation"
            className="hidden lg:flex fixed right-6 xl:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3"
        >
            {sections.map((s) => {
                const isActive = activeId === s.id;
                return (
                    <button
                        key={s.id}
                        type="button"
                        onClick={() => scrollTo(s.id)}
                        aria-label={`Go to ${s.label}`}
                        aria-current={isActive ? "true" : undefined}
                        className="group flex items-center gap-3 py-1 cursor-pointer focus-visible:outline-none"
                    >
                        <span
                            className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                                isActive
                                    ? "opacity-70 translate-x-0 text-white"
                                    : "opacity-0 translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 text-white"
                            }`}
                        >
                            {s.label}
                        </span>
                        <span
                            className={`block rounded-full transition-all duration-300 ${
                                isActive
                                    ? "w-2.5 h-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                                    : "w-1.5 h-1.5 bg-white/25 group-hover:bg-white/60 group-hover:scale-125"
                            }`}
                        />
                    </button>
                );
            })}
        </nav>
    );
}
