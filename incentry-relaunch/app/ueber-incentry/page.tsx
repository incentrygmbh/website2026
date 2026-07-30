import type { Metadata } from "next";
import Link from "next/link";
import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Über INCENTRY | Eventagentur Salzburg",
  description:
    "INCENTRY ist die Eventagentur für Firmenjubiläen, Sommerfeste und besondere Business Events — in Salzburg zu Hause, für ganz Österreich und Bayern im Einsatz.",
};

export default function Page() {
  return (
    <>
      <section className="py-32 md:py-40 bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-widest text-incentry-orange mb-4">
            Über INCENTRY
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl mb-8">
            Ein Partner für Konzeption und hochwertige Umsetzung.
          </h1>
          <p className="text-anthracite/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            {siteInfo.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-grey/25">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="ph-image ph-image--warm aspect-[4/3] relative rounded-sm">
            <span className="ph-label">Teamfoto folgt</span>
          </div>
          <div>
            <h2 className="font-display text-3xl mb-5">Unsere Haltung</h2>
            <p className="text-anthracite/75 leading-relaxed mb-6">
              INCENTRY ist die Eventagentur für Firmenjubiläen, Sommerfeste
              und besondere Business Events — für Unternehmen, die keine
              Veranstaltung von der Stange suchen, sondern einen Partner für
              Konzeption und hochwertige Umsetzung.
            </p>
            <p className="text-anthracite/75 leading-relaxed">
              {siteInfo.region}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <h2 className="font-display text-3xl mb-10">Unser Team</h2>
          <p className="text-anthracite/60 max-w-lg mb-10">
            Teamfotos und persönliche Vorstellungen folgen, sobald die
            entsprechenden Inhalte redaktionell freigegeben sind.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="ph-image ph-image--warm aspect-square relative rounded-sm">
                <span className="ph-label">Teamfoto folgt</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-black py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="font-display text-warm-white text-2xl md:text-[2.5rem] leading-tight mb-6">
            Lernen wir uns kennen.
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
