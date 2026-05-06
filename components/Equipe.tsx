"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Avatar({ name, accent }: { name: string; accent: string }) {
    const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2);
    return (
        <div className="relative h-52 flex flex-col items-center justify-center bg-black/20">
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${accent} p-[2px] shadow-2xl`}>
                <div className="w-full h-full rounded-full bg-[#0d1130] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white tracking-wide">{initials}</span>
                </div>
            </div>
            <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent`} />
        </div>
    );
}

const team = [
    {
        name: "Álvaro Alves",
        role: "CEO & Founder",
        desc: "Desenvolvedor de Software com experiência em arquitetura de sistemas escaláveis e liderança de produtos digitais.",
        skills: ["Next.js", "Node.js", "MySQL", "TypeScript"],
        accent: "from-blue-500 to-cyan-400",
    },
    {
        name: "Enzo Leão",
        role: "CTO & Co-Founder",
        desc: "Analista e Desenvolvedor com expertise em desenvolvimento full-stack, arquitetura de APIs e liderança técnica.",
        skills: ["React", "Nest.js", "MySQL", "Docker"],
        accent: "from-purple-500 to-violet-400",
    },
];

function MemberCard({ member, index }: { member: typeof team[0]; index: number }) {
    const rotX = useMotionValue(0);
    const rotY = useMotionValue(0);
    const sRotX = useSpring(rotX, { stiffness: 240, damping: 26 });
    const sRotY = useSpring(rotY, { stiffness: 240, damping: 26 });

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        rotX.set(((e.clientY - r.top) / r.height - 0.5) * -10);
        rotY.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    };
    const onLeave = () => { rotX.set(0); rotY.set(0); };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX: sRotX, rotateY: sRotY, transformPerspective: 1000 }}
            className="group relative"
        >
            {/* Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-0 group-hover:opacity-15 blur-2xl rounded-2xl transition-all duration-500 -z-10 scale-110`} />

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-300">

                {/* Avatar */}
                <div className="relative overflow-hidden">
                    <Avatar name={member.name} accent={member.accent} />
                    <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${member.accent} text-[11px] font-semibold shadow-lg z-10`}>
                        {member.role}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <div className={`w-2 h-2 rounded-full mt-1.5 bg-gradient-to-r ${member.accent} pulse-ring`} />
                    </div>

                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">{member.desc}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-5">
                        {member.skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + i * 0.07, duration: 0.3 }}
                                className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-gray-300 bg-white/5 hover:border-white/25 transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Animated bottom gradient line */}
                <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${member.accent}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                    style={{ transformOrigin: "left" }}
                />
            </div>
        </motion.div>
    );
}

export default function Team() {
    return (
        <section id="team" className="px-5 md:px-12 py-28 max-w-7xl mx-auto">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <span className="inline-block text-xs uppercase tracking-[0.2em] text-purple-400 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-5">
                    Time
                </span>
                <h2 className="text-3xl md:text-5xl font-bold">
                    Conheça os{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 text-transparent bg-clip-text gradient-animate">
                        Especialistas
                    </span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Equipe apaixonada por tecnologia, focada em entregar soluções digitais de alta performance.
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
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {team.map((m, i) => <MemberCard key={m.name} member={m} index={i} />)}
            </div>
        </section>
    );
}
