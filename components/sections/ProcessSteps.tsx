import { process } from "@/content/home";

export default function ProcessSteps() {
  return (
    <section className="py-20 md:py-28 bg-warm-grey/25">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="font-display text-3xl md:text-[2.75rem] max-w-2xl mb-14">
          Unsere Arbeitsweise als Produkt.
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
          {process.map((step) => (
            <li key={step.step} className="border-t border-anthracite/20 pt-6">
              <span className="font-display text-incentry-orange text-2xl">
                {step.step}
              </span>
              <h3 className="font-display text-xl mt-2">{step.title}</h3>
              <p className="text-anthracite/75 text-sm mt-2 leading-relaxed">
                {step.question}
              </p>
              <p className="text-anthracite/50 text-xs mt-3 uppercase tracking-wide">
                {step.result}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
