import type { Metadata } from "next";
import RegionalPageTemplate from "@/components/sections/RegionalPageTemplate";

export const metadata: Metadata = {
  title: "Einsatzgebiete | Eventagentur INCENTRY",
  description:
    "INCENTRY ist in Salzburg zu Hause und für besondere Business Events in ganz Österreich und Bayern im Einsatz.",
};

export default function Page() {
  return (
    <RegionalPageTemplate
      eyebrow="Einsatzgebiete"
      title="In Salzburg zu Hause. In Österreich und Bayern im Einsatz."
      intro="Ob am Standort Salzburg oder bei Ihnen vor Ort: Wir planen und begleiten Business Events in ganz Österreich und im angrenzenden Bayern — mit kurzen Wegen zu Locations und Partnern in der Region."
    />
  );
}
