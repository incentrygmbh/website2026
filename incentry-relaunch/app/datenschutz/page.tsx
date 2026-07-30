import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | INCENTRY",
  description: "Datenschutzerklärung der INCENTRY GmbH.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="font-display text-4xl mb-2">Datenschutzerklärung</h1>
        <p className="text-anthracite/40 text-sm mb-10">
          Übernommen von der bestehenden Website, Stand Jänner 2025.
        </p>

        <div className="bg-warm-grey/30 border border-warm-grey rounded-md p-5 mb-10 text-sm text-anthracite/80">
          <strong>Hinweis für die Redaktion:</strong> Dieser Text stammt 1:1
          von der aktuellen Live-Seite. Vor Launch prüfen, ob er noch zu den
          tatsächlich auf der neuen Website eingesetzten Diensten passt
          (z. B. falls Google Analytics, Sales-Suckers oder das Hosting
          gewechselt werden) — siehe Playbook Kapitel 17 „Risiken und
          Governance", Punkt Datenschutz.
        </div>

        <div className="space-y-8 text-anthracite/85 leading-relaxed">
          <div>
            <h2 className="font-display text-xl mb-2">Geltungsbereich</h2>
            <p>
              Diese Datenschutzerklärung klärt Nutzer über die Art, den
              Umfang und Zwecke der Erhebung und Verwendung
              personenbezogener Daten durch den verantwortlichen Anbieter
              (Incentry GmbH, Salzgasse 2, A-5400 Hallein bei Salzburg,
              Österreich, +43 6245 235 17, office@incentry.at) auf dieser
              Website auf.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Zugriffsdaten / Server-Logfiles</h2>
            <p className="mb-3">
              Der Anbieter (beziehungsweise sein Webspace-Provider) erhebt
              Daten über jeden Zugriff auf die Website (sogenannte
              Serverlogfiles). Zu den Zugriffsdaten gehören: Name der
              abgerufenen Website, Datei, Datum und Uhrzeit des Abrufs,
              übertragene Datenmenge, Meldung über erfolgreichen Abruf,
              Browsertyp nebst Version, das Betriebssystem des Nutzers,
              Referrer-URL (die zuvor besuchte Seite), IP-Adresse und der
              anfragende Provider.
            </p>
            <p>
              Der Anbieter verwendet die Protokolldaten nur für statistische
              Auswertungen zum Zweck des Betriebs, der Sicherheit und der
              Optimierung des Angebotes. Der Anbieter behält sich jedoch
              vor, die Protokolldaten nachträglich zu überprüfen, wenn
              aufgrund konkreter Anhaltspunkte der berechtigte Verdacht
              einer rechtswidrigen Nutzung besteht.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Kontaktaufnahme</h2>
            <p>
              Bei der Kontaktaufnahme mit dem Anbieter (zum Beispiel per
              E-Mail) werden die Angaben des Nutzers zwecks Bearbeitung der
              Anfrage sowie für den Fall, dass Anschlussfragen entstehen,
              gespeichert. Diese Daten werden nicht ohne die Einwilligung
              des Nutzers weitergegeben. Der Anbieter nützt die
              Informationen des Nutzers aber auch dazu, um die Plattform zu
              verbessern, einem Missbrauch der Website vorzubeugen oder zu
              entdecken.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Einbindung von Diensten und Inhalten Dritter</h2>
            <p>
              Zu Zwecken der Marketing- und Vertriebsoptimierung werden auf
              dieser Website Produkte und Dienstleistungen der
              Sales-Suckers OG (www.sales-suckers.com) verwendet. Dabei
              werden Daten erhoben, verarbeitet und gespeichert, aus denen
              unter einem Pseudonym Nutzungsprofile erstellt werden. Soweit
              möglich und sinnvoll werden die Nutzungsprofile
              anonymisiert. Hierzu können Cookies oder berechnete
              eindeutige „Geräte-IDs" (z. B. zum Speichern der Abmeldung)
              zum Einsatz kommen. Die erhobenen Daten, die auch
              personenbezogene Daten beinhalten können, werden an
              Sales-Suckers übermittelt oder direkt von Sales-Suckers
              erhoben. Sales-Suckers darf Informationen, die durch Besuche
              auf den Webseiten hinterlassen werden, nutzen, um
              anonymisierte Nutzungsprofile zu erstellen. Die dabei
              gewonnenen Daten werden ohne gesondert erteilte Zustimmung
              des Betroffenen nicht benutzt, um den Besucher dieser Website
              persönlich zu identifizieren, und nicht mit personenbezogenen
              Daten über das Pseudonym zusammengeführt. Soweit
              IP-Adressen erhoben werden, werden diese unverzüglich nach
              Erhebung durch Löschen des letzten Nummernbereichs
              anonymisiert. Der Datenerhebung, -verarbeitung und
              -speicherung kann jederzeit mit Wirkung für die Zukunft
              widersprochen werden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Cookies</h2>
            <p className="mb-3">
              Auf dieser Website werden sogenannte Cookies verwendet.
              Cookies sind kleine Textdateien, die auf jedem Computer oder
              Smartphone bei Besuch dieser Website gespeichert werden. Sie
              enthalten unter anderem: Name des Servers, der das
              Datenpaket geschrieben hat, eine einmalig verliehene
              ID-Nummer und manchmal ein Enddatum.
            </p>
            <p>
              Cookies ermöglichen die Wiedererkennung des Nutzers bei einem
              erneuten Besuch der Website. Sie können diese Cookies auch
              ablehnen, indem Sie Ihren Browser entsprechend einrichten.
              Bei der Deaktivierung von Cookies kann die Funktionalität der
              Website eingeschränkt sein.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Google Analytics</h2>
            <p className="mb-3">
              Dieses Angebot benutzt Google Analytics, einen
              Webanalysedienst der Google Inc. Google Analytics verwendet
              Cookies, die eine Analyse der Benutzung der Website
              ermöglichen. Die IP-Anonymisierung ist auf dieser Website
              aktiv: Die IP-Adresse der Nutzer wird von Google innerhalb
              von Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
              volle IP-Adresse an einen Server von Google in den USA
              übertragen und dort gekürzt.
            </p>
            <p>
              Sie können die Speicherung der Cookies durch eine
              entsprechende Einstellung Ihrer Browser-Software verhindern
              sowie die Erfassung der durch das Cookie erzeugten Daten
              mittels des unter{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-incentry-orange hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                tools.google.com/dlpage/gaoptout
              </a>{" "}
              verfügbaren Browser-Plugins verhindern.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl mb-2">Widerruf, Änderungen, Berichtigungen und Aktualisierungen</h2>
            <p>
              Der Nutzer hat das Recht, auf Antrag unentgeltlich Auskunft
              über die zu seiner Person gespeicherten personenbezogenen
              Daten zu erhalten. Zusätzlich hat der Nutzer das Recht auf
              Berichtigung unrichtiger Daten, Sperrung und Löschung seiner
              personenbezogenen Daten, soweit dem keine gesetzliche
              Aufbewahrungspflicht entgegensteht. Bei Fragen zu dieser
              Datenschutzerklärung, zur Vervollständigung, Änderung oder
              Löschung der Daten oder bei Widerspruch gegen Speicherung
              und Verwendung erreichen Sie den Anbieter unter
              office@incentry.at oder postalisch:
            </p>
            <p className="mt-3">
              Incentry GmbH<br />
              Salzgasse 2<br />
              A-5400 Hallein bei Salzburg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
