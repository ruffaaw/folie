import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata(
  "/artykuly/faq-folie-na-swietliki-z-poliweglanu",
);

export default function FaqFolieNaSwietlikiLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
