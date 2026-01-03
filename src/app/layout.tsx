import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel | Full Stack Developer",
  description: "Personal portfolio of a Full Stack Developer.",
};

import { CodeBackground } from "@/components/ui/code-background";
import { MouseFollower } from "@/components/ui/mouse-follower";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
      >
        <CodeBackground />
        <MouseFollower />
        <div className="relative z-10">
          {children}
          <footer className="text-center py-10 text-gray-600 font-mono text-xs">
            © {new Date().getFullYear()} DANIEL. ALL RIGHTS RESERVED.
          </footer>
        </div>
      </body>
    </html>
  );
}
