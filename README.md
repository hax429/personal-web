# Portfolio Website

A modern, responsive, and interactive personal portfolio website built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/).

## Features

-   **Responsive Design**: Fully responsive layout optimized for mobile and desktop.
-   **Animations**:
    -   Scroll-triggered section reveals.
    -   Floating "Matrix-like" multilingual code background ("Roaming" mode).
    -   Mouse follower spotlight effect.
    -   Typewriter text effects.
-   **Centralized Config**: All content can be edited in a single file (`src/site-config.tsx`).
-   **Sections**:
    -   **Hero**: Introduction with typing effect.
    -   **About**: Bio and background.
    -   **Skills**: Tech stack grid with icons.
    -   **Experience**: Vertical timeline of work history.
    -   **Projects**: Showcase of recent work.
    -   **Contact**: Social links and contact form.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

You can edit all the website's text, data, and settings in **`src/site-config.tsx`**.
This file handles:
-   Personal information (Name, Bio).
-   Experience Timeline data.
-   Skills list and icons.
-   Project details.
-   Contact links.
-   Section visibility (enable/disable sections).

## Tech Stack

-   **Framework**: Next.js 15
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **Font**: Inter & JetBrains Mono

## License

MIT
