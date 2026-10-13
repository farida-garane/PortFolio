import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="text-sm font-semibold text-white hover:text-blue-400 transition tracking-tight"
        >
          {portfolioData.personal.name}
        </Link>

        <nav className="flex items-center gap-7 text-sm text-slate-400">
          <Link href="#about" className="hover:text-white transition-colors">
            À propos
          </Link>
          <Link href="#skills" className="hover:text-white transition-colors">
            Compétences
          </Link>
          <Link
            href="#contact"
            className="px-4 py-1.5 rounded-lg border border-blue-800/60 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-xs font-medium transition-all"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}