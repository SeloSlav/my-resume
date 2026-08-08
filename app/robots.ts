import type { MetadataRoute } from "next";

const siteUrl = "https://martinerlic.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User"],
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
