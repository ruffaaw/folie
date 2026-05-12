import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/artykuly");

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Artykuły i poradniki Dragon Folie",
  url: "https://dragonfolie.com/artykuly",
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "FAQ - folie dekoracyjne",
      url: "https://dragonfolie.com/artykuly/faq-folie-dekoracyjne",
    },
    {
      "@type": "BlogPosting",
      headline: "Folia mrożona czy matowa",
      url: "https://dragonfolie.com/artykuly/folia-mrozona-czy-matowa",
    },
  ],
};

export default function ArtykulyLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  );
}
