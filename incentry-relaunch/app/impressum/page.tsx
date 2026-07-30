import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | INCENTRY",
  description: "Impressum der INCENTRY GmbH.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="font-display text-4xl mb-2">Impressum</h1>
        <p className="text-anthracite/40 text-sm mb-10">
          Übernommen von der bestehenden Website, Stand Jänner 2025 — vor
          Launch auf Aktualität prüfen.
        </p>

        <div className="space-y-8 text-anthracite/85 leading-relaxed">
          <div>
            <h2 className="font-display text-xl mb-2">Angaben gemäß Impressumspflicht</h2>
            <p>
              Incentry GmbH<br />
              Salzgasse 2<br />
              5400 Hallein bei Salzburg<br />
              Österreich
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Kontakt</h2>
            <p>
              Tel: +43 6245 23 517<br />
              E-Mail: office@incentry.at<br />
              Web: www.incentry.at
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Unternehmensdaten</h2>
            <p>
              UID-Nr.: ATU 74580303<br />
              Firmenbuchnummer: FN 513424 k<br />
              Gerichtsstand: Bezirksgericht Hallein
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Berufsrechtliche Angaben</h2>
            <p>
              Berufsbezeichnung: Eventagentur<br />
              Mitgliedsstaat der Verleihung der Berufsbezeichnung: Österreich<br />
              Kammer bzw. Berufsverband: Wirtschaftskammer Gmunden<br />
              Gesetze, die die Ausübung des Berufes regeln: Gewerbeordnung
              (<a href="https://www.ris.bka.gv.at" className="text-incentry-orange hover:underline" target="_blank" rel="noopener noreferrer">ris.bka.gv.at</a>)
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Konzept und Umsetzung</h2>
            <p>
              Werbeagentur ADAM Communication GmbH<br />
              <a href="https://www.ad-am.at" className="text-incentry-orange hover:underline" target="_blank" rel="noopener noreferrer">www.ad-am.at</a><br />
              UID-Nr.: ATU75923636 · Firmenbuchnummer: FN 541407 m
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Webhosting</h2>
            <p>
              Raidboxes GmbH<br />
              <a href="https://www.raidboxes.io" className="text-incentry-orange hover:underline" target="_blank" rel="noopener noreferrer">www.raidboxes.io</a><br />
              UID: ATU67911548 · Firmenbuchnummer: FN 396455 y
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Online-Streitbeilegung</h2>
            <p>
              Plattform zur Online-Streitbeilegung der Europäischen Kommission:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" className="text-incentry-orange hover:underline" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
