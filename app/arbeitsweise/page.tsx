import type { Metadata } from "next";
import Link from "next/link";
import { process } from "@/content/home";

export const metadata: Metadata = {
  title: "Arbeitsweise | Eventagentur INCENTRY",
  description:
    "Wie INCENTRY Business Events entwickelt: von Verstehen über Entdecken und Entwickeln bis Realisieren und Verankern.",
};

export default function Page() {
  return (
    <>
      <section className="py-32 md:py-40 bg-warm-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-widest text-incentry-orange mb-4">
            Arbeitsweise
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl mb-6">
            Wir beginnen nicht mit einem fertigen Programm.
          </h1>
          <p className="text-anthracite/75 text-lg max-w-2xl leading-relaxed">
            Wir beginnen nicht mit einem fertigen Programm, sondern mit dem
            Unternehmen, seinen Menschen und dem Ziel. Fünf Phasen führen von
            der ersten Idee bis zur hochwertigen Umsetzung.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 space-y-14">
          {process.map((step) => (
            <div
              key={step.step}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-12 items-start border-t border-warm-grey pt-10"
            >
              <span className="font-display text-incentry-orange text-4xl md:text-5xl">
                {step.step}
              </span>
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-2">{step.title}</h2>
                <p className="text-anthracite/70">{step.question}</p>
              </div>
              <p className="text-anthracite/50 text-sm uppercase tracking-wide md:text-right">
                {step.result}
              </p>
            </div>
          ))}
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
