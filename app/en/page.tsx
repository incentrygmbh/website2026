import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "INCENTRY — Corporate events people will talk about for years to come.",
  description:
    "INCENTRY creates company anniversaries, corporate celebrations and individual team experiences for businesses in Austria and Bavaria.",
};

export default function Page() {
  return (
    <section className="relative ph-image min-h-[80vh] flex items-end">
      <span className="ph-label">Project photography pending · Placeholder</span>
      <div className="mx-auto max-w-[1400px] w-full px-5 md:px-8 pb-20 pt-40">
        <h1 className="font-display text-warm-white text-[2.25rem] leading-[1.1] md:text-[4rem] md:leading-[1.05] max-w-3xl">
          Corporate events people will talk about for years to come.
        </h1>
        <p className="mt-6 text-warm-white/85 text-lg max-w-xl">
          INCENTRY creates company anniversaries, corporate celebrations and
          individual team experiences for businesses looking for more than
          an off-the-shelf event.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/erstgespraech"
            className="inline-flex items-center rounded-full bg-incentry-orange text-deep-black text-base font-medium px-7 py-3.5 hover:bg-warm-white transition-colors"
          >
            Get in touch
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-warm-white/40 text-warm-white text-base px-7 py-3.5 hover:border-warm-white transition-colors"
          >
            Deutsche Version
          </Link>
        </div>
        <p className="text-warm-white/50 text-sm mt-10 max-w-md">
          Further English pages are planned for a later phase of the
          content roadmap (see Playbook, Chapter 10 &amp; 16).
        </p>
      </div>
    </section>
  );
}
