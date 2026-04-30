import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/o-nas");

export default function ONasLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
