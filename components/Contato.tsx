"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FieldProps {
    label: string;
    type?: string;
    value: string;
    onChange: (v: string) => void;
    rows?: number;
}

function FloatingField({ label, type = "text", value, onChange, rows }: FieldProps) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;
    const base = `w-full bg-black/40 rounded-xl px-4 text-white text-sm focus:outline-none transition-all duration-300 ${
        focused ? "border border-blue-500/50 bg-blue-500/5" : "border border-white/10 hover:border-white/20"
    }`;

    return (
        <div className="relative">
            {rows ? (
                <textarea
                    rows={rows}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`${base} pt-7 pb-3 resize-none`}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`${base} pt-7 pb-3`}
                />
            )}
            <span
                className={`absolute left-4 pointer-events-none transition-all duration-200 ${
                    active
                        ? "top-2.5 text-[11px] text-blue-400 font-medium"
                        : rows ? "top-4 text-sm text-gray-500" : "top-1/2 -translate-y-1/2 text-sm text-gray-500"
                }`}
            >
                {label}
            </span>
            {/* Focus glow */}
            <AnimatePresence>
                {focused && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-xl bg-blue-500/8 -z-10 blur-sm pointer-events-none"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

const INFO_ITEMS = [
    { icon: "📍", label: "Localização",  value: "Brasil — Atendimento Nacional" },
    { icon: "✉️", label: "Email",        value: "contatocldtech@gmail.com" },
    { icon: "📱", label: "WhatsApp",     value: "+55 (91) 98487-8814" },
    { icon: "⏰", label: "Horário",      value: "Seg – Sex: 08h às 18h" },
];

export default function Contato() {
    const [nome,      setNome]      = useState("");
    const [email,     setEmail]     = useState("");
    const [telefone,  setTelefone]  = useState("");
    const [mensagem,  setMensagem]  = useState("");
    const [sent,      setSent]      = useState(false);

    const enviar = () => {
        if (!nome) return;
        const texto = encodeURIComponent(
            `Olá! Gostaria de falar sobre um projeto:\n\n👤 Nome: ${nome}\n📧 Email: ${email}\n📱 Telefone: ${telefone}\n\n💬 ${mensagem}`
        );
        window.open(`https://wa.me/5591984878814?text=${texto}`, "_blank");
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <section id="contact" className="px-5 md:px-12 py-28 max-w-7xl mx-auto">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <span className="inline-block text-xs uppercase tracking-[0.2em] text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5">
                    Contato
                </span>
                <h2 className="text-3xl md:text-5xl font-bold">
                    Vamos{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 text-transparent bg-clip-text gradient-animate">
                        Conversar
                    </span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Tem um projeto em mente? Fale com a gente e transformamos sua ideia em realidade.
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
            <div className="grid lg:grid-cols-2 gap-10">

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-2xl rounded-2xl" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-7 md:p-8 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-6">Envie uma mensagem</h3>
                        <div className="grid gap-3.5">
                            <FloatingField label="Seu nome"   value={nome}     onChange={setNome} />
                            <FloatingField label="Seu email"  value={email}    onChange={setEmail} type="email" />
                            <FloatingField label="Telefone"   value={telefone} onChange={setTelefone} type="tel" />
                            <FloatingField label="Conte mais sobre seu projeto..." value={mensagem} onChange={setMensagem} rows={4} />
                        </div>

                        <motion.button
                            onClick={enviar}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative mt-6 w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl font-semibold text-sm transition-opacity"
                            style={{ boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
                        >
                            <AnimatePresence mode="wait">
                                {sent ? (
                                    <motion.span
                                        key="sent"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center justify-center gap-2"
                                    >
                                        ✓ Mensagem enviada no WhatsApp!
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="idle"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        Enviar via WhatsApp →
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-5"
                >
                    {/* Info card */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex-1">
                        <h3 className="text-base font-semibold mb-5">Informações de Contato</h3>
                        <div className="grid gap-4">
                            {INFO_ITEMS.map(({ icon, label, value }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-lg leading-none mt-0.5">{icon}</span>
                                    <div>
                                        <div className="text-[11px] text-gray-500 uppercase tracking-wider">{label}</div>
                                        <div className="text-sm text-gray-200 mt-0.5">{value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA card */}
                    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-purple-700">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        <div className="relative">
                            <div className="text-xs uppercase tracking-widest text-white/60 mb-2">Consultoria gratuita</div>
                            <h3 className="text-lg font-bold">Pronto para inovar?</h3>
                            <p className="text-sm mt-2 text-white/75 leading-relaxed">
                                Agende uma consultoria e descubra como podemos transformar seu negócio.
                            </p>
                            <motion.a
                                href="https://wa.me/5591984878814?text=Olá! Gostaria de agendar uma reunião."
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-5 inline-block bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold"
                            >
                                Agendar reunião →
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
