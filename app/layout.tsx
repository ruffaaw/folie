import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dragon Folie",
  description:
    "Dragon Folie to firma zajmująca się montażem folii okiennych na terenie całego województwa małopolskiego i śląskiego.",
  icons: "/icon.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
