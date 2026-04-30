import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/nasze-realizacje");

export default function NaszeRealizacjeLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
