"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home",     href: "#" },
    { label: "Projetos", href: "#projects" },
    { label: "Equipe",   href: "#team" },
    { label: "Contato",  href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { threshold: 0.4 }
        );
        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 w-full z-50 px-4 md:px-8 py-3"
        >
            <div
                className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ${
                    scrolled
                        ? "bg-[#0b0f2a]/80 backdrop-blur-2xl border border-white/10 rounded-xl px-5 py-2 shadow-lg shadow-black/30"
                        : "bg-transparent"
                }`}
            >
                {/* Logo */}
                <motion.div whileHover={{ scale: 1.04 }} className="flex items-center gap-2">
                    <div className="relative">
                        <Image src="/logocld.png" alt="CldTech" width={28} height={28} className="rounded-md" />
                        <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-sm" />
                    </div>
                    <span className="font-bold text-base tracking-tight">CldTech</span>
                </motion.div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(({ label, href }) => {
                        const id = href.replace("#", "") || "top";
                        const isActive = active === id || (active === "" && href === "#");
                        return (
                            <a
                                key={label}
                                href={href}
                                className="relative text-sm py-1 transition-colors group"
                            >
                                <span className={`transition-colors duration-200 ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                    {label}
                                </span>
                                <motion.span
                                    className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                                    initial={false}
                                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ transformOrigin: "left" }}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* CTA + burger */}
                <div className="flex items-center gap-4">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-full text-sm font-medium"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                        Contratar
                    </motion.a>

                    {/* Burger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
                        aria-label="Menu"
                    >
                        <motion.span
                            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            className="w-6 h-[2px] bg-white block origin-center transition-all"
                        />
                        <motion.span
                            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            className="w-6 h-[2px] bg-white block"
                        />
                        <motion.span
                            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            className="w-6 h-[2px] bg-white block origin-center"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -16, scaleY: 0.9 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -16, scaleY: 0.9 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        style={{ transformOrigin: "top" }}
                        className="md:hidden mt-3 mx-0 bg-[#0b0f2a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden"
                    >
                        {NAV_LINKS.map(({ label, href }, i) => (
                            <motion.a
                                key={label}
                                href={href}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5 transition border-b border-white/5 last:border-0"
                            >
                                <span className="w-1 h-1 rounded-full bg-blue-400" />
                                {label}
                            </motion.a>
                        ))}
                        <div className="px-6 py-4">
                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="block text-center bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 rounded-xl text-sm font-medium"
                            >
                                Contratar →
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
