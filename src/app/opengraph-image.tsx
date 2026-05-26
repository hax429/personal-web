import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const alt = "Gabriel Wang — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
    const avatarPath = path.join(process.cwd(), "public", "avatar.png");
    const avatarBuffer = await readFile(avatarPath);
    const avatarSrc = `data:image/png;base64,${avatarBuffer.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "#08090a",
                    display: "flex",
                    flexDirection: "column",
                    padding: "80px",
                    position: "relative",
                    color: "#f7f8f8",
                    fontFamily: "monospace",
                }}
            >
                {/* Subtle radial accent */}
                <div
                    style={{
                        position: "absolute",
                        top: "-200px",
                        right: "-200px",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)",
                    }}
                />

                {/* Top eyebrow */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        opacity: 0.55,
                        fontSize: "20px",
                        letterSpacing: "0.2em",
                    }}
                >
                    <div
                        style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#34d399",
                        }}
                    />
                    AVAILABLE FOR NEW PROJECTS
                </div>

                {/* Main row: avatar + text */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "56px",
                        marginTop: "60px",
                        flex: 1,
                    }}
                >
                    <img
                        src={avatarSrc}
                        alt="Gabriel avatar"
                        width={220}
                        height={220}
                        style={{
                            width: "220px",
                            height: "220px",
                            borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,0.18)",
                            background: "#0e0f11",
                            objectFit: "cover",
                        }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                            style={{
                                fontSize: "112px",
                                fontWeight: 900,
                                letterSpacing: "-0.04em",
                                lineHeight: 0.9,
                                display: "flex",
                                alignItems: "baseline",
                            }}
                        >
                            Gabriel Wang
                            <span style={{ opacity: 0.4 }}>.</span>
                        </div>
                        <div
                            style={{
                                marginTop: "20px",
                                fontSize: "40px",
                                color: "rgba(247,248,248,0.45)",
                                letterSpacing: "-0.01em",
                                fontWeight: 700,
                            }}
                        >
                            Connect humans with technology.
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "22px",
                        letterSpacing: "0.16em",
                        opacity: 0.55,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>{">"}</span>
                        FULL STACK DEVELOPER
                    </div>
                    <div>HAX429.ME</div>
                </div>
            </div>
        ),
        size
    );
}
