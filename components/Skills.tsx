import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const categories = [
    { id: "Frontend", label: "Frontend & UI" },
    { id: "Backend", label: "Backend & APIs" },
    { id: "Bases de données", label: "Bases de données" },
    { id: "Mobile", label: "Mobile" },
    { id: "Outils", label: "DevOps & Outils" },
  ];

  return (
    <section id="skills" className="px-6 max-w-5xl mx-auto py-20 border-t border-gray-800/60">
      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {/* Label */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Compétences
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Technologies & outils maîtrisés
          </h2>
        </div>

        {/* Skills list */}
        <div className="md:col-span-2 space-y-8">
          {categories.map((cat) => {
            const skills = portfolioData.skills.filter(
              (s) => s.category === cat.id
            );
            if (skills.length === 0) return null;

            return (
              <div key={cat.id} className="flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider w-32 shrink-0 pt-1">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm text-slate-300 bg-gray-900/70 border border-gray-800 rounded-lg hover:border-gray-700 hover:text-white transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}