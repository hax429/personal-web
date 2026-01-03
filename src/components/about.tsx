import { Section } from "./ui/section";
import { siteConfig } from "@/site-config";

export function About() {
    return (
        <Section id="about" title="ABOUT">
            <div className="text-gray-300 font-mono space-y-6 leading-relaxed text-lg">
                {siteConfig.about.sections.map((section, index) => (
                    <p key={index}>
                        <span className="text-gray-500">{section.label}</span> {section.content}
                    </p>
                ))}
            </div>
        </Section>
    );
}
