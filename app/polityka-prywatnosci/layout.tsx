import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/polityka-prywatnosci");

export default function PolitykaPrywatnosciLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
