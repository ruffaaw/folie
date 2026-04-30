import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/oferta/folie-mrozone");

export default function FolieMrozoneLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
