"use client";
import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    size: 1 + (i % 3) * 0.6,
    left: (i * 31 + (i * i * 7) % 53) % 94 + 3,
    top: (i * 17 + (i * i * 11) % 43) % 92 + 4,
    delay: (i * 0.18) % 5,
    duration: 4 + (i % 6),
}));

const GLOWS = [
    { color: "bg-blue-500/25",   size: 700, top: -120, left: -120, xRange: [0, 140, 0],  yRange: [0, 80, 0],  dur: 14 },
    { color: "bg-purple-500/25", size: 700, top: "auto", left: "auto", right: -120, bottom: -120, xRange: [0, -140, 0], yRange: [0, -80, 0], dur: 18 },
    { color: "bg-cyan-500/15",   size: 500, top: "40%", left: "50%",  xRange: [0, -60, 0],  yRange: [0, 80, 0],  dur: 22 },
    { color: "bg-indigo-600/15", size: 400, top: "20%", left: "70%",  xRange: [0, 80, 0],   yRange: [0, -60, 0], dur: 19 },
    { color: "bg-violet-500/15", size: 450, top: "70%", left: "10%",  xRange: [0, 60, 0],   yRange: [0, 50, 0],  dur: 25 },
];

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">

            {/* Base gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#1a2a6c,#0b0f2a_65%)]" />

            {/* Animated glow orbs */}
            {GLOWS.map((g, i) => (
                <motion.div
                    key={i}
                    animate={{ x: g.xRange, y: g.yRange }}
                    transition={{ duration: g.dur, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${g.color} blur-[140px] rounded-full`}
                    style={{
                        width: g.size,
                        height: g.size,
                        top: g.top,
                        left: (g as any).left ?? "auto",
                        right: (g as any).right ?? "auto",
                        bottom: (g as any).bottom ?? "auto",
                    }}
                />
            ))}

            {/* Dot grid */}
            <div className="absolute inset-0 network" />

            {/* Floating particles */}
            {PARTICLES.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        animation: `particle-drift ${p.duration}s ${p.delay}s ease-in-out infinite`,
                        willChange: "transform",
                    }}
                />
            ))}

            {/* Scanline sweep */}
            <div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent pointer-events-none"
                style={{ animation: "scanline 8s linear infinite" }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0b0f2a_100%)]" />
        </div>
    );
}
