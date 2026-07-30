"use client";

import { useState } from "react";
import Link from "next/link";
import { cases, type CaseFormat } from "@/content/cases";

const filters: ("Alle" | CaseFormat)[] = [
  "Alle",
  "Firmenjubiläen",
  "Sommerfeste",
  "Team Events / Kick-offs",
];

export default function ReferenzenGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("Alle");

  const visible = active === "Alle" ? cases : cases.filter((c) => c.format === active);
  const featured = cases.find((c) => c.featured);

  return (
    <div>
      {featured && (
        <Link
          href={`/referenzen/${featured.slug}`}
          className="group block ph-image aspect-[16/9] md:aspect-[21/9] relative rounded-sm mb-14"
        >
          <span className="ph-label">Case-Video / Key Visual folgt</span>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-warm-white">
            <p className="text-xs uppercase tracking-widest text-warm-white/60 mb-2">
              {featured.client}
            </p>
            <h2 className="font-display text-2xl md:text-4xl">{featured.title}</h2>
            <p className="text-warm-white/70 text-sm mt-2 max-w-xl">{featured.role}</p>
          </div>
        </Link>
      )}

      <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Nach Anlass filtern">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              active === f
                ? "bg-deep-black text-warm-white border-deep-black"
                : "border-warm-grey text-anthracite hover:border-anthracite"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visible.map((c) => (
          <Link key={c.slug} href={`/referenzen/${c.slug}`} className="group block">
            <div className="ph-image aspect-[4/3] relative rounded-sm">
              <span className="ph-label">Bild folgt</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-anthracite/50 mt-4">
              {c.format}
            </p>
            <h3 className="font-display text-xl mt-1">{c.client}</h3>
            <p className="text-anthracite/60 text-sm mt-1">{c.title}</p>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-anthracite/60 py-10">
          Für diesen Anlass folgen in Kürze weitere Referenzen.
        </p>
      )}
    </div>
  );
}
