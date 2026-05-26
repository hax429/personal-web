import {
    Smartphone,
    Github,
    Instagram,
    Linkedin,
    Mail,
    Code,
    Braces,
    Bird,
    Hexagon,
    Wind,
    Database,
} from "lucide-react";

export const CONTACT_EMAIL = "gabriel@hax429.me";

export const siteConfig = {
    hero: {
        title: "Gabriel Wang",
        typewriterText: "FULL STACK DEVELOPER",
        description: "I aim to build product that can truly benefit people.",
    },
    about: {
        sections: [
            {
                label: "01",
                content: (
                    <>
                        Hello! I&apos;m Gabriel, an upcoming freshman at Johns Hopkins University.
                        I enjoy creating things that live on the internet and spread joy.
                    </>
                )
            },
            {
                label: "02",
                content: (
                    <>
                        Up to now, I&apos;ve had the privilege of interning at
                        <span className="text-white font-bold"> MIT Media Lab</span>,
                        <span className="text-white font-bold"> start-up</span>, and studying at
                        <span className="text-white font-bold"> M&TSI UPenn</span>.
                    </>
                )
            },
            {
                label: "03",
                content: (
                    <>
                        My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                    </>
                )
            }
        ]
    },
    skills: {
        focus: "Building BlinkOS — a cross-platform note system across iOS, macOS, and a Node server.",
        categories: [
            {
                name: "Languages",
                items: [
                    { name: "Python", icon: Code, blurb: "Scripts, data, automation" },
                    { name: "JavaScript (ES6+)", icon: Braces, blurb: "TypeScript-flavored, daily driver" },
                    { name: "Swift / SwiftUI", icon: Bird, blurb: "Native iOS & macOS" },
                ],
            },
            {
                name: "Frontend",
                items: [
                    { name: "Tailwind CSS", icon: Wind, blurb: "Utility-first styling" },
                    { name: "Mobile First", icon: Smartphone, blurb: "Responsive by default" },
                ],
            },
            {
                name: "Backend & Data",
                items: [
                    { name: "Node.js", icon: Hexagon, blurb: "APIs, bots, services" },
                    { name: "MySQL", icon: Database, blurb: "Relational data" },
                ],
            },
        ],
    },
    experience: [
        {
            company: "LaunchX Summer Program",
            role: "iOS Developer & Co-Founder",
            period: "2024",
            description: "Built the iOS app Sequi: Track an Animal for a non-profit startup that lets users track animal locations in real time. Successfully raised over $500 for the cause.",
            achievements: ["Sequi iOS App", "Non-profit Startup", "$500+ Raised"],
            link: "https://apps.apple.com/us/app/sequi-track-an-animal/id6738854793"
        },
        {
            company: "UPenn M&TSI Program",
            role: "Research Student",
            period: "2025",
            description: "Developed UWB (Ultra-Wideband) for exploring nearby device tracking on the Stella board. Researched AI-aided ADHD diagnosis with fMRI data using Transformer models to capture spatio-temporal features and improve classification accuracy. Used the Multimodal Automated Interpretability Agent (MAIA) to provide transparent insights into model decisions by mapping neuron focus points to brain regions associated with ADHD.",
            achievements: ["UWB Tracking", "fMRI + Transformers", "MAIA Interpretability", "IEEE Published"],
            link: "https://ieeexplore.ieee.org/document/11257074"
        },
        {
            company: "Johns Hopkins University",
            role: "Computer Science Student",
            period: "2026",
            description: "Enrolled at Johns Hopkins University to study Computer Science.",
            achievements: ["Computer Science", "Incoming Freshman"],
            link: ""
        }
    ],
    projects: [
        {
            title: "BlinkOS",
            status: "WORK IN PROGRESS",
            description: "An iOS / macOS / server integration of Blinko — a personal note-taking system based on blinkospace/blinko. Currently building the cross-platform client and sync layer.",
            tech: ["TypeScript", "Swift", "Node.js", "Blinko"],
            github: "https://github.com/hax429/blinkos",
            demo: ""
        },
        {
            title: "BTSDBot",
            description: "A unified Discord bot + web server for the BTSD community. Handles anonymous messaging, Wordle streak tracking with a public leaderboard, automated birthday announcements, and an April Fools translation mode — all in a single Node.js process.",
            tech: ["Node.js", "Discord.js", "SQLite", "Express"],
            github: "https://github.com/hax429/BTSDBot",
            demo: ""
        },
        {
            title: "Sequi — Track an Animal",
            description: "iOS app paired with a Sequi Keychain that lets users track and 'adopt' a real animal in real-time. Available on the App Store.",
            tech: ["Swift", "SwiftUI", "iOS", "CoreLocation"],
            github: "",
            demo: "https://apps.apple.com/us/app/sequi-track-an-animal/id6738854793"
        }
    ],
    contact: {
        description: "I'm open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        socials: [
            { icon: Github, href: "https://github.com/hax429", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/guanbo-wang-383015316/", label: "LinkedIn" },
            { icon: Instagram, href: "https://www.instagram.com/hax42g/", label: "Instagram" },
            { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
        ]
    },
    sections: {
        about: true,
        skills: true,
        work: true,
        projects: true,
        contact: true,
    }
};
