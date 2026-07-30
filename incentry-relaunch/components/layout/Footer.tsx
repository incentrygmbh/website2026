import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-black text-warm-white">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Image
            src="/logo/incentry-logo-white.svg"
            alt="INCENTRY Event Agentur"
            width={130}
            height={65}
            className="h-10 w-auto mb-5"
          />
          <p className="text-sm text-warm-grey/80 leading-relaxed max-w-xs">
            In Salzburg zu Hause. Für besondere Business Events in ganz
            Österreich und Bayern im Einsatz.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-warm-grey/60 mb-4">
            Formate
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/firmenjubilaeen" className="hover:text-incentry-orange transition-colors">Firmenjubiläen</Link></li>
            <li><Link href="/sommerfeste" className="hover:text-incentry-orange transition-colors">Sommerfeste</Link></li>
            <li><Link href="/team-events" className="hover:text-incentry-orange transition-colors">Team Events</Link></li>
            <li><Link href="/referenzen" className="hover:text-incentry-orange transition-colors">Referenzen</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-warm-grey/60 mb-4">
            Regionen
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/eventagentur-salzburg" className="hover:text-incentry-orange transition-colors">Eventagentur Salzburg</Link></li>
            <li><Link href="/eventagentur-oesterreich" className="hover:text-incentry-orange transition-colors">Eventagentur Österreich</Link></li>
            <li><Link href="/einsatzgebiete" className="hover:text-incentry-orange transition-colors">Einsatzgebiete</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-warm-grey/60 mb-4">
            Kontakt
          </h3>
          <ul className="space-y-2.5 text-sm text-warm-grey/80">
            <li>Salzgasse 2, 5400 Hallein</li>
            <li>
              <a href="tel:+436245235170" className="hover:text-incentry-orange transition-colors">
                +43 6245 23 517
              </a>
            </li>
            <li>
              <a href="mailto:office@incentry.at" className="hover:text-incentry-orange transition-colors">
                office@incentry.at
              </a>
            </li>
          </ul>
          <p className="text-xs text-warm-grey/40 mt-4 leading-relaxed">
            UID-Nr.: ATU 74580303<br />
            Firmenbuchnummer: FN 513424 k
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-grey/50">
          <p>© {year} INCENTRY GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-warm-grey transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-warm-grey transition-colors">Datenschutz</Link>
            <Link href="/en" className="hover:text-warm-grey transition-colors">EN</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
