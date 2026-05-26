"use client";

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-90 sm:opacity-100">
            {/* Subtle grid */}
            <div className="absolute inset-0 grid-bg" />

            {/* One soft white radial fade — top-center */}
            <div
                aria-hidden
                className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
                style={{
                    background:
                        "radial-gradient(closest-side, rgba(255,255,255,0.05), transparent 70%)",
                    filter: "blur(40px)",
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.55)_85%)]" />

            {/* Film grain */}
            <div className="noise-overlay" />
        </div>
    );
}
