"use client";

import { Spotlight, type SpotlightActionData } from "@mantine/spotlight";
import {
    Home,
    User,
    Sparkles,
    Briefcase,
    FolderGit2,
    Mail,
    Search,
    Github,
    Linkedin,
    Instagram,
} from "lucide-react";
import { siteConfig, CONTACT_EMAIL } from "@/site-config";

function scrollTo(id: string) {
    const main =
        (document.querySelector("main.snap-y") as HTMLElement | null) ||
        document.scrollingElement;
    const target = document.getElementById(id);
    if (!main || !target) return;
    const top =
        target.getBoundingClientRect().top + (main as HTMLElement).scrollTop;
    (main as HTMLElement).scrollTo({ top, behavior: "smooth" });
}

function openExternal(url: string) {
    window.open(url, "_blank", "noreferrer");
}

export function CommandPalette() {
    const sectionActions: SpotlightActionData[] = [
        {
            id: "hero",
            label: "Home",
            description: "Top of the page",
            onClick: () => scrollTo("hero"),
            leftSection: <Home size={18} />,
            keywords: ["top", "intro", "hero"],
        },
        ...(siteConfig.sections.about
            ? [
                  {
                      id: "about",
                      label: "About",
                      description: "Who I am",
                      onClick: () => scrollTo("about"),
                      leftSection: <User size={18} />,
                  },
              ]
            : []),
        ...(siteConfig.sections.skills
            ? [
                  {
                      id: "skills",
                      label: "Skills",
                      description: "Languages, frontend, backend",
                      onClick: () => scrollTo("skills"),
                      leftSection: <Sparkles size={18} />,
                  },
              ]
            : []),
        ...(siteConfig.sections.work
            ? [
                  {
                      id: "work",
                      label: "Experience",
                      description: "What I've worked on",
                      onClick: () => scrollTo("work"),
                      leftSection: <Briefcase size={18} />,
                  },
              ]
            : []),
        ...(siteConfig.sections.projects
            ? [
                  {
                      id: "projects",
                      label: "Projects",
                      description: "Things I'm building",
                      onClick: () => scrollTo("projects"),
                      leftSection: <FolderGit2 size={18} />,
                  },
              ]
            : []),
        ...(siteConfig.sections.contact
            ? [
                  {
                      id: "contact",
                      label: "Contact",
                      description: "Send me a message",
                      onClick: () => scrollTo("contact"),
                      leftSection: <Mail size={18} />,
                  },
              ]
            : []),
    ];

    const externalActions: SpotlightActionData[] = [
        {
            id: "github",
            label: "GitHub",
            description: "github.com/hax429",
            onClick: () => openExternal("https://github.com/hax429"),
            leftSection: <Github size={18} />,
            keywords: ["code", "repo", "source"],
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            description: "Professional profile",
            onClick: () =>
                openExternal("https://www.linkedin.com/in/guanbo-wang-383015316/"),
            leftSection: <Linkedin size={18} />,
        },
        {
            id: "instagram",
            label: "Instagram",
            description: "@hax42g",
            onClick: () => openExternal("https://www.instagram.com/hax42g/"),
            leftSection: <Instagram size={18} />,
        },
        {
            id: "email",
            label: "Email Gabriel",
            description: CONTACT_EMAIL,
            onClick: () => openExternal(`mailto:${CONTACT_EMAIL}`),
            leftSection: <Mail size={18} />,
            keywords: ["mail", "contact"],
        },
    ];

    return (
        <Spotlight
            actions={[
                { group: "Navigate", actions: sectionActions },
                { group: "External", actions: externalActions },
            ]}
            shortcut={["mod + K", "mod + P", "/"]}
            nothingFound="No matches"
            highlightQuery
            limit={10}
            searchProps={{
                leftSection: <Search size={18} />,
                placeholder: "Jump to a section or link…",
            }}
        />
    );
}
