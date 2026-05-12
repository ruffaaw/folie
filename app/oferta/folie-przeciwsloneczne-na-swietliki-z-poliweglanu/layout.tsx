import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

// Zakomentowane: folie-przeciwsloneczne-na-swietliki-z-poliweglanu
// export const metadata: Metadata = buildMetadata(
//   "/oferta/folie-przeciwsloneczne-na-swietliki-z-poliweglanu",
// );
export const metadata: Metadata = buildMetadata("/");

export default function FolieNaSwietlikiLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
