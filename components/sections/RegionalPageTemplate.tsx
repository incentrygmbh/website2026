import Link from "next/link";

export default function RegionalPageTemplate({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <>
      <section className="py-32 md:py-40 bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-widest text-incentry-orange mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl mb-6">
            {title}
          </h1>
          <p className="text-anthracite/75 text-lg max-w-2xl leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-warm-grey/25">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="font-display text-2xl mb-8">Passende Referenzen aus der Region</h2>
          <p className="text-anthracite/60 max-w-lg mb-8">
            Regionale Case Studies werden ergänzt, sobald die entsprechenden
            Projekte redaktionell aufbereitet sind.
          </p>
          <Link href="/referenzen" className="text-sm text-incentry-orange hover:underline">
            Alle Referenzen ansehen →
          </Link>
        </div>
      </section>

      <section className="bg-deep-black py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="font-display text-warm-white text-2xl md:text-[2.5rem] leading-tight mb-6">
            Welcher besondere Unternehmensmoment steht bei Ihnen bevor?
          </h2>
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
