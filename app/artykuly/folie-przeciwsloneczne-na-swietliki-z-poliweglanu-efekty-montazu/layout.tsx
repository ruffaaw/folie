import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata(
  "/artykuly/folie-przeciwsloneczne-na-swietliki-z-poliweglanu-efekty-montazu",
);

export default function FolieEfektyMontazuLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
