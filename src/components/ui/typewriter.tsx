"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursor?: boolean;
}

export function Typewriter({ text, speed = 50, delay = 0, className = "", cursor = true }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && (
                <span className="animate-pulse ml-1 inline-block w-[2px] h-[1em] bg-current align-middle" />
            )}
        </span>
    );
}
