export type CaseFormat = "Firmenjubiläen" | "Sommerfeste" | "Team Events / Kick-offs";

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  role: string;
  format: CaseFormat;
  featured?: boolean;
  facts: { label: string; value: string }[];
  narrative: {
    ausgangslage: string;
    herausforderung: string;
    leitidee: string;
    ergebnis: string;
  };
};

// Hinweis: Diese Inhalte folgen dem "Snapshot"-Umfang aus Playbook Kap. 9
// (200–400 Wörter), da über die freigegebenen Rollenbeschreibungen hinaus
// keine bestätigten Detailfakten vorliegen. Vor Veröffentlichung durch das
// Projektteam prüfen und mit echten Zahlen/Zitaten auf "Standard" oder
// "Flagship"-Umfang ausbauen (siehe Playbook, Governance-Regel "Projektfakten").
export const cases: CaseStudy[] = [
  {
    slug: "schwabenhaus-soelden",
    client: "Schwabenhaus",
    title: "Sales Kick-off in Sölden",
    role: "Premium Sales Kick-off, alpine Dramaturgie, komplexe Logistik",
    format: "Team Events / Kick-offs",
    featured: true,
    facts: [
      { label: "Format", value: "Sales Kick-off" },
      { label: "Ort", value: "Sölden, Tirol" },
      { label: "Redaktionelle Fakten", value: "folgen" },
    ],
    narrative: {
      ausgangslage:
        "Schwabenhaus wollte den Auftakt ins neue Geschäftsjahr für das Vertriebsteam als Moment mit Wirkung inszenieren — inhaltlich fokussiert und atmosphärisch stimmig vor alpiner Kulisse.",
      herausforderung:
        "Ein Sales Kick-off muss zwei Dinge gleichzeitig leisten: strategische Inhalte klar vermitteln und eine Atmosphäre schaffen, die motiviert und verbindet.",
      leitidee:
        "Die alpine Location wurde zum dramaturgischen Element: Programmpunkte und Location-Wechsel folgten einer bewussten Erzählung vom Ausgangspunkt bis zum gemeinsamen Ausblick.",
      ergebnis:
        "Ein Kick-off, der als Ausgangspunkt für das neue Geschäftsjahr in Erinnerung blieb. Weitere Ergebnisdetails werden nach interner Freigabe ergänzt.",
    },
  },
  {
    slug: "interreg-alpine-space",
    client: "Interreg Alpine Space",
    title: "Internationales Firmenjubiläum",
    role: "Internationales Firmenjubiläum, Inhalte, Zukunftsdialog",
    format: "Firmenjubiläen",
    facts: [
      { label: "Format", value: "Firmenjubiläum, international" },
      { label: "Sprachen", value: "Mehrsprachig" },
      { label: "Redaktionelle Fakten", value: "folgen" },
    ],
    narrative: {
      ausgangslage:
        "Ein internationales Programm mit Partnern aus mehreren Ländern sollte im Rahmen eines Jubiläums nicht nur gefeiert, sondern inhaltlich in einen Zukunftsdialog überführt werden.",
      herausforderung:
        "Unterschiedliche Sprachen, Kulturen und Erwartungen mussten in einem gemeinsamen Format zusammengeführt werden, ohne die inhaltliche Substanz zu verlieren.",
      leitidee:
        "Programm und Rahmen wurden so gestaltet, dass Rückblick und Zukunftsdialog gleichberechtigt Raum bekamen — mit Übersetzung und kultureller Sensibilität als Grundprinzip.",
      ergebnis:
        "Ein Format, das internationale Zusammenarbeit sichtbar machte. Weitere Ergebnisdetails werden nach interner Freigabe ergänzt.",
    },
  },
  {
    slug: "red-bull-nederland",
    client: "Red Bull Nederland",
    title: "Mehrtägiges Teamabenteuer",
    role: "Mehrtägiges Teamabenteuer, große Gruppe, Outdoor-Komplexität",
    format: "Team Events / Kick-offs",
    facts: [
      { label: "Format", value: "Mehrtägiges Team Event" },
      { label: "Besonderheit", value: "Outdoor, große Gruppe" },
      { label: "Redaktionelle Fakten", value: "folgen" },
    ],
    narrative: {
      ausgangslage:
        "Eine große Gruppe sollte über mehrere Tage ein gemeinsames Outdoor-Erlebnis durchlaufen, das Zusammenhalt stiftet statt nur Programm abzuspulen.",
      herausforderung:
        "Komplexe Outdoor-Logistik für eine große Teilnehmerzahl über mehrere Tage hinweg sicher und reibungslos zu organisieren, ohne die Erlebnisqualität zu verlieren.",
      leitidee:
        "Ein mehrtägiger Bogen aus Herausforderung, gemeinsamem Erleben und Reflexion, angepasst an Gruppengröße und Gelände.",
      ergebnis:
        "Ein Team-Erlebnis mit spürbarem Zusammenhalt über die Veranstaltung hinaus. Weitere Ergebnisdetails werden nach interner Freigabe ergänzt.",
    },
  },
  {
    slug: "dsv-family-friends-day",
    client: "DSV",
    title: "Family & Friends Day",
    role: "Mitarbeitende, Familien, große Organisation",
    format: "Sommerfeste",
    facts: [
      { label: "Format", value: "Family & Friends Day" },
      { label: "Zielgruppe", value: "Mitarbeitende und Familien" },
      { label: "Redaktionelle Fakten", value: "folgen" },
    ],
    narrative: {
      ausgangslage:
        "Ein Familientag für eine große Organisation sollte Mitarbeitende und ihre Familien gleichermaßen ansprechen — mit Programm für alle Altersgruppen.",
      herausforderung:
        "Die Balance zwischen Programm für Erwachsene, Kinder und gemeinsamen Momenten bei gleichzeitig großer Teilnehmerzahl zu finden.",
      leitidee:
        "Ein Tagesablauf mit parallelen Programmsträngen, die an zentralen Punkten wieder zusammengeführt wurden — für gemeinsame Höhepunkte trotz unterschiedlicher Interessen.",
      ergebnis:
        "Ein Familientag mit hoher Beteiligung über alle Altersgruppen hinweg. Weitere Ergebnisdetails werden nach interner Freigabe ergänzt.",
    },
  },
  {
    slug: "legrand",
    client: "Legrand",
    title: "Marke erlebbar gemacht",
    role: "Marke, Produkt-/Business-Inszenierung",
    format: "Team Events / Kick-offs",
    facts: [
      { label: "Format", value: "Marken- / Produktinszenierung" },
      { label: "Redaktionelle Fakten", value: "folgen" },
    ],
    narrative: {
      ausgangslage:
        "Eine Marke und ihre Produkte sollten im Rahmen einer Veranstaltung nicht präsentiert, sondern erlebbar gemacht werden.",
      herausforderung:
        "Business-Inhalte so zu inszenieren, dass sie im Gedächtnis bleiben, ohne in reine Verkaufspräsentation abzurutschen.",
      leitidee:
        "Produkt und Markenwelt wurden räumlich und dramaturgisch miteinander verwoben, sodass Information und Erlebnis ineinandergriffen.",
      ergebnis:
        "Eine Markeninszenierung mit klarer Wiedererkennung. Weitere Ergebnisdetails werden nach interner Freigabe ergänzt.",
    },
  },
  {
    slug: "ptm-25-jahre",
    client: "PTM",
    title: "25 Jahre Firmenjubiläum",
    role: "Firmenjubiläum, emotionale Mitarbeiterwirkung",
    format: "Firmenjubiläen",
    facts: [
      { label: "Format", value: "25-Jahre-Jubiläum" },
      { label: "Redaktionelle Fakten", value: "folgen" },
    ],
    narrative: {
      ausgangslage:
        "25 Jahre Unternehmensgeschichte sollten für die Mitarbeitenden emotional erlebbar gemacht werden — als Würdigung, nicht nur als Feier.",
      herausforderung:
        "Unternehmensgeschichte so aufzubereiten, dass sie für langjährige wie neue Mitarbeitende gleichermaßen bedeutsam wirkt.",
      leitidee:
        "Programm und Raumgestaltung griffen Meilensteine der Firmengeschichte auf und verbanden sie mit einem Ausblick auf die kommenden Jahre.",
      ergebnis:
        "Ein Jubiläum mit spürbarer emotionaler Wirkung bei den Mitarbeitenden. Weitere Ergebnisdetails werden nach interner Freigabe ergänzt.",
    },
  },
  {
    slug: "international-sales-meeting",
    client: "International Sales Meeting",
    title: "Internationales Sales Meeting in Salzburg",
    role: "Internationale Gäste, Nachhaltigkeit, Salzburg",
    format: "Team Events / Kick-offs",
    facts: [
      { label: "Format", value: "Internationales Sales Meeting" },
      { label: "Ort", value: "Salzburg" },
      { label: "Redaktionelle Fakten", value: "folgen" },
    ],
    narrative: {
      ausgangslage:
        "Internationale Gäste sollten für ein Sales Meeting nach Salzburg eingeladen werden — mit dem Anspruch, Region und Nachhaltigkeit sichtbar in das Konzept einzubinden.",
      herausforderung:
        "Ein internationales Publikum anzusprechen und gleichzeitig regionale Wertschöpfung und nachhaltige Umsetzung ernst zu nehmen, statt nur zu behaupten.",
      leitidee:
        "Regionale Partner, kurze Wege und bewusst gewählte Locations rund um Salzburg bildeten das Rückgrat des Programms.",
      ergebnis:
        "Ein international wahrgenommenes Meeting mit sichtbarer regionaler und nachhaltiger Handschrift. Weitere Ergebnisdetails werden nach interner Freigabe ergänzt.",
    },
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}
