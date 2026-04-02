"use client";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Pratto – Platform delivery",
        desc: "Plataforma completa com painel admin, pagamentos e gestão de entregas.",
        tag: "Aplicação Web",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
        title: "Toll calculator – PMPA",
        desc: "Solução interna para demandas de cálculo diários e geração de relatórios rápidos.",
        tag: "Web",
        tech: ["React Native", "TypeScript"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
        title: "Gestão de Agendamentos – PMPA",
        desc: "Gestão de agendamento de serviços públicos de identidade militar",
        tag: "Aplicação Web",
        tech: ["React", "Node.js", "MySql"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
        title: "Sócio Hub",
        desc: "Aplicação para gestão de sócios, pagamentos e comunicação para associações.",
        tag: "Aplicação Web",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
        title: "Equa Consultoria",
        desc: "Apresentação dos serviços de consultoria, com foco em conversão e geração de leads.",
        tag: "Web",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
        title: "EquaTech",
        desc: "Sistema de gerenciamento de atividades, segmentos, prazos e comunicação integrada.",
        tag: "Aplicação Web",
        tech: ["Nest.js", "MySQL", "Next.js"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="px-6 md:px-10 py-24 max-w-7xl mx-auto"
        >
            {/* HEADER */}
            <div className="text-center">


                <h2 className="text-3xl md:text-5xl font-bold mt-6">
                    Nossos{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        Projetos
                    </span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    Soluções desenvolvidas com tecnologia de ponta para gerar resultados reais.
                </p>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative rounded-2xl overflow-hidden"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

                        {/* CARD */}
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">

                            {/* IMAGE */}
                            <div className="relative h-48 md:h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                {/* overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* TAG */}
                                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-500/80">
                                    {project.tag}
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div className="p-5 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    {project.desc}
                                </p>

                                {/* TECH STACK */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* BORDER HOVER */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-2xl transition"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}