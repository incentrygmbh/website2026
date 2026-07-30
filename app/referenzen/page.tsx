import type { Metadata } from "next";
import ReferenzenGrid from "@/components/sections/ReferenzenGrid";

export const metadata: Metadata = {
  title: "Referenzen | Eventagentur INCENTRY",
  description:
    "Business Events, die INCENTRY für Unternehmen in Österreich und Bayern konzipiert und umgesetzt hat — Firmenjubiläen, Sommerfeste und Team Events.",
};

export default function Page() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="text-xs uppercase tracking-widest text-incentry-orange mb-4">
          Referenzen
        </p>
        <h1 className="font-display text-4xl md:text-6xl max-w-3xl mb-14">
          Business Events, über die man noch spricht.
        </h1>
        <ReferenzenGrid />
      </div>
    </section>
  );
}
