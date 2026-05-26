"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // The site uses a custom scroll container (<main>) with overflow-y-scroll.
        const main =
            (document.querySelector("main.snap-y") as HTMLElement | null) ||
            document.scrollingElement;
        if (!main) return;

        const handler = () => {
            const el = main as HTMLElement;
            const max = el.scrollHeight - el.clientHeight;
            if (max <= 0) {
                setProgress(0);
                return;
            }
            setProgress(Math.min(1, Math.max(0, el.scrollTop / max)));
        };

        handler();
        main.addEventListener("scroll", handler, { passive: true });
        window.addEventListener("resize", handler);
        return () => {
            main.removeEventListener("scroll", handler);
            window.removeEventListener("resize", handler);
        };
    }, []);

    return (
        <div
            aria-hidden
            className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
            style={{ background: "rgba(255,255,255,0.04)" }}
        >
            <div
                className="h-full"
                style={{
                    width: `${progress * 100}%`,
                    background:
                        "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.95) 100%)",
                    boxShadow: "0 0 8px rgba(255, 255, 255, 0.35)",
                    transition: "width 80ms linear",
                }}
            />
        </div>
    );
}
