"use client";
import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: 1 + (i % 3) * 0.6,
    left: (i * 31 + (i * i * 7) % 53) % 94 + 3,
    top: (i * 17 + (i * i * 11) % 43) % 92 + 4,
    delay: (i * 0.3) % 5,
    duration: 5 + (i % 5),
}));

const GLOWS = [
    { color: "bg-blue-500/25",   size: 700, top: -120, left: -120, xRange: [0, 120, 0],  yRange: [0, 70, 0],  dur: 16 },
    { color: "bg-purple-500/25", size: 700, top: "auto", left: "auto", right: -120, bottom: -120, xRange: [0, -120, 0], yRange: [0, -70, 0], dur: 20 },
    { color: "bg-cyan-500/12",   size: 450, top: "40%", left: "50%",  xRange: [0, -50, 0], yRange: [0, 70, 0], dur: 24 },
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

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0b0f2a_100%)]" />
        </div>
    );
}
