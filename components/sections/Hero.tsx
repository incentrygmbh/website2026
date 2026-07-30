import Link from "next/link";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative ph-image min-h-[86vh] flex items-end">
      <span className="ph-label">Projektfotografie folgt · Platzhalter</span>
      <div className="mx-auto max-w-[1400px] w-full px-5 md:px-8 pb-16 md:pb-24 pt-40">
        <h1 className="font-display text-warm-white text-[2.5rem] leading-[1.08] md:text-[4.5rem] md:leading-[1.05] max-w-4xl font-medium">
          {hero.h1}
        </h1>
        <p className="mt-6 text-warm-white/85 text-base md:text-lg max-w-xl">
          {hero.subline}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href={hero.ctaPrimary.href}
            className="inline-flex items-center rounded-full bg-incentry-orange text-deep-black text-sm md:text-base font-medium px-7 py-3.5 hover:bg-warm-white transition-colors"
          >
            {hero.ctaPrimary.label}
          </Link>
          <Link
            href={hero.ctaSecondary.href}
            className="inline-flex items-center rounded-full border border-warm-white/40 text-warm-white text-sm md:text-base px-7 py-3.5 hover:border-warm-white transition-colors"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
