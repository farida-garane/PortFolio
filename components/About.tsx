export default function About() {
  return (
    <section id="about" className="px-6 max-w-5xl mx-auto py-20 border-t border-gray-800/60">
      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {/* Label */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            À propos de moi
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Qui suis-je&nbsp;?
          </h2>
        </div>

        {/* Content */}
        <div className="md:col-span-2 space-y-5 text-slate-400 text-base leading-relaxed">
          <p>
            Je suis Farida Anne Kevine GARANE, développeuse en constante formation. Passionnée par le développement backend, j&apos;aime concevoir la logique qui se cache derrière les applications&nbsp;: structuration des données, APIs et résolution de problèmes concrets. Ce qui me motive au quotidien, c&apos;est d&apos;apprendre et de construire des solutions qui répondent à un besoin réel.
          </p>
        </div>
      </div>
    </section>
  );
}