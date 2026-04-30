import type { Metadata } from "next";
import "./globals.css";
import { buildMetadata, SITE_URL } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  ...buildMetadata("/"),
  metadataBase: new URL(SITE_URL),
  keywords: [
    "folie okienne Kraków",
    "folie przeciwsłoneczne",
    "montaż folii okiennych",
    "folie dekoracyjne Kraków",
    "folie antywłamaniowe",
    "folie Wołowice",
    "folie okienne Małopolska",
    "lustro weneckie Kraków",
    "folie na świetliki",
    "profesjonalny montaż folii",
    "folię okienne Kraków",
    "folię okienne Krakow",
    "folie okienne Krakow",
    "folie okienne kraków",
    "folie okienne krakow",
    "folię okienne krakow",
  ],
  icons: "/icon.webp",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Dragon Folie",
  image: `${SITE_URL}/logo-szare.webp`,
  url: SITE_URL,
  telephone: "+48 731 347 247",
  email: "dragonfolie@gmail.com",
  areaServed: ["Krakow", "Malopolska", "Slask", "Polska"],
  serviceType: [
    "Montaż folii okiennych",
    "Folie przeciwsłoneczne",
    "Folie dekoracyjne",
    "Folie antywłamaniowe",
    "Folie anty-UV",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
  },
  sameAs: [
    "https://www.instagram.com/dragonfolie",
    "https://www.facebook.com/dragonfolie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
