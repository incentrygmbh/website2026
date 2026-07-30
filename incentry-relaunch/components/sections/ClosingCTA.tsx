import Link from "next/link";
import { closing } from "@/content/home";

export default function ClosingCTA() {
  return (
    <section className="bg-deep-black py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <h2 className="font-display text-warm-white text-3xl md:text-[2.75rem] leading-tight mb-6">
          {closing.heading}
        </h2>
        <p className="text-warm-grey/70 leading-relaxed mb-9 max-w-xl mx-auto">
          {closing.copy}
        </p>
        <Link
          href={closing.cta.href}
          className="inline-flex items-center rounded-full bg-incentry-orange text-deep-black text-base font-medium px-8 py-4 hover:bg-warm-white transition-colors"
        >
          {closing.cta.label}
        </Link>
      </div>
    </section>
  );
}
