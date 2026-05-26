"use client";

import { useEffect, useRef, useState } from "react";

export function MouseFollower() {
    const ref = useRef<HTMLDivElement>(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const fine =
            typeof window !== "undefined" &&
            window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        setEnabled(fine);
        if (!fine) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (ref.current) {
                ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!enabled) return null;

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                transform: "translate(-50%, -50%)",
                marginTop: -16,
                marginLeft: -16,
            }}
        >
            <div className="w-full h-full bg-white rounded-full opacity-50 blur-sm animate-pulse" />
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-md transform scale-150" />
        </div>
    );
}
