import Link from "next/link";
import { formats } from "@/content/home";

export default function CoreFormats() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="font-display text-3xl md:text-[2.75rem] max-w-2xl mb-14">
          Wir planen Events, die mehr bewirken.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formats.map((format) => (
            <Link
              key={format.key}
              href={format.href}
              className="group block"
            >
              <div className="ph-image aspect-[4/5] relative rounded-sm">
                <span className="ph-label">Bild folgt</span>
              </div>
              <h3 className="font-display text-2xl mt-5">{format.title}</h3>
              <p className="text-anthracite/75 mt-2 text-[0.95rem] leading-relaxed">
                {format.copy}
              </p>
              <span className="inline-block mt-3 text-sm text-incentry-orange group-hover:underline">
                Mehr erfahren →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
