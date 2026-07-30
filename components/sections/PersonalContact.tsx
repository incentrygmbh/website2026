import Link from "next/link";

export default function PersonalContact() {
  return (
    <section className="py-20 md:py-28 bg-warm-grey/25">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="ph-image ph-image--warm aspect-[4/3] rounded-sm relative">
          <span className="ph-label">Teamfoto folgt</span>
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-[2.75rem] mb-5">
            Ein persönlicher Ansprechpartner für Ihr Projekt.
          </h2>
          <p className="text-anthracite/75 leading-relaxed max-w-md mb-8">
            Kein Callcenter, keine wechselnden Zuständigkeiten – ein fester
            Ansprechpartner begleitet Ihr Projekt von der ersten Idee bis zur
            Umsetzung.
          </p>
          <div className="flex flex-col gap-2 text-[0.95rem] mb-8">
            <a href="tel:+436245235170" className="hover:text-incentry-orange transition-colors w-fit">
              Telefon: +43 6245 23 517
            </a>
            <a href="mailto:office@incentry.at" className="hover:text-incentry-orange transition-colors w-fit">
              office@incentry.at
            </a>
          </div>
          <Link
            href="/erstgespraech"
            className="inline-flex items-center rounded-full bg-deep-black text-warm-white text-sm md:text-base px-7 py-3.5 hover:bg-incentry-orange transition-colors"
          >
            Projekt besprechen
          </Link>
        </div>
      </div>
    </section>
  );
}
