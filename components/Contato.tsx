"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const enviarWhatsApp = () => {
        const texto = encodeURIComponent(
            `Olá! Gostaria de falar sobre um projeto:\n\n` +
            `👤 Nome: ${nome}\n` +
            `📧 Email: ${email}\n` +
            `📱 Telefone: ${telefone}\n\n` +
            `💬 ${mensagem}`
        );

        const numero = "5591984878814";
        const url = `https://wa.me/${numero}?text=${texto}`;

        window.open(url, "_blank");
    };

    return (
        <section
            id="contact"
            className="px-6 md:px-10 py-24 max-w-7xl mx-auto"
        >
            {/* HEADER */}
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mt-6">
                    Vamos{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        Conversar
                    </span>
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    Tem um projeto em mente? Fale com a gente e vamos transformar sua ideia em realidade.
                </p>
            </div>

            {/* GRID */}
            <div className="grid lg:grid-cols-2 gap-10 mt-16">

                {/* FORM */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-50"></div>

                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-6">
                            Envie uma mensagem
                        </h3>

                        <div className="grid gap-4">
                            <input
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
                                placeholder="Seu nome"
                            />

                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
                                placeholder="Seu email"
                            />

                            <input
                                onChange={(e) => setTelefone(e.target.value)}
                                className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
                                placeholder="Telefone"
                            />

                            <textarea
                                rows={4}
                                onChange={(e) => setMensagem(e.target.value)}
                                className="w-full p-3 bg-black/40 border border-white/10 rounded-lg"
                                placeholder="Conte mais sobre seu projeto..."
                            />
                        </div>

                        <button
                            onClick={enviarWhatsApp}
                            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full font-medium hover:opacity-90 transition"
                        >
                            Enviar Mensagem →
                        </button>
                    </div>
                </motion.div>

                {/* INFO */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-4">
                            Informações de Contato
                        </h3>

                        <div className="space-y-3 text-gray-300 text-sm">
                            <p>Brasil — Atendimento Nacional</p>
                            <p>contatocldtech@gmail.com</p>
                            <p>+55 (91) 98487-8814</p>
                            <p>Seg - Sex: 08h às 18h</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                        <h3 className="text-lg font-semibold">
                            Pronto para inovar?
                        </h3>

                        <p className="text-sm mt-2 text-white/80">
                            Agende uma consultoria gratuita e descubra como podemos ajudar seu negócio.
                        </p>

                        <a
                            href="https://wa.me/5591984878814?text=Olá! Gostaria de agendar uma reunião."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
                        >
                            Agendar reunião
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}