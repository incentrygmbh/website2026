import { trust } from "@/content/home";

export default function TrustBar() {
  return (
    <section className="bg-deep-black py-12 md:py-14">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="text-warm-grey/50 text-xs uppercase tracking-widest text-center mb-8">
          {trust.intro}
        </p>
        <ul className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {trust.clients.map((name) => (
            <li
              key={name}
              className="font-display text-warm-grey/70 text-lg md:text-xl italic"
              title="Platzhalter — durch freigegebenes Original-Logo ersetzen"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
