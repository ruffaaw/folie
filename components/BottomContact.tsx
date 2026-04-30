"use client";

import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { href: "/oferta/folie-przeciwsloneczne", label: "Folie przeciwsłoneczne" },
  {
    href: "/oferta/folie-przeciwsloneczne-na-swietliki-z-poliweglanu",
    label: "Folie na świetliki z poliwęglanu",
  },
  { href: "/oferta/folie-dekoracyjne", label: "Folie dekoracyjne" },
  { href: "/oferta/folie-antywlamaniowe", label: "Folie antywłamaniowe" },
  { href: "/oferta/folie-anty-uv", label: "Folie anty-UV" },
];

const articleLinks = [
  { href: "/artykuly/folia-mrozona-czy-matowa", label: "Folia mrożona czy matowa" },
  {
    href: "/artykuly/faq-folie-dekoracyjne",
    label: "FAQ: folie dekoracyjne",
  },
  {
    href: "/artykuly/faq-folie-na-swietliki-z-poliweglanu",
    label: "FAQ: folie na świetliki z poliwęglanu",
  },
  {
    href: "/artykuly/folie-przeciwsloneczne-na-swietliki-z-poliweglanu-efekty-montazu",
    label: "Efekty montażu folii na świetlikach",
  },
];

export default function BottomContact({
  title = "",
  className = "",
}: {
  title: string;
  className?: string;
}) {
  const pathname = usePathname();
  const relatedServices = serviceLinks.filter((item) => item.href !== pathname).slice(0, 3);
  const relatedArticles = articleLinks.filter((item) => item.href !== pathname).slice(0, 3);

  return (
    <div
      className={`flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-8 gap-6 w-full bg-blue-light ${className} text-center`}
    >
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 text-left">
        <section className="bg-white/70 rounded-2xl p-5">
          <h4 className="mb-3">Powiązane usługi</h4>
          <ul className="space-y-2 text-sm">
            {relatedServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-blue hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white/70 rounded-2xl p-5">
          <h4 className="mb-3">Powiązane artykuły</h4>
          <ul className="space-y-2 text-sm">
            {relatedArticles.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-blue hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <h3>{title}</h3>
      <h4 style={{ fontWeight: "normal" }} className="mb-6">
        Skontaktuj się z naszymi specjalistami, którzy pomogą dobrać idealną
        folię dla Twoich potrzeb.
      </h4>
      <Button
        text="Skontaktuj się"
        primaryColor="#333333"
        backgroundColor="#ffffff"
        href="/kontakt"
      />
    </div>
  );
}
