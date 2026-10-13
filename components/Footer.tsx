import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-gray-800/60 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <p>© {year} {portfolioData.personal.name}</p>
        <nav className="flex items-center gap-6">
          <Link href="#about" className="hover:text-slate-400 transition">À propos</Link>
          <Link href="#skills" className="hover:text-slate-400 transition">Compétences</Link>
          <Link href="#contact" className="hover:text-slate-400 transition">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}