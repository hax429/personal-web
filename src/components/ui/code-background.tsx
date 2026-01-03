"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const snippets = [
    { text: 'print("Hello World")', lang: "Python" },
    { text: 'console.log("Hello World");', lang: "JavaScript" },
    { text: 'echo "Hello World";', lang: "PHP" },
    { text: 'System.out.println("Hello World");', lang: "Java" },
    { text: 'println!("Hello World");', lang: "Rust" },
    { text: 'ECHO Hello World', lang: "Batch" },
    { text: 'std::cout << "Hello World";', lang: "C++" },
    { text: 'fmt.Println("Hello World")', lang: "Go" },
    { text: 'puts "Hello World"', lang: "Ruby" },
    { text: '吾有一言。曰「Hello World」。書之。', lang: "Wenyan" },
    { text: '信息框 ("Hello World", 0, )', lang: "Yiyu" },
];

export function CodeBackground() {
    const [elements, setElements] = useState<any[]>([]);

    useEffect(() => {
        const generateElements = () => {
            return Array.from({ length: 25 }).map((_, i) => ({
                id: i,
                Snippet: snippets[Math.floor(Math.random() * snippets.length)],
                x: Math.random() * 100,
                y: Math.random() * 100,
                scale: 0.5 + Math.random() * 0.5,
                opacity: 0.3 + Math.random() * 0.5,
                duration: 20 + Math.random() * 20,
                // Create random path
                pathX: Array.from({ length: 4 }).map(() => Math.random() * 100),
                pathY: Array.from({ length: 4 }).map(() => Math.random() * 100),
                delay: Math.random() * 5,
            }));
        };
        setElements(generateElements());
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    initial={{ opacity: 0, x: `${el.x}vw`, y: `${el.y}vh` }}
                    animate={{
                        opacity: [0, el.opacity, 0],
                        x: el.pathX.map((v: number) => `${v}vw`),
                        y: el.pathY.map((v: number) => `${v}vh`)
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        delay: el.delay,
                        ease: "linear",
                        times: [0, 0.33, 0.66, 1]
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        fontSize: `${el.scale}rem`,
                    }}
                    className="font-mono text-white/50 whitespace-nowrap select-none"
                >
                    {el.Snippet.text}
                </motion.div>
            ))}

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-30" />
        </div>
    );
}
