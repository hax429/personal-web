"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+{}|:<>?";

interface DecodeTextProps {
    text: string;
    className?: string;
    trigger?: boolean;
}

export function DecodeText({ text, className, trigger = true }: DecodeTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);

    useEffect(() => {
        if (!trigger) return;

        let iterations = 0;
        setIsScrambling(true);

        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iterations += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, trigger]);

    return (
        <span className={className}>{displayText}</span>
    );
}
