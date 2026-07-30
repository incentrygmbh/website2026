import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt | Eventagentur INCENTRY",
  description: "So erreichen Sie INCENTRY — telefonisch, per E-Mail oder über das Erstgespräch-Formular.",
};

export default function Page() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-widest text-incentry-orange mb-4">Kontakt</p>
          <h1 className="font-display text-4xl md:text-6xl mb-8">Sprechen wir über Ihr Projekt.</h1>
          <div className="space-y-4 text-lg">
            <p>Salzgasse 2, 5400 Hallein</p>
            <p>
              <a href="tel:+436245235170" className="hover:text-incentry-orange transition-colors">
                Telefon: +43 6245 23 517
              </a>
            </p>
            <p>
              <a href="mailto:office@incentry.at" className="hover:text-incentry-orange transition-colors">
                office@incentry.at
              </a>
            </p>
          </div>
          <Link
            href="/erstgespraech"
            className="inline-flex mt-10 items-center rounded-full bg-deep-black text-warm-white text-base px-8 py-4 hover:bg-incentry-orange transition-colors"
          >
            Erstgespräch anfragen
          </Link>
        </div>
        <div className="ph-image ph-image--warm aspect-[4/3] relative rounded-sm">
          <span className="ph-label">Teamfoto folgt</span>
        </div>
      </div>
    </section>
  );
}
