import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/montaz-i-wycena");

export default function MontazWycenaLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
