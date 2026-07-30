import { brandStatement } from "@/content/home";

export default function BrandStatement() {
  return (
    <section className="bg-anthracite py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
        <p className="font-display italic text-warm-white text-[1.75rem] md:text-[3rem] leading-snug">
          {brandStatement}
        </p>
      </div>
    </section>
  );
}
