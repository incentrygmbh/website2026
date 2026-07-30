export type FormatCase = {
  slug: string;
  client: string;
  title: string;
  role: string;
};

export type FormatFaq = { question: string; answer: string };

export type FormatVariant = { title: string; copy: string };

export type FormatPageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubline: string;
  relevanceHeading: string;
  relevanceCopy: string;
  outcomes: string[];
  variantsHeading: string;
  variants: FormatVariant[];
  cases: FormatCase[];
  faq: FormatFaq[];
};

export const formatPages: Record<string, FormatPageContent> = {
  firmenjubilaeen: {
    slug: "firmenjubilaeen",
    metaTitle: "Firmenjubiläen planen | Eventagentur INCENTRY",
    metaDescription:
      "INCENTRY gestaltet Firmenjubiläen, die Geschichte würdigen, Menschen verbinden und Zukunft sichtbar machen — persönlich konzipiert, hochwertig umgesetzt.",
    eyebrow: "Firmenjubiläen",
    heroTitle: "Firmenjubiläen mit Bedeutung.",
    heroSubline: "Wir gestalten Jubiläen, die bleiben.",
    relevanceHeading: "Mehr als ein Fest.",
    relevanceCopy:
      "Ein Firmenjubiläum ist mehr als ein Fest. Es ist ein Meilenstein, der Ihre Geschichte erzählt, Wertschätzung zeigt und Zukunft gestaltet.",
    outcomes: [
      "Strategie & Ziele definieren",
      "Programm & Erlebnisse entwickeln",
      "Location & Design inszenieren",
      "Gäste begeistern & einbinden",
      "Nachhaltige Wirkung erzielen",
    ],
    variantsHeading: "Für welchen Anlass planen wir?",
    variants: [
      { title: "Rundes Jubiläum", copy: "10, 25, 50 Jahre und mehr — ein Meilenstein, der Geschichte und Zukunft verbindet." },
      { title: "Mit Kundinnen und Kunden", copy: "Ein Jubiläum als Bühne für Ihre wichtigsten Geschäftsbeziehungen." },
      { title: "Intern für das Team", copy: "Wertschätzung für die Menschen, die das Unternehmen tragen." },
      { title: "Mehrtägiges Format", copy: "Konferenz, Galaabend und Rahmenprogramm als durchdachte Dramaturgie." },
    ],
    cases: [
      { slug: "interreg-alpine-space", client: "Interreg Alpine Space", title: "Internationales Firmenjubiläum", role: "Inhalte, Zukunftsdialog" },
      { slug: "ptm-25-jahre", client: "PTM", title: "25 Jahre Firmenjubiläum", role: "Emotionale Mitarbeiterwirkung" },
    ],
    faq: [
      {
        question: "Wie früh sollten wir mit der Planung eines Firmenjubiläums beginnen?",
        answer:
          "Für ein rundes Jubiläum mit mehreren hundert Gästen empfehlen wir 9–12 Monate Vorlauf. Kleinere, fokussierte Formate lassen sich auch kurzfristiger realisieren — sprechen Sie uns einfach an.",
      },
      {
        question: "Übernehmen Sie auch die technische und logistische Umsetzung?",
        answer:
          "Ja. Wir begleiten das Projekt von der ersten Idee über Location, Technik und Programm bis zur Umsetzung vor Ort.",
      },
      {
        question: "Können auch internationale Gäste eingebunden werden?",
        answer:
          "Ja, mehrsprachige Formate und internationale Gästegruppen gehören zu unserer Projekterfahrung.",
      },
    ],
  },

  sommerfeste: {
    slug: "sommerfeste",
    metaTitle: "Sommerfest für Unternehmen planen | Eventagentur INCENTRY",
    metaDescription:
      "INCENTRY plant Sommerfeste, die Begegnungen schaffen, die im Arbeitsalltag selten entstehen — persönlich konzipiert, hochwertig umgesetzt.",
    eyebrow: "Sommerfeste",
    heroTitle: "Sommerfeste mit Charakter.",
    heroSubline: "Begegnungen, die im Arbeitsalltag selten entstehen.",
    relevanceHeading: "Mehr als ein Firmenausflug.",
    relevanceCopy:
      "Ein gutes Sommerfest schafft Raum für echte Begegnung zwischen Menschen, die im Alltag selten zueinander finden — ohne Aufwand für die Organisation im eigenen Haus.",
    outcomes: [
      "Konzept & Motto entwickeln",
      "Location passend zur Unternehmenskultur wählen",
      "Programm für alle Altersgruppen gestalten",
      "Catering & Ablauf organisieren",
      "Schlechtwetter-Alternative mitdenken",
    ],
    variantsHeading: "Für welchen Rahmen planen wir?",
    variants: [
      { title: "Sommerfest für das ganze Unternehmen", copy: "Ein Nachmittag oder Abend für alle Mitarbeitenden und ihre Familien." },
      { title: "Mit Kundinnen und Kunden", copy: "Ein sommerliches Format, das Geschäftsbeziehungen persönlich stärkt." },
      { title: "Kompaktes Team-Sommerfest", copy: "Kleinere, fokussierte Formate für einzelne Abteilungen oder Standorte." },
    ],
    cases: [],
    faq: [
      {
        question: "Was passiert bei schlechtem Wetter?",
        answer:
          "Für jedes Sommerfest planen wir eine tragfähige Schlechtwetter-Alternative mit — vom Zeltkonzept bis zur Indoor-Ausweichlocation.",
      },
      {
        question: "Eignet sich ein Sommerfest auch für kleinere Unternehmen?",
        answer:
          "Ja. Wir entwickeln Formate passend zur Gruppengröße — von kompakten Teamfesten bis zu großen unternehmensweiten Veranstaltungen.",
      },
    ],
  },

  "team-events": {
    slug: "team-events",
    metaTitle: "Team Events & Kick-offs | Eventagentur INCENTRY",
    metaDescription:
      "INCENTRY entwickelt individuelle Team Experiences statt austauschbarer Programme — für Kick-offs und Team Events, die wirklich verbinden.",
    eyebrow: "Team Events / Kick-offs",
    heroTitle: "Team Events, die verbinden.",
    heroSubline: "Individuelle Team Experiences statt austauschbarer Programme.",
    relevanceHeading: "Kein Aktivitätenkatalog.",
    relevanceCopy:
      "Ein gutes Team Event ist kein Katalog austauschbarer Aktivitäten, sondern ein konzeptionelles Format, das zum Ziel, zur Kultur und zur Gruppe passt.",
    outcomes: [
      "Ziel & Anlass des Events klären",
      "Format individuell entwickeln",
      "Location & Logistik sicher planen",
      "Programm mit echtem Team-Nutzen gestalten",
      "Nachwirkung im Arbeitsalltag verankern",
    ],
    variantsHeading: "Für welche Formate planen wir?",
    variants: [
      { title: "Sales & Strategie Kick-off", copy: "Der Auftakt für ein neues Geschäftsjahr — inhaltlich und atmosphärisch stimmig inszeniert." },
      { title: "Mehrtägiges Team-Erlebnis", copy: "Komplexe Formate mit großer Gruppe und anspruchsvoller Outdoor-Logistik." },
      { title: "Kompaktes Teambuilding", copy: "Fokussierte Formate für einzelne Teams oder Abteilungen." },
    ],
    cases: [
      { slug: "schwabenhaus-soelden", client: "Schwabenhaus", title: "Sales Kick-off in Sölden", role: "Premium Sales Kick-off, alpine Dramaturgie" },
      { slug: "red-bull-nederland", client: "Red Bull Nederland", title: "Mehrtägiges Teamabenteuer", role: "Große Gruppe, Outdoor-Komplexität" },
    ],
    faq: [
      {
        question: "Wie groß können die Gruppen sein?",
        answer:
          "Von kompakten Teams bis zu mehreren hundert Teilnehmenden — die Projekterfahrung reicht von fokussierten Formaten bis zu komplexer Outdoor-Logistik für große Gruppen.",
      },
      {
        question: "Planen Sie auch mehrtägige Formate im Ausland?",
        answer:
          "Ja, dazu gehören auch internationale, mehrtägige Team-Erlebnisse mit anspruchsvoller Logistik.",
      },
    ],
  },
};
