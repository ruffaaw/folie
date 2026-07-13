import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/oferta");

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Oferta Dragon Folie",
  url: "https://dragonfolie.com/oferta",
  itemListElement: [
    {
      "@type": "Service",
      name: "Folie anty-UV",
      url: "https://dragonfolie.com/oferta/folie-anty-uv",
    },
    {
      "@type": "Service",
      name: "Folie przeciwsłoneczne",
      url: "https://dragonfolie.com/oferta/folie-przeciwsloneczne",
    },
    {
      "@type": "Service",
      name: "Folie na świetliki z poliwęglanu",
      url: "https://dragonfolie.com/oferta/folie-przeciwsloneczne-na-swietliki-z-poliweglanu",
    },
    {
      "@type": "Service",
      name: "Folie antywłamaniowe",
      url: "https://dragonfolie.com/oferta/folie-antywlamaniowe",
    },
    {
      "@type": "Service",
      name: "Folie bezpieczne",
      url: "https://dragonfolie.com/oferta/folie-bezpieczne",
    },
    {
      "@type": "Service",
      name: "Folie lustro weneckie",
      url: "https://dragonfolie.com/oferta/folie-lustro-weneckie",
    },
    {
      "@type": "Service",
      name: "Folie matowe",
      url: "https://dragonfolie.com/oferta/folie-matowe",
    },
    {
      "@type": "Service",
      name: "Folie mrożone",
      url: "https://dragonfolie.com/oferta/folie-mrozone",
    },
    {
      "@type": "Service",
      name: "Folie dekoracyjne",
      url: "https://dragonfolie.com/oferta/folie-dekoracyjne",
    },
  ],
};

export default function OfertaLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      {children}
    </>
  );
}
