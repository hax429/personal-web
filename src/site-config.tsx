import { Code, Terminal, Database, Layout, Server, Smartphone, Github, Linkedin, Twitter as X } from "lucide-react";

export const siteConfig = {
    hero: {
        title: "Gabriel",
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
    skills: [
        { name: "Python", icon: Code },
        { name: "JavaScript (ES6+)", icon: Terminal },
        { name: "Swift / SwiftUI", icon: Layout },
        { name: "Node.js", icon: Server },
        { name: "Tailwind CSS", icon: Layout },
        { name: "MySQL", icon: Database },
        { name: "Mobile First", icon: Smartphone }
    ],
    experience: [
        {
            company: "Tech Solutions Inc.",
            role: "Senior Frontend Engineer",
            period: "2023 - Present",
            description: "Leading the frontend team in building a scalable SaaS platform using Next.js and TypeScript. Improved performance by 40% and established a comprehensive design system.",
            achievements: ["Led team of 5 developers", "Reduced build time by 50%", "Implemented CI/CD pipelines"]
        },
        {
            company: "Creative Agency",
            role: "Web Developer",
            period: "2021 - 2023",
            description: "Developed award-winning marketing websites for Fortune 500 clients using modern web technologies. Focused on creating immersive user experiences.",
            achievements: ["Won Awwwards SOTD", "Built 15+ client sites", "Mentored junior devs"]
        },
        {
            company: "StartUp",
            role: "Junior Developer",
            period: "2020 - 2021",
            description: "Collaborated on the initial product launch, focusing on UI/UX implementation. Worked closely with design team to ensure pixel-perfect implementation.",
            achievements: ["Launched MVP in 3 months", "Integrated payment gateways", "Optimized mobile view"]
        }
    ],
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A high-performance e-commerce solution built with Next.js, Stripe, and Sanity CMS.",
            tech: ["Next.js", "TypeScript", "Stripe", "Sanity"],
            github: "#",
            demo: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task manager with real-time updates and team features.",
            tech: ["React", "Firebase", "Tailwind"],
            github: "#",
            demo: "#"
        },
        {
            title: "AI Dashboard",
            description: "Analytics dashboard powered by machine learning algorithms for data visualization.",
            tech: ["Python", "D3.js", "FastAPI"],
            github: "#",
            demo: "#"
        }
    ],
    contact: {
        description: "I'm open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        socials: [
            { icon: Github, href: "https://github.com/hax429" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/guanbo-wang-383015316/" },
            { icon: X, href: "https://x.com/hax429" },
        ]
    },
    sections: {
        about: true,
        skills: true,
        experience: true,
        projects: true,
        contact: true,
    }
};
