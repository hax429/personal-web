import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "./globals.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  createTheme,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Navbar } from "@/components/navbar";
import { CodeBackground } from "@/components/ui/code-background";
import { MouseFollower } from "@/components/ui/mouse-follower";
import { ClickBurst } from "@/components/ui/click-burst";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { CommandPalette } from "@/components/ui/command-palette";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hax429.me"),
  title: "Gabriel Wang | Full Stack Developer",
  description:
    "Personal portfolio of Gabriel Wang — a full stack developer building things that matter.",
  openGraph: {
    title: "Gabriel Wang | Full Stack Developer",
    description: "Connect humans with technology.",
    url: "https://hax429.me",
    siteName: "Gabriel Wang",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Wang | Full Stack Developer",
    description: "Connect humans with technology.",
  },
  icons: {
    icon: "/avatar.png",
  },
};

const theme = createTheme({
  primaryColor: "gray",
  fontFamily: "var(--font-sans)",
  fontFamilyMonospace: "var(--font-mono)",
  headings: {
    fontFamily: "var(--font-sans)",
    fontWeight: "900",
  },
  defaultRadius: "md",
  cursorType: "pointer",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
      >
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Notifications position="top-right" />
          <CommandPalette />
          <ScrollProgress />
          <AmbientBackground />
          <CodeBackground />
          <MouseFollower />
          <ClickBurst />
          <div className="relative z-10">
            <Navbar />
            {children}
            <footer className="text-center py-10 text-gray-600 font-mono text-xs">
              © {new Date().getFullYear()} GABRIEL WANG. ALL RIGHTS RESERVED.
            </footer>
          </div>
          <BackToTop />
        </MantineProvider>
      </body>
    </html>
  );
}
