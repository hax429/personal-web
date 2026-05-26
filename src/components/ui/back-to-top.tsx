"use client";

import { useEffect, useState } from "react";
import { Affix, Transition, ActionIcon } from "@mantine/core";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const main =
            (document.querySelector("main.snap-y") as HTMLElement | null) ||
            document.scrollingElement;
        if (!main) return;
        const handler = () => setScrolled((main as HTMLElement).scrollTop > 300);
        handler();
        main.addEventListener("scroll", handler, { passive: true });
        return () => main.removeEventListener("scroll", handler);
    }, []);

    const scrollToTop = () => {
        const main =
            (document.querySelector("main.snap-y") as HTMLElement | null) ||
            document.scrollingElement;
        if (!main) return;
        (main as HTMLElement).scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Affix position={{ bottom: 20, right: 20 }} zIndex={50}>
            <Transition transition="slide-up" mounted={scrolled}>
                {(transitionStyles) => (
                    <ActionIcon
                        onClick={scrollToTop}
                        size="lg"
                        radius="md"
                        variant="default"
                        aria-label="Back to top"
                        style={{
                            ...transitionStyles,
                            backgroundColor: "#08090a",
                            borderColor: "rgba(255, 255, 255, 0.2)",
                            color: "#f7f8f8",
                        }}
                        className="hover:!border-white/40 hover:!bg-white/[0.04]"
                    >
                        <ArrowUp size={16} strokeWidth={1.75} />
                    </ActionIcon>
                )}
            </Transition>
        </Affix>
    );
}
