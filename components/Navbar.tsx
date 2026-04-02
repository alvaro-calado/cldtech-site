"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80); // só aparece depois
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 w-full z-50 px-6 md:px-10 py-6 transition-all duration-500"
        >
            <div
                className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500
        ${scrolled
                        ? "bg-[#0b0f2a]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-lg"
                        : "bg-transparent"
                    }`}
            >

                <div className="flex items-center gap-3">
                    <Image
                        src="/logocld.png"
                        alt="CldTech logo"
                        width={36}
                        height={36}
                        className="rounded-lg"
                    />
                    <span className="font-semibold text-lg">CldTech</span>
                </div>

                {/* MENU DESKTOP */}
                <div className="hidden md:flex gap-10 text-gray-300">
                    <a href="#" className="hover:text-white transition">Home</a>
                    <a href="#projects" className="hover:text-white transition">Projetos</a>
                    <a href="#team" className="hover:text-white transition">Equipe</a>
                    <a href="#contact" className="hover:text-white transition">Contato</a>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">



                    {/* MOBILE */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-1"
                    >
                        <span className={`w-6 h-[2px] bg-white transition ${open && "rotate-45 translate-y-[6px]"}`} />
                        <span className={`w-6 h-[2px] bg-white transition ${open && "opacity-0"}`} />
                        <span className={`w-6 h-[2px] bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-4 bg-[#0b0f2a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6"
                >
                    <a onClick={() => setOpen(false)} href="#">Home</a>
                    <a onClick={() => setOpen(false)} href="#projects">Projetos</a>
                    <a onClick={() => setOpen(false)} href="#team">Equipe</a>
                    <a onClick={() => setOpen(false)} href="#contact">Contato</a>


                </motion.div>
            )}
        </motion.nav>
    );
}