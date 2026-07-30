"use client";

import { useState } from "react";

const anlassOptions = [
  "Firmenjubiläum",
  "Sommerfest",
  "Team Event / Kick-off",
  "Noch nicht sicher",
];

const planungsstandOptions = [
  "Erste Idee",
  "Grobes Konzept vorhanden",
  "Termin & Rahmen stehen fest",
];

type FormState = {
  anlass: string;
  zeitraum: string;
  region: string;
  teilnehmerzahl: string;
  planungsstand: string;
  beschreibung: string;
  name: string;
  email: string;
  telefon: string;
  budget: string;
};

const initialState: FormState = {
  anlass: "",
  zeitraum: "",
  region: "",
  teilnehmerzahl: "",
  planungsstand: "",
  beschreibung: "",
  name: "",
  email: "",
  telefon: "",
  budget: "",
};

export default function ErstgespraechForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);

  const totalSteps = 3;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Hinweis: Dieses Formular ist Frontend-only. Vor Launch an einen echten
    // Endpunkt anbinden (z. B. API-Route + E-Mail-Versand oder CRM-Webhook)
    // und das Analytics-Event "form_submit" gemäß Playbook Kap. 15 auslösen.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <h2 className="font-display text-3xl mb-4">Vielen Dank für Ihre Nachricht.</h2>
        <p className="text-anthracite/70 max-w-md mx-auto">
          Wir melden uns in Kürze persönlich bei Ihnen, um den nächsten
          Schritt zu besprechen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex gap-2 mb-10" aria-hidden="true">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < step ? "bg-incentry-orange" : "bg-warm-grey"
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <fieldset className="space-y-6">
          <legend className="font-display text-2xl mb-4">Um welchen Anlass geht es?</legend>
          <div className="grid grid-cols-2 gap-3">
            {anlassOptions.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => update("anlass", option)}
                aria-pressed={form.anlass === option}
                className={`text-sm text-left px-4 py-3 rounded-md border transition-colors ${
                  form.anlass === option
                    ? "border-deep-black bg-deep-black text-warm-white"
                    : "border-warm-grey hover:border-anthracite"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div>
            <label htmlFor="zeitraum" className="block text-sm mb-1.5">
              Zeitraum &amp; Region
            </label>
            <input
              id="zeitraum"
              type="text"
              value={form.zeitraum}
              onChange={(e) => update("zeitraum", e.target.value)}
              placeholder="z. B. Herbst 2027, Raum Salzburg"
              className="w-full border border-warm-grey rounded-md px-4 py-3 bg-warm-white"
            />
          </div>

          <div>
            <label htmlFor="teilnehmerzahl" className="block text-sm mb-1.5">
              Ungefähre Teilnehmerzahl
            </label>
            <input
              id="teilnehmerzahl"
              type="text"
              value={form.teilnehmerzahl}
              onChange={(e) => update("teilnehmerzahl", e.target.value)}
              placeholder="z. B. 80–100 Personen"
              className="w-full border border-warm-grey rounded-md px-4 py-3 bg-warm-white"
            />
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-6">
          <legend className="font-display text-2xl mb-4">Wie weit sind Sie in der Planung?</legend>
          <div className="grid grid-cols-1 gap-3">
            {planungsstandOptions.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => update("planungsstand", option)}
                aria-pressed={form.planungsstand === option}
                className={`text-sm text-left px-4 py-3 rounded-md border transition-colors ${
                  form.planungsstand === option
                    ? "border-deep-black bg-deep-black text-warm-white"
                    : "border-warm-grey hover:border-anthracite"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div>
            <label htmlFor="beschreibung" className="block text-sm mb-1.5">
              Erzählen Sie uns kurz vom Anlass
            </label>
            <textarea
              id="beschreibung"
              rows={5}
              value={form.beschreibung}
              onChange={(e) => update("beschreibung", e.target.value)}
              placeholder="Das Konzept muss noch nicht fertig sein — genau dafür ist der erste Austausch da."
              className="w-full border border-warm-grey rounded-md px-4 py-3 bg-warm-white"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm mb-1.5">
              Budgetrahmen (optional)
            </label>
            <input
              id="budget"
              type="text"
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              placeholder="Noch offen"
              className="w-full border border-warm-grey rounded-md px-4 py-3 bg-warm-white"
            />
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="space-y-6">
          <legend className="font-display text-2xl mb-4">Wie erreichen wir Sie?</legend>
          <div>
            <label htmlFor="name" className="block text-sm mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full border border-warm-grey rounded-md px-4 py-3 bg-warm-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1.5">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border border-warm-grey rounded-md px-4 py-3 bg-warm-white"
            />
          </div>
          <div>
            <label htmlFor="telefon" className="block text-sm mb-1.5">
              Telefon (optional)
            </label>
            <input
              id="telefon"
              type="tel"
              value={form.telefon}
              onChange={(e) => update("telefon", e.target.value)}
              className="w-full border border-warm-grey rounded-md px-4 py-3 bg-warm-white"
            />
          </div>
        </fieldset>
      )}

      <div className="flex justify-between mt-10">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-sm text-anthracite/70 hover:text-deep-black"
          >
            ← Zurück
          </button>
        ) : (
          <span />
        )}

        {step < totalSteps ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="inline-flex items-center rounded-full bg-deep-black text-warm-white text-sm px-7 py-3 hover:bg-incentry-orange transition-colors"
          >
            Weiter
          </button>
        ) : (
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-incentry-orange text-deep-black text-sm font-medium px-7 py-3 hover:bg-deep-black hover:text-warm-white transition-colors"
          >
            Anfrage senden
          </button>
        )}
      </div>
    </form>
  );
}
