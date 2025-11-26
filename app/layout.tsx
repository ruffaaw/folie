import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dragonfolie.com"),
  title:
    "Montaż folii okiennej Kraków i oklejanie szyb, mebli i drzwi – Dragon Folie",
  description:
    "Profesjonalny montaż folii okiennej w Krakowie i Małopolsce. Oklejanie szyb, mebli, drzwi i ram okiennych. Dragon Folie - estetyka, ochrona i precyzja montażu.",
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
  openGraph: {
    title:
      "Montaż folii okiennej Kraków i oklejanie szyb, mebli i drzwi – Dragon Folie",
    description:
      "Profesjonalny montaż folii okiennej w Krakowie i Małopolsce. Oklejanie szyb, mebli, drzwi i ram okiennych. Dragon Folie - estetyka, ochrona i precyzja montażu.",
    url: "https://dragonfolie.com/",
    siteName: "Dragon Folie",
    images: [
      {
        url: "/logo-szare.webp",
        alt: "Montaż folii okiennej Kraków i oklejanie szyb, mebli i drzwi – Dragon Folie",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
