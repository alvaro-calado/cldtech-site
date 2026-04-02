import "@/styles/global.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projetos";
import Team from "@/components/Equipe";
import Contact from "@/components/Contato";
import Footer from "@/components/Footer";
import Background from "@/components/Background";


export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}