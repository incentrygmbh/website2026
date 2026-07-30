import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Eventagentur INCENTRY",
  description: "Entscheidungshilfen rund um Firmenjubiläen, Sommerfeste und Team Events.",
};

const plannedInsights = [
  { title: "Firmenjubiläum planen: Zeitplan und erste Schritte", category: "Firmenjubiläum" },
  { title: "Budget für Business Events realistisch kalkulieren", category: "Entscheidung" },
  { title: "Sommerfest bei jedem Wetter: die Schlechtwetter-Alternative", category: "Sommerfest" },
  { title: "Team Event oder Kick-off: den richtigen Rahmen wählen", category: "Team Events" },
];

export default function Page() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="text-xs uppercase tracking-widest text-incentry-orange mb-4">Insights</p>
        <h1 className="font-display text-4xl md:text-6xl max-w-3xl mb-6">
          Wissen, das früh in Ihre Entscheidung einzahlt.
        </h1>
        <p className="text-anthracite/70 max-w-2xl mb-16 leading-relaxed">
          Der Redaktionsplan für diesen Bereich startet mit Launch der
          neuen Website (siehe Playbook, Kapitel 10). Die ersten Themen:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plannedInsights.map((insight) => (
            <div key={insight.title} className="border border-warm-grey/70 rounded-sm p-7">
              <p className="text-xs uppercase tracking-widest text-incentry-orange mb-3">
                {insight.category}
              </p>
              <h2 className="font-display text-xl leading-snug">{insight.title}</h2>
              <p className="text-anthracite/45 text-xs mt-4">In redaktioneller Vorbereitung</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
