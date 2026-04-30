import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/artykuly/faq-folie-dekoracyjne");

export default function FaqFolieDekoracyjneLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
