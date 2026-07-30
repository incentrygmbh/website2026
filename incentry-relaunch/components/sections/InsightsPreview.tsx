import Link from "next/link";

// Redaktionsplan (Playbook Kap. 10) startet in Monat 1 mit den ersten Insights.
// Bis zur Veröffentlichung stehen hier die geplanten Themen als Vorschau.
const plannedInsights = [
  {
    title: "Firmenjubiläum planen: Zeitplan und erste Schritte",
    category: "Firmenjubiläum",
  },
  {
    title: "Budget für Business Events realistisch kalkulieren",
    category: "Entscheidung",
  },
  {
    title: "Sommerfest bei jedem Wetter: die Schlechtwetter-Alternative",
    category: "Sommerfest",
  },
];

export default function InsightsPreview() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-3xl md:text-[2.75rem]">
            Wissen schafft Nachfrage.
          </h2>
          <Link href="/insights" className="text-sm text-incentry-orange hover:underline">
            Alle Insights ansehen →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plannedInsights.map((insight) => (
            <div
              key={insight.title}
              className="border border-warm-grey/70 rounded-sm p-6 md:p-7"
            >
              <p className="text-xs uppercase tracking-widest text-incentry-orange mb-3">
                {insight.category}
              </p>
              <h3 className="font-display text-xl leading-snug">
                {insight.title}
              </h3>
              <p className="text-anthracite/45 text-xs mt-4">
                In redaktioneller Vorbereitung
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
