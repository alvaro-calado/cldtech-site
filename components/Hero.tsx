"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative pt-28 md:pt-40 pb-20 md:pb-28 px-5 md:px-12 max-w-7xl mx-auto">



            {/* TÍTULO */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
            >
                Transformamos <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 text-transparent bg-clip-text">
                    Ideias em Soluções Digitais
                </span>
            </motion.h1>

            {/* TEXTO */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 mt-5 md:mt-8 max-w-xl text-sm md:text-lg"
            >
                A CldTech desenvolve sistemas, aplicativos e infraestrutura cloud sob medida
                para empresas que buscam inovar e escalar com tecnologia de ponta.
            </motion.p>

            {/* BOTÕES */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4"
            >

                <a
                    href="#projects"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-medium inline-block"
                >
                    Ver Projetos →
                </a>


            </motion.div>



        </section>
    );
}