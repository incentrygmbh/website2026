import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cases, getCaseBySlug } from "@/content/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.client} — ${c.title} | INCENTRY Referenzen`,
    description: c.role,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const related = cases.filter((x) => x.slug !== c.slug && x.format === c.format).slice(0, 1);

  return (
    <>
      <section className="relative ph-image min-h-[65vh] flex items-end">
        <span className="ph-label">Case-Video / Key Visual folgt</span>
        <div className="mx-auto max-w-[1400px] w-full px-5 md:px-8 pb-14 pt-32">
          <p className="text-warm-white/60 text-xs uppercase tracking-widest mb-3">
            {c.format}
          </p>
          <h1 className="font-display text-warm-white text-[2rem] md:text-[3.5rem] leading-tight max-w-3xl">
            {c.client} — {c.title}
          </h1>
          <p className="text-warm-white/80 mt-4 max-w-xl">{c.role}</p>
        </div>
      </section>

      <section className="py-14 bg-warm-grey/25">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {c.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-widest text-anthracite/50 mb-1">
                  {fact.label}
                </dt>
                <dd className="font-display text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8 space-y-12">
          <div>
            <h2 className="font-display text-2xl mb-3">Ausgangslage</h2>
            <p className="text-anthracite/80 leading-relaxed">{c.narrative.ausgangslage}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-3">Herausforderung</h2>
            <p className="text-anthracite/80 leading-relaxed">{c.narrative.herausforderung}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-3">Leitidee &amp; Konzept</h2>
            <p className="text-anthracite/80 leading-relaxed">{c.narrative.leitidee}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-3">Ergebnis</h2>
            <p className="text-anthracite/80 leading-relaxed">{c.narrative.ergebnis}</p>
            <p className="text-anthracite/40 text-xs mt-3 uppercase tracking-wide">
              Kundenstimme &amp; Bildstrecke folgen nach Freigabe
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-warm-grey/25">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            {related[0] && (
              <>
                <p className="text-xs uppercase tracking-widest text-anthracite/50 mb-2">
                  Ähnliches Projekt
                </p>
                <Link
                  href={`/referenzen/${related[0].slug}`}
                  className="font-display text-2xl hover:text-incentry-orange transition-colors"
                >
                  {related[0].client} — {related[0].title} →
                </Link>
              </>
            )}
          </div>
          <Link
            href="/erstgespraech"
            className="inline-flex items-center rounded-full bg-deep-black text-warm-white text-base px-8 py-4 hover:bg-incentry-orange transition-colors shrink-0"
          >
            Projekt besprechen
          </Link>
        </div>
      </section>
    </>
  );
}
