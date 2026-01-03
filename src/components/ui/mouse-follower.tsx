"use client";

import { useEffect, useRef } from "react";

export function MouseFollower() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (ref.current) {
                const x = e.clientX;
                const y = e.clientY;
                ref.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                transform: "translate(-50%, -50%)",
                marginTop: -16,
                marginLeft: -16
            }}
        >
            <div className="w-full h-full bg-white rounded-full opacity-50 blur-sm animate-pulse" />
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-md transform scale-150" />
        </div>
    );
}
