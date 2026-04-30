import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/oferta/folie-przeciwsloneczne");

export default function FoliePrzeciwsloneczneLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
