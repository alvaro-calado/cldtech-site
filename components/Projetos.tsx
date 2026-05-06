"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        title: "Toll Calculator – PMPA",
        desc: "Solução interna para cálculo de pedágios diários com geração de relatórios automáticos.",
        tag: "Web",
        tech: ["React Native", "TypeScript"],
        image: "/logocld.png",
        accent: "from-blue-500 to-cyan-500",
    },
    {
        title: "Gestão de Agendamentos – PMPA",
        desc: "Gestão de agendamentos para serviços públicos de identidade militar.",
        tag: "Aplicação Web",
        tech: ["React", "Node.js", "MySQL"],
        image: "/agendamento.png",
        accent: "from-indigo-500 to-blue-500",
    },
    {
        title: "Sócio Hub",
        desc: "Plataforma para gestão de sócios, pagamentos e comunicação interna em associações.",
        tag: "Aplicação Web",
        tech: ["Next.js", "Tailwind", "Vercel"],
        image: "/sociohub.png",
        accent: "from-purple-500 to-pink-500",
    },
    {
        title: "Equa Consultoria",
        desc: "Landing page focada em conversão e geração de leads para consultoria.",
        tag: "Web",
        tech: ["Next.js", "Tailwind", "Vercel"],
        image: "/equa.png",
        accent: "from-violet-500 to-purple-600",
    },
    {
        title: "EquaTech",
        desc: "Sistema completo de gestão de projetos, tarefas e times distribuídos.",
        tag: "Aplicação Web",
        tech: ["Nest.js", "MySQL", "Next.js"],
        image: "/equatechmobile.png",
        isMobile: true,
        accent: "from-blue-600 to-indigo-500",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const rotX = useMotionValue(0);
    const rotY = useMotionValue(0);
    const sRotX = useSpring(rotX, { stiffness: 260, damping: 28 });
    const sRotY = useSpring(rotY, { stiffness: 260, damping: 28 });
    const [hovered, setHovered] = useState(false);

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        rotX.set(((e.clientY - r.top) / r.height - 0.5) * -14);
        rotY.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    };
    const onLeave = () => { rotX.set(0); rotY.set(0); setHovered(false); };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            onMouseEnter={() => setHovered(true)}
            style={{ rotateX: sRotX, rotateY: sRotY, transformPerspective: 1100 }}
            className="group cursor-default relative"
        >
            {/* Outer glow */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-r ${project.accent} blur-2xl opacity-20 rounded-2xl -z-10 scale-105`}
            />

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col">

                {/* Image area */}
                <div className="relative h-48 overflow-hidden flex items-center justify-center bg-black/20">
                    {project.isMobile ? (
                        <motion.div
                            animate={{ y: hovered ? -6 : 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-[110px] h-[220px] bg-gradient-to-b from-gray-900 to-black rounded-[20px] p-[2px] shadow-2xl"
                        >
                            <div className="w-full h-full rounded-[18px] overflow-hidden relative">
                                <Image src={project.image} alt={project.title} fill sizes="110px" className="object-contain" />
                            </div>
                            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-7 h-[3px] bg-black rounded-full z-10" />
                        </motion.div>
                    ) : (
                        <motion.div
                            className="absolute inset-0"
                            animate={{ scale: hovered ? 1.07 : 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </motion.div>
                    )}

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Tag */}
                    <motion.span
                        animate={{ opacity: 1, y: hovered ? -2 : 0 }}
                        className={`absolute top-3 right-3 text-[11px] px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} font-medium shadow-lg`}
                    >
                        {project.tag}
                    </motion.span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-semibold leading-snug">{project.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed flex-1">{project.desc}</p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-gray-300 bg-white/5"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Animated bottom border */}
                <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent}`}
                    animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
                    style={{ transformOrigin: "left" }}
                    transition={{ duration: 0.4 }}
                />
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="px-5 md:px-12 py-28 max-w-7xl mx-auto">

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <span className="inline-block text-xs uppercase tracking-[0.2em] text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5">
                    Portfólio
                </span>
                <h2 className="text-3xl md:text-5xl font-bold">
                    Nossos{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 text-transparent bg-clip-text gradient-animate">
                        Projetos
                    </span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                    Soluções desenvolvidas com tecnologia de ponta para gerar resultados reais.
                </p>
            </motion.div>

            {/* Divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10 mb-14"
            />

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} index={i} />
                ))}
            </div>
        </section>
    );
}
