import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/oferta/folie-dekoracyjne");

export default function FolieDekoracyjneLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
