import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { siteConfig } from "@/site-config";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pb-20 no-scrollbar">
      {/* Hero is always visible */}
      <div className="snap-start">
        <Hero />
      </div>

      <div className="space-y-0">
        {siteConfig.sections.about && (
          <About />
        )}
        {siteConfig.sections.skills && (
          <Skills />
        )}
        {siteConfig.sections.work && (
          <Work />
        )}
        {siteConfig.sections.projects && (
          <Projects />
        )}
        {siteConfig.sections.contact && (
          <Contact />
        )}
      </div>

      <footer className="snap-start text-center py-10 text-gray-600 font-mono text-xs">
        © {new Date().getFullYear()} DANIEL. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
