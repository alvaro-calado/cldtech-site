"use client";
import { motion } from "framer-motion";

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">

            {/* BASE */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1a2a6c,#0b0f2a_60%)]" />

            {/* GLOW 1 */}
            <motion.div
                animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[700px] h-[700px] bg-blue-500/30 blur-[140px] rounded-full top-[-100px] left-[-100px]"
            />

            {/* GLOW 2 */}
            <motion.div
                animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[700px] h-[700px] bg-purple-500/30 blur-[140px] rounded-full bottom-[-100px] right-[-100px]"
            />

            {/* GRID / NETWORK */}
            <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle,#ffffff33_1px,transparent_1px)] bg-[size:40px_40px]" />

        </div>
    );
}