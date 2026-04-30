"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const labelMap: Record<string, string> = {
  oferta: "Oferta",
  artykuly: "Artykuły",
  kontakt: "Kontakt",
  "montaz-i-wycena": "Montaż i wycena",
  "nasze-realizacje": "Nasze realizacje",
  "o-nas": "O nas",
  "polityka-prywatnosci": "Polityka prywatności",
  "folie-anty-uv": "Folie anty-UV",
  "folie-przeciwsloneczne": "Folie przeciwsłoneczne",
  "folie-przeciwsloneczne-na-swietliki-z-poliweglanu":
    "Folie na świetliki z poliwęglanu",
  "folie-antywlamaniowe": "Folie antywłamaniowe",
  "folie-bezpieczne": "Folie bezpieczne",
  "folie-lustro-weneckie": "Folie lustro weneckie",
  "folie-matowe": "Folie matowe",
  "folie-mrozone": "Folie mrożone",
  "folie-dekoracyjne": "Folie dekoracyjne",
  "faq-folie-dekoracyjne": "FAQ folii dekoracyjnych",
  "faq-folie-na-swietliki-z-poliweglanu": "FAQ folii na świetliki",
  "folia-mrozona-czy-matowa": "Folia mrożona czy matowa",
  "folie-przeciwsloneczne-na-swietliki-z-poliweglanu-efekty-montazu":
    "Efekty montażu folii na świetliki",
};

export default function Title({
  title = "",
  className,
}: {
  title: string;
  className?: string;
}) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const breadcrumbs = [
    { name: "Strona główna", href: "/" },
    ...parts.map((part, index) => ({
      name: labelMap[part] ?? part.replace(/-/g, " "),
      href: `/${parts.slice(0, index + 1).join("/")}`,
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://dragonfolie.com${item.href}`,
    })),
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const left = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const right = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {parts.length > 0 && (
        <>
          <nav
            aria-label="Breadcrumb"
            className="w-full px-4 sm:px-8 md:px-16 mt-4 sm:mt-6 text-sm text-slate-600"
          >
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="font-semibold text-blue">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.href} className="hover:text-blue transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                    {!isLast && <span aria-hidden="true">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        className={`flex flex-row gap-3 sm:gap-4 md:gap-5 ${
          className ?? ""
        } mt-8 sm:mt-12 md:mt-16`}
      >
        <motion.div variants={left} className="relative flex items-center">
          <div className="w-24 md:w-32 h-[2px] bg-dark bg-linear-to-r from-white to-dark" />
          <div className="w-2 h-2 md:w-3 md:h-3 bg-dark rounded-full" />
        </motion.div>
        <motion.div
          variants={item}
          className="flex items-center justify-center px-6 py-2 border border-dark rounded-full"
        >
          <h5 className="text-dark text-xl text-center">{title}</h5>
        </motion.div>
        <motion.div variants={right} className="relative flex items-center">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-dark rounded-full" />
          <div className="w-24 md:w-32 h-[2px] bg-dark bg-linear-to-r from-dark to-white" />
        </motion.div>
      </motion.div>
    </>
  );
}
