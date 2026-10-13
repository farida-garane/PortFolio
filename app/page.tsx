import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Subtle top glow only */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-blue-600/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}