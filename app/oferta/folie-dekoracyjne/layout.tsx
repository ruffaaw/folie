import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

// Metadata specific to the dekoracyjne folie - Hiding this page temporarily
export const metadata: Metadata = buildMetadata("/oferta/folie-dekoracyjne");

export default function FolieDekoracyjneLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  // Temporarily preventing this tab from rendering
  return <div style={{ display: 'none' }}>This page is hidden temporarily.</div>;
}
