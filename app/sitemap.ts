import type { MetadataRoute } from "next";

import { cases } from "@/content/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.incentry.at";
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1 },
    { path: "/firmenjubilaeen", priority: 0.9 },
    { path: "/sommerfeste", priority: 0.9 },
    { path: "/team-events", priority: 0.9 },
    { path: "/referenzen", priority: 0.8 },
    { path: "/arbeitsweise", priority: 0.7 },
    { path: "/ueber-incentry", priority: 0.7 },
    { path: "/einsatzgebiete", priority: 0.6 },
    { path: "/eventagentur-salzburg", priority: 0.6 },
    { path: "/eventagentur-oesterreich", priority: 0.6 },
    { path: "/insights", priority: 0.6 },
    { path: "/kontakt", priority: 0.7 },
    { path: "/erstgespraech", priority: 0.8 },
    { path: "/en", priority: 0.5 },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.priority,
  }));

  for (const c of cases) {
    entries.push({
      url: `${base}/referenzen/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return entries;
}
