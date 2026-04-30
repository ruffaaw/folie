import type { MetadataRoute } from "next";
import { SEO_MAP, SITE_URL } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.values(SEO_MAP).map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    lastModified: now,
    changeFrequency: entry.path.startsWith("/artykuly/") ? "monthly" : "weekly",
    priority:
      entry.path === "/"
        ? 1
        : entry.path === "/oferta" || entry.path === "/artykuly"
          ? 0.9
          : entry.path.startsWith("/oferta/")
            ? 0.8
            : entry.path.startsWith("/artykuly/")
              ? 0.75
              : 0.7,
  }));
}
