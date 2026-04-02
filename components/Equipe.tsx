"use client";
import { motion } from "framer-motion";

const team = [
    {
        name: "Álvaro Alves",
        role: "CEO & Founder",
        desc: "Especialista em desenvolvimento de software e arquitetura de sistemas escaláveis.",
        image: "/alvaroo.png",
    },
    {
        name: "Enzo Leão",
        role: "CTO & Co-Founder",
        desc: "Focado em tecnologia, performance e soluções modernas para produtos digitais.",
        image: "/enzol.png",
    },
];

export default function Team() {
    return (
        <section
            id="team"
            className="px-6 md:px-10 py-24 max-w-7xl mx-auto text-center"
        >
            {/* Título */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >


                <h2 className="text-3xl md:text-5xl font-bold mt-6">
                    Conheça os{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        Especialistas
                    </span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    Equipe apaixonada por tecnologia, focada em entregar soluções
                    digitais de alta performance.
                </p>
            </motion.div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-8 mt-16">
                {team.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative rounded-2xl overflow-hidden"
                    >
                        {/* Gradient border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

                        {/* Card */}
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6">

                            {/* Imagem */}
                            <div className="relative h-56 md:h-64 rounded-xl overflow-hidden mb-5">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                            </div>

                            {/* Conteúdo */}
                            <h3 className="text-lg md:text-xl font-semibold">
                                {member.name}
                            </h3>

                            <p className="text-blue-400 text-sm mt-1">
                                {member.role}
                            </p>

                            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                {member.desc}
                            </p>

                            {/* Hover effect */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-2xl transition"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}