import type { Metadata } from "next";
import ErstgespraechForm from "@/components/sections/ErstgespraechForm";

export const metadata: Metadata = {
  title: "Erstgespräch anfragen | Eventagentur INCENTRY",
  description: "Erzählen Sie uns von Ihrem Anlass — unverbindlich und ohne fertiges Briefing.",
};

export default function Page() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-widest text-incentry-orange mb-4">Erstgespräch</p>
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Welcher besondere Unternehmensmoment steht bei Ihnen bevor?
        </h1>
        <p className="text-anthracite/70 mb-12 leading-relaxed">
          Erzählen Sie uns vom Anlass. Das Konzept muss noch nicht fertig
          sein — genau dafür ist der erste Austausch da.
        </p>
        <ErstgespraechForm />
      </div>
    </section>
  );
}
