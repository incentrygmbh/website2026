import type { Metadata } from "next";
import RegionalPageTemplate from "@/components/sections/RegionalPageTemplate";

export const metadata: Metadata = {
  title: "Eventagentur Salzburg | INCENTRY",
  description:
    "INCENTRY ist die Eventagentur aus Salzburg für Firmenjubiläen, Sommerfeste und Team Events — mit persönlicher Nähe zu Locations und Partnern der Region.",
};

export default function Page() {
  return (
    <RegionalPageTemplate
      eyebrow="Eventagentur Salzburg"
      title="Die Eventagentur aus Salzburg."
      intro="Mit Sitz in Salzburg kennen wir die Locations, Partner und Möglichkeiten der Region genau. Das kommt jedem Projekt zugute — von der ersten Idee bis zur Umsetzung vor Ort."
    />
  );
}
