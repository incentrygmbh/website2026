"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/90 backdrop-blur-sm border-b border-warm-grey/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0" aria-label="INCENTRY Startseite">
          <Image
            src="/logo/incentry-logo.svg"
            alt="INCENTRY Event Agentur"
            width={140}
            height={70}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-anthracite hover:text-incentry-orange transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <Link href="/kontakt" className="text-sm text-anthracite hover:text-incentry-orange transition-colors">
            Kontakt
          </Link>
          <Link
            href="/erstgespraech"
            className="inline-flex items-center rounded-full bg-deep-black text-warm-white text-sm px-5 py-2.5 hover:bg-incentry-orange transition-colors"
          >
            Projekt besprechen
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        >
          <span
            className={`block h-[1.5px] w-6 bg-deep-black transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-deep-black transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-deep-black transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-0 top-[76px] bg-warm-white z-40 flex flex-col px-6 py-8 gap-1 overflow-y-auto"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl py-3 border-b border-warm-grey/70"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="text-lg py-4 text-anthracite"
          >
            Kontakt
          </Link>
          <Link
            href="/erstgespraech"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center items-center rounded-full bg-deep-black text-warm-white text-base px-6 py-3.5"
          >
            Projekt besprechen
          </Link>
        </nav>
      )}
    </header>
  );
}
