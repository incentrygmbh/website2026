# INCENTRY Relaunch — incentry.at (Next.js)

Vollständiger, eigenständiger Neuaufbau der INCENTRY-Website nach dem
`Digital Growth & Website Playbook 2030`. Dieses Projekt ist komplett
getrennt von der aktuellen Live-Seite (WordPress) und beeinflusst diese
in keiner Form. Domain bleibt `www.incentry.at` — der Wechsel erfolgt
erst über einen bewussten späteren Switch (siehe unten).

## Status dieser Lieferung

Alle Kernseiten aus der Sitemap (Playbook Kapitel 5) sind umgesetzt:

- Startseite (alle 9 Abschnitte aus Kapitel 6)
- Formatseiten: Firmenjubiläen, Sommerfeste, Team Events
- Referenzübersicht mit Anlassfilter + 7 Case-Study-Detailseiten
  (Snapshot-Umfang, siehe Hinweis unten)
- Arbeitsweise, Über INCENTRY
- Regionalseiten: Einsatzgebiete, Eventagentur Salzburg, Eventagentur Österreich
- Kontakt + Erstgespräch (Multi-Step-Formular, Frontend-only)
- Insights-Übersicht (mit geplanten Themen als Vorschau)
- Impressum, Datenschutz (strukturelles Gerüst, siehe Hinweis unten)
- Reduzierte englische Startseite (`/en`)
- Header/Footer, Design-Tokens, JSON-LD, robots.txt, vollständige Sitemap

27 Seiten insgesamt, Build läuft fehlerfrei (`npm run build`).

## Bewusste Einschränkungen — vor Launch zu klären

**1. Case Studies sind "Snapshot"-Tier (Playbook Kap. 9), nicht "Flagship".**
Die sieben Cases (Schwabenhaus, Interreg Alpine Space, Red Bull Nederland,
DSV, Legrand, PTM, International Sales Meeting) enthalten nur die aus
dem Playbook freigegebenen Rollenbeschreibungen. Ausgangslage,
Herausforderung, Leitidee und Ergebnis sind bewusst allgemein gehalten,
**keine erfundenen Fakten oder Zahlen** — echte Projektdetails, Zitate
und Bildmaterial müssen vom Projektteam ergänzt werden (`content/cases.ts`).

**2. Bildflächen sind markierte Platzhalter.**
`.ph-image` in `app/globals.css` — Farbverlauf mit sichtbarem Label
"Bild folgt". Austausch-Anleitung siehe unten.

**3. Impressum/Datenschutz enthalten jetzt die echten Texte der Live-Seite.**
1:1 übernommen aus der bestehenden WordPress-Installation (Stand Jänner
2025). Hosting bleibt bei Raidboxes (bestätigt), Impressum-Angabe dazu
ist korrekt und muss nicht geändert werden. Vor Launch trotzdem prüfen,
ob die eingesetzten Tracking-Dienste (Google Analytics, Sales-Suckers)
unverändert bleiben — falls sich daran etwas ändert, muss die
Datenschutzerklärung entsprechend angepasst werden.

**4. Erstgespräch-Formular ist Frontend-only.**
Es sammelt Eingaben im Browser-State, sendet aber nirgends etwas ab
(kein Backend, kein E-Mail-Versand). Vor Launch an einen echten
Endpunkt anbinden (API-Route, CRM-Webhook o. ä.), siehe Kommentar in
`components/sections/ErstgespraechForm.tsx`.

**5. Insights-Bereich enthält noch keine echten Artikel.**
Der Redaktionsplan (Playbook Kap. 10) sieht vor, dass diese erst ab
Launch-Monat 1 entstehen — hier stehen nur die geplanten Themen als
Vorschau, kein `page.tsx` für einzelne Artikel-Detailseiten.

## Setup

```bash
npm install
npm run dev      # lokaler Dev-Server, http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server nach dem Build
```

## Fonts

Google Fonts konnten in der Build-Umgebung nicht per Laufzeit-Fetch
geladen werden (Netzwerk-Restriktion der Sandbox). Cormorant Garamond
und Inter werden daher über die selbst gehosteten `@fontsource`-Pakete
eingebunden (`app/layout.tsx`) — funktioniert überall ohne externe
Abhängigkeit zu Google Fonts und ist DSGVO-freundlicher.

## Contentpflege

- `content/site.ts` — Navigation, globale Site-Infos
- `content/home.ts` — Startseite: Hero, Formate, Cases, Prozess, Abschluss-CTA
- `content/formats.ts` — Inhalte der drei Formatseiten
- `content/cases.ts` — Alle Case-Study-Daten (Fakten + Fließtext je Case)

Texte ändern = diese Dateien bearbeiten, kein Suchen im JSX nötig.

## Asset-Austausch (wichtig vor Launch)

1. Bilddatei nach `public/images/` legen (z. B. `hero-jubilaeum.jpg`)
2. In der jeweiligen Komponente das `<div className="ph-image">` durch
   `<Image src="/images/..." fill alt="..." />` (aus `next/image`) ersetzen
3. Aussagekräftige Alt-Texte nicht vergessen (Accessibility + SEO)

Kundenlogos (`content/home.ts`, `trust.clients`) sind aktuell Textnamen —
durch echte Logo-Dateien ersetzen, sobald Freigaben vorliegen (siehe
Playbook, Anhang B: Logo-Regeln).

## SEO-Prüfung vor Launch

- `public/robots.txt` steht aktuell auf `Disallow: /` — **absichtlich**,
  solange die Seite parallel/unveröffentlicht aufgebaut wird. Vor dem
  echten Go-Live auf Allow umstellen.
- `app/sitemap.ts` enthält bereits alle aktuellen Seiten inkl. Cases —
  bei neuen Seiten dort ergänzen.
- JSON-LD in `app/layout.tsx` prüfen (Adresse, Firmierung, ggf. um
  LocalBusiness-Felder wie Öffnungszeiten erweitern).
- Metadata (Title/Description) sind je Seite bereits gesetzt — bei
  neuen Unterseiten (z. B. Insights-Artikel) nicht vergessen.

## Deployment

Dieses Projekt hat noch kein Hosting/Deployment-Ziel. Empfohlener Weg:
1. Projekt in ein eigenes Git-Repository pushen
2. Auf Vercel (oder vergleichbarem Next.js-Hosting) deployen — läuft
   zunächst unter einer Vorschau-URL, **nicht** unter incentry.at
3. Erst wenn alle Seiten stehen und intern freigegeben sind: DNS/Domain
   auf das neue Deployment umstellen (der eigentliche "Switch")

## Offene redaktionelle Punkte

- Finale Fonts (Lizenz/Ladezeit final entscheiden, siehe Playbook Kap. 8)
- Exakter Orange-Wert aus dem offiziellen CD (aktuell Platzhalter
  `#e07a1f` in `app/globals.css`, Variable `--incentry-orange`)
- Team-/Ansprechpartner-Kontaktdaten (aktuell Platzhalter in
  `components/sections/PersonalContact.tsx`, `app/kontakt/page.tsx`)
- Echte, freigegebene Case-Study-Inhalte (siehe Punkt 1 oben)
- Redaktionsplan-Artikel für den Insights-Bereich
- Rechtliche Prüfung von Impressum und Datenschutz
- Backend-Anbindung des Erstgespräch-Formulars
- Analytics-Integration (GA4/Matomo) und Consent Mode (Playbook Kap. 12/15)
