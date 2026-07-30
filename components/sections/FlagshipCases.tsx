import Link from "next/link";
import { flagshipCases } from "@/content/home";

export default function FlagshipCases() {
  const featured = flagshipCases.find((c) => c.featured) ?? flagshipCases[0];
  const rest = flagshipCases.filter((c) => c.slug !== featured.slug);

  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-3xl md:text-[2.75rem]">
            Referenzen, die für sich sprechen.
          </h2>
          <Link href="/referenzen" className="text-sm text-incentry-orange hover:underline">
            Alle Referenzen ansehen →
          </Link>
        </div>

        <Link
          href={`/referenzen/${featured.slug}`}
          className="group block ph-image aspect-[16/9] md:aspect-[21/9] relative rounded-sm mb-8"
        >
          <span className="ph-label">Case-Video / Key Visual folgt</span>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-warm-white">
            <p className="text-xs uppercase tracking-widest text-warm-white/60 mb-2">
              {featured.client}
            </p>
            <h3 className="font-display text-2xl md:text-4xl">{featured.title}</h3>
            <p className="text-warm-white/70 text-sm mt-2 max-w-xl">{featured.role}</p>
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rest.map((c) => (
            <Link key={c.slug} href={`/referenzen/${c.slug}`} className="group block">
              <div className="ph-image aspect-[16/10] relative rounded-sm">
                <span className="ph-label">Bild folgt</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-anthracite/50 mt-4">
                {c.client}
              </p>
              <h3 className="font-display text-xl mt-1">{c.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
