"use client";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WORDS = ["Sistemas Web", "Apps Mobile", "Infraestrutura Cloud", "Experiências Digitais"];

const TECH_BADGES = [
    { label: "React",       color: "#61DAFB", x: "12%",  y: "18%" },
    { label: "Next.js",     color: "#ffffff", x: "72%",  y: "14%" },
    { label: "Node.js",     color: "#84cc16", x: "62%",  y: "68%" },
    { label: "TypeScript",  color: "#3b82f6", x: "80%",  y: "44%" },
    { label: "AWS",         color: "#f97316", x: "7%",   y: "58%" },
    { label: "MySQL",       color: "#06b6d4", x: "85%",  y: "76%" },
];

const STATS = [
    { value: 10, suffix: "+", label: "Projetos" },
    { value: 8,  suffix: "+", label: "Clientes" },
    { value: 2,  suffix: "+", label: "Anos" },
];

const TERMINAL_LINES = [
    { text: "$ cldtech deploy --prod",     type: "cmd" },
    { text: "→ Compilando projeto...",     type: "info" },
    { text: "✓ Build: 1.8s",              type: "ok" },
    { text: "✓ Testes: 47/47 passando",   type: "ok" },
    { text: "✓ Bundle: 94kb gzipped",     type: "ok" },
    { text: "→ Publicando em produção...", type: "info" },
    { text: "✓ Deploy realizado! 🚀",     type: "ok" },
    { text: "→ Live em: cldtech.dev.br",  type: "url" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let n = 0;
        const step = value / 35;
        const timer = setInterval(() => {
            n += step;
            if (n >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(n));
        }, 28);
        return () => clearInterval(timer);
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

function MagneticCTA({ children, href }: { children: React.ReactNode; href: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 280, damping: 18 });
    const sy = useSpring(y, { stiffness: 280, damping: 18 });

    const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.35);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
    };
    const onLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.a
            href={href}
            style={{ x: sx, y: sy }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden shimmer-btn bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-base font-semibold inline-block text-center"
        >
            <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
            />
            <span className="relative z-10">{children}</span>
        </motion.a>
    );
}

function Terminal() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let i = 0;
        const tick = () => {
            if (i < TERMINAL_LINES.length) {
                i++;
                setCount(i);
                setTimeout(tick, 650);
            }
        };
        setTimeout(tick, 400);
    }, [isInView]);

    const lineColor = (type: string) => {
        if (type === "ok")   return "text-emerald-400";
        if (type === "info") return "text-blue-300";
        if (type === "url")  return "text-purple-400 underline underline-offset-2";
        return "text-gray-200";
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl"
            style={{ boxShadow: "0 0 60px rgba(99,102,241,0.15)" }}
        >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="text-xs text-gray-400 ml-2 font-mono">terminal — cldtech</span>
                <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-mono">live</span>
                </div>
            </div>

            {/* Body */}
            <div className="p-5 font-mono text-sm space-y-2 min-h-[200px]">
                {TERMINAL_LINES.slice(0, count).map((line, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        className={lineColor(line.type)}
                    >
                        {line.text}
                    </motion.p>
                ))}
                {count < TERMINAL_LINES.length && (
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-blue-400 align-middle"
                    />
                )}
            </div>

            {/* Glow edge */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
        </motion.div>
    );
}

export default function Hero() {
    const [wordIdx, setWordIdx] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2600);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative pt-28 md:pt-36 pb-16 px-5 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">

            {/* Floating tech badges — desktop only */}
            <div className="absolute inset-0 pointer-events-none hidden xl:block">
                {TECH_BADGES.map((b, i) => (
                    <motion.div
                        key={b.label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0.5, 0.9, 0.5], scale: 1, y: [0, -10, 0] }}
                        transition={{
                            opacity: { duration: 3 + i * 0.4, repeat: Infinity },
                            y:       { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                            scale:   { delay: i * 0.15, duration: 0.4 },
                        }}
                        className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur text-xs text-white/70"
                        style={{ left: b.x, top: b.y }}
                    >
                        <span className="w-2 h-2 rounded-full" style={{ background: b.color }} />
                        {b.label}
                    </motion.div>
                ))}
            </div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center w-full">

                {/* LEFT — content */}
                <div>
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs mb-8 w-fit"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Disponível para novos projetos
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] max-w-2xl"
                    >
                        Transformamos ideias em{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 text-transparent bg-clip-text gradient-animate">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={wordIdx}
                                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block"
                                >
                                    {WORDS[wordIdx]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-gray-400 mt-6 max-w-lg text-sm md:text-base leading-relaxed"
                    >
                        A CldTech desenvolve sistemas, aplicativos e infraestrutura cloud
                        sob medida para empresas que buscam inovar e escalar com tecnologia de ponta.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-9 flex flex-col sm:flex-row gap-4"
                    >
                        <MagneticCTA href="#projects">Ver Projetos →</MagneticCTA>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-4 rounded-full text-base font-medium border border-white/20 text-center transition-colors"
                        >
                            Falar Conosco
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 0.6 }}
                        className="mt-14 flex gap-10"
                    >
                        {STATS.map((s, i) => (
                            <div key={i}>
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                    <Counter value={s.value} suffix={s.suffix} />
                                </div>
                                <div className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT — terminal */}
                <div className="hidden lg:block">
                    <Terminal />
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-600 text-[10px] uppercase tracking-widest">scroll</span>
                <motion.div
                    animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"
                />
            </motion.div>
        </section>
    );
}
