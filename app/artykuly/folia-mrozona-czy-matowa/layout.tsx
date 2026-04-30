import type { Metadata } from "next";
import { buildMetadata } from "@/data/seo";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata("/artykuly/folia-mrozona-czy-matowa");

export default function FoliaMrozonaCzyMatowaLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
