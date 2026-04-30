import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/kontakt");

export default function KontaktLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
