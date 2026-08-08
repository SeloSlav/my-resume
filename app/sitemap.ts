import type { MetadataRoute } from "next";

const siteUrl = "https://martinerlic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-08"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
