import type { Metadata } from "next";
import RegionalPageTemplate from "@/components/sections/RegionalPageTemplate";

export const metadata: Metadata = {
  title: "Eventagentur Österreich | INCENTRY",
  description:
    "INCENTRY plant und begleitet besondere Business Events in ganz Österreich — Firmenjubiläen, Sommerfeste und Team Events mit persönlicher Konzeption.",
};

export default function Page() {
  return (
    <RegionalPageTemplate
      eyebrow="Eventagentur Österreich"
      title="Business Events in ganz Österreich."
      intro="Von Salzburg aus planen und begleiten wir Business Events in ganz Österreich — persönlich konzipiert und mit dem gleichen Anspruch an Qualität, unabhängig vom Veranstaltungsort."
    />
  );
}
