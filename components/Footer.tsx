"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const LINKS = [
    { label: "Home",     href: "#" },
    { label: "Projetos", href: "#projects" },
    { label: "Equipe",   href: "#team" },
    { label: "Contato",  href: "#contact" },
];

const SERVICES = [
    "Desenvolvimento Web",
    "Apps Mobile",
    "Infraestrutura Cloud",
    "Sistemas Internos",
    "Consultoria Técnica",
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/8 overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/10 blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-5 md:px-12 pt-16 pb-10">

                {/* Top grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-2.5 mb-4 w-fit"
                        >
                            <Image src="/logocld.png" alt="CldTech" width={34} height={34} className="rounded-lg" />
                            <span className="font-bold text-xl tracking-tight">CldTech</span>
                        </motion.div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Transformamos ideias em soluções digitais de alta performance.
                            Sistemas web, apps e cloud sob medida para o seu negócio crescer.
                        </p>
                        <div className="flex items-center gap-2 mt-5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-400 text-xs">Disponível para novos projetos</span>
                        </div>
                    </div>

                    {/* Nav */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Navegação</h4>
                        <ul className="space-y-2.5">
                            {LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <motion.a
                                        href={href}
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-colors" />
                                        {label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Serviços</h4>
                        <ul className="space-y-2.5">
                            {SERVICES.map(s => (
                                <li key={s} className="text-gray-400 text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-purple-500/60" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2026 CldTech. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 text-xs">
                        <span>Feito com</span>
                        <span className="text-red-400">♥</span>
                        <span>no Brasil</span>
                        <span className="text-gray-700">·</span>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-medium">
                            Next.js · Tailwind · Framer Motion
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
