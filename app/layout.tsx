import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dragonfolie.com"),
  title: "Dragon Folie | Profesjonalne folie okienne w Krakowie i okolicach",
  description:
    "Kompleksowy montaż folii okiennych: przeciwsłonecznych, antywłamaniowych, dekoracyjnych i wiele innych. Działamy na terenie nie tylko Krakowa, ale także całego województwa małopolskiego i śląskiego. Doświadczony zespół, najwyższa jakość materiałów.",
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
    title: "Dragon Folie | Profesjonalne folie okienne w Krakowie i okolicach",
    description:
      "Oferujemy montaż wysokiej jakości folii okiennych na terenie nie tylko Krakowa, ale również całego województwa małopolskiego i śląskiego. Folie przeciwsłoneczne, antywłamaniowe, dekoracyjne i wiele innych. Doświadczony zespół montażowy.",
    url: "https://dragonfolie.com/",
    siteName: "Dragon Folie",
    images: [
      {
        url: "/logo-szare.webp",
        alt: "Dragon Folie | Profesjonalne folie okienne w Krakowie i okolicach",
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
