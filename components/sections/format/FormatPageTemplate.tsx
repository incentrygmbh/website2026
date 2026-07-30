import Link from "next/link";
import type { FormatPageContent } from "@/content/formats";

export default function FormatPageTemplate({ data }: { data: FormatPageContent }) {
  return (
    <>
      {/* Hero */}
      <section className="relative ph-image min-h-[70vh] flex items-end">
        <span className="ph-label">Projektfotografie folgt · Platzhalter</span>
        <div className="mx-auto max-w-[1400px] w-full px-5 md:px-8 pb-14 md:pb-20 pt-32">
          <p className="text-warm-white/60 text-xs uppercase tracking-widest mb-4">
            {data.eyebrow}
          </p>
          <h1 className="font-display text-warm-white text-[2.25rem] leading-[1.1] md:text-[3.75rem] md:leading-[1.08] max-w-3xl font-medium">
            {data.heroTitle}
          </h1>
          <p className="mt-5 text-warm-white/85 text-base md:text-xl max-w-xl font-display italic">
            {data.heroSubline}
          </p>
          <Link
            href="/erstgespraech"
            className="inline-flex mt-8 items-center rounded-full bg-incentry-orange text-deep-black text-sm md:text-base font-medium px-7 py-3.5 hover:bg-warm-white transition-colors"
          >
            Projekt besprechen
          </Link>
        </div>
      </section>

      {/* Relevanz */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight">
            {data.relevanceHeading}
          </h2>
          <p className="text-anthracite/75 text-lg leading-relaxed max-w-xl">
            {data.relevanceCopy}
          </p>
        </div>
      </section>

      {/* Was Sie erwarten können (outcomes) */}
      <section className="py-16 md:py-24 bg-warm-grey/25">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="font-display text-2xl md:text-[2rem] mb-10">
            Was Sie erwarten können
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
            {data.outcomes.map((outcome, i) => (
              <li key={outcome} className="border-t border-anthracite/20 pt-5">
                <span className="font-display text-incentry-orange text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-anthracite/80">
                  {outcome}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Veranstaltungsformen */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="font-display text-2xl md:text-[2rem] mb-10">
            {data.variantsHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.variants.map((variant) => (
              <div key={variant.title}>
                <div className="ph-image aspect-[4/5] relative rounded-sm mb-4">
                  <span className="ph-label">Bild folgt</span>
                </div>
                <h3 className="font-display text-xl">{variant.title}</h3>
                <p className="text-anthracite/70 text-sm mt-2 leading-relaxed">
                  {variant.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passende Referenzen */}
      {data.cases.length > 0 && (
        <section className="py-16 md:py-24 bg-warm-grey/25">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <h2 className="font-display text-2xl md:text-[2rem]">
                Passende Referenzen
              </h2>
              <Link href="/referenzen" className="text-sm text-incentry-orange hover:underline">
                Alle Referenzen ansehen →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.cases.map((c) => (
                <Link key={c.slug} href={`/referenzen/${c.slug}`} className="group block">
                  <div className="ph-image aspect-[16/10] relative rounded-sm">
                    <span className="ph-label">Bild folgt</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-anthracite/50 mt-4">
                    {c.client}
                  </p>
                  <h3 className="font-display text-xl mt-1">{c.title}</h3>
                  <p className="text-anthracite/60 text-sm mt-1">{c.role}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="font-display text-2xl md:text-[2rem] mb-10">
            Häufige Fragen
          </h2>
          <dl className="divide-y divide-warm-grey/70">
            {data.faq.map((item) => (
              <div key={item.question} className="py-6">
                <dt className="font-display text-xl mb-2">{item.question}</dt>
                <dd className="text-anthracite/70 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-black py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="font-display text-warm-white text-2xl md:text-[2.5rem] leading-tight mb-6">
            Welcher besondere Unternehmensmoment steht bei Ihnen bevor?
          </h2>
          <p className="text-warm-grey/70 leading-relaxed mb-9 max-w-xl mx-auto">
            Erzählen Sie uns vom Anlass. Das Konzept muss noch nicht fertig
            sein — genau dafür ist der erste Austausch da.
          </p>
          <Link
            href="/erstgespraech"
            className="inline-flex items-center rounded-full bg-incentry-orange text-deep-black text-base font-medium px-8 py-4 hover:bg-warm-white transition-colors"
          >
            Projekt besprechen
          </Link>
        </div>
      </section>
    </>
  );
}
