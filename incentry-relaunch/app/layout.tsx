import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "INCENTRY — Business Events, über die Menschen noch lange sprechen.",
    template: "%s | INCENTRY",
  },
  description:
    "INCENTRY ist die Eventagentur für Firmenjubiläen, Sommerfeste und besondere Business Events – in Salzburg zu Hause, für ganz Österreich und Bayern im Einsatz.",
  metadataBase: new URL("https://www.incentry.at"),
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "INCENTRY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.incentry.at/#organization",
      name: "INCENTRY GmbH",
      legalName: "Incentry GmbH",
      url: "https://www.incentry.at",
      logo: "https://www.incentry.at/logo/incentry-logo.png",
      email: "office@incentry.at",
      telephone: "+43 6245 23 517",
      vatID: "ATU74580303",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Salzgasse 2",
        postalCode: "5400",
        addressLocality: "Hallein",
        addressCountry: "AT",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.incentry.at/#website",
      url: "https://www.incentry.at",
      name: "INCENTRY",
      inLanguage: "de-AT",
      publisher: { "@id": "https://www.incentry.at/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-warm-white text-deep-black">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-deep-black focus:text-warm-white focus:px-4 focus:py-2 focus:rounded"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
