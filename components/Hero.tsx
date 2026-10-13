import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="px-6 max-w-5xl mx-auto pt-36 pb-20">

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
        {portfolioData.personal.name}
      </h1>

      {/* Title */}
      <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-6">
        {portfolioData.personal.title}
      </p>

      {/* Bio */}
      <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
        {portfolioData.personal.bio}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="#contact"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-0.5"
        >
          Me contacter
        </Link>
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-slate-300 border border-gray-800 hover:border-gray-700 font-semibold text-sm transition-all hover:-translate-y-0.5"
        >
          GitHub 
        </a>
        
      </div>
    </section>
  );
}