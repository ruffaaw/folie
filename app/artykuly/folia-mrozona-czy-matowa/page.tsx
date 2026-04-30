"use client";

import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn = {
  hidden: { scale: 0.96, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Page() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Folia mrożona czy matowa - którą wybrać?",
    description:
      "Porównanie folii mrożonej i matowej: różnice, zastosowania oraz praktyczne wskazówki do wyboru folii na szyby.",
    image: ["https://dragonfolie.com/artykuł-2-zdjęcie.webp"],
    datePublished: "2026-03-10",
    dateModified: "2026-04-30",
    author: {
      "@type": "Organization",
      name: "Dragon Folie",
    },
    publisher: {
      "@type": "Organization",
      name: "Dragon Folie",
      logo: {
        "@type": "ImageObject",
        url: "https://dragonfolie.com/logo-szare.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://dragonfolie.com/artykuly/folia-mrozona-czy-matowa",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <motion.article
        initial="hidden"
        animate="visible"
        variants={container}
        className="mt-[100px] flex flex-col items-center relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
      >
        {/* Decorative background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-br from-blue-100/30 via-indigo-50/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-purple-50/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "12s", animationDelay: "3s" }}
          />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <Header />
        <Title title="ARTYKUŁY I PORADNIKI" />

        {/* HERO SECTION */}
        <motion.div
          ref={heroRef}
          variants={scaleIn}
          style={{ opacity: heroOpacity, y: heroY }}
          className="w-full max-w-6xl px-4 sm:px-8 md:px-16 relative z-10 mb-16 mt-4 md:mt-7"
        >
          <div className="relative bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-white/60">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-[3px] border-l-[3px] border-blue-500 rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[3px] border-r-[3px] border-indigo-500 rounded-br-[2.5rem]" />

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] mb-8">
              Folia mrożona czy matowa
              <span className="block mt-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                – którą wybrać?
              </span>
            </h1>

            {/* Separator */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-4xl">
              W tym artykule wyjaśnimy różnice, pokażemy najczęstsze
              zastosowania i podpowiemy jak dobrać najlepsze rozwiązanie do
              domu, biura lub lokalu usługowego.
            </p>
          </div>
        </motion.div>

        {/* INTRODUCTION */}
        <motion.div
          variants={item}
          className="w-full max-w-4xl px-4 sm:px-8 md:px-16 relative z-10 mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 border-2 border-blue-100/50 rounded-3xl p-10 md:p-12 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider">
                  Wstęp
                </h3>
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
              W obecnych czasach coraz więcej firm stawia na to, aby pracownicy
              mogli pracować w komfortowych warunkach, ładnym otoczeniu i
              estetycznych wnętrzach. Wybór odpowiedniej folii okiennej ma na to
              ogromny wpływ. Klienci bardzo często pytają:{" "}
              <span className="font-semibold text-slate-900 italic">
                folia mrożona czy matowa – która będzie lepsza do oklejania
                szyb?
              </span>
            </p>
          </div>
        </motion.div>

        {/* SECTION 1: FOLIA MROŻONA */}
        <motion.section
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 relative z-10 mb-24"
        >
          <div className="relative">
            {/* Section number */}
            <div className="absolute -left-4 md:-left-12 top-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 text-white font-bold text-3xl">
              01
            </div>

            <div className="ml-12 md:ml-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Czym jest folia mrożona?
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-8" />

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light mb-8">
                Folia mrożona, nazywana inaczej{" "}
                <span className="font-semibold text-blue-600">mrożonką</span>{" "}
                lub{" "}
                <span className="font-semibold text-blue-600">
                  szybami mlecznymi
                </span>{" "}
                to specjalny materiał dający efekt mrożonej szyby podobny do
                odbicia światła od zmrożonej powierzchni z maleńkimi
                kryształkami lodu.
              </p>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light mb-10">
                Mrożona folia stosowana jest, aby przesłonić widok do środka
                pomieszczenia. Może stanowić również element dekoracyjny lub
                reklamowy, ponieważ idealnie nadaje się do ploterowania,
                wycinania wzorów oraz do zadruku. Jej powierzchnia delikatnie
                rozprasza światło, tworząc elegancki, mleczny wygląd.
              </p>

              {/* Features card */}
              <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-100/50 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Najważniejsze cechy folii mrożonej
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    {
                      text: "zapewnia wysoki poziom prywatności",
                      icon: "🔒",
                    },
                    {
                      text: "przepuszcza światło dzienne, ale rozmywa obraz",
                      icon: "☀️",
                    },
                    {
                      text: "nadaje wnętrzom nowoczesny i profesjonalny wygląd",
                      icon: "✨",
                    },
                    {
                      text: "może być docinana we wzory, pasy lub logotypy",
                      icon: "✂️",
                    },
                  ].map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </span>
                      <span className="text-slate-700 text-lg font-light pt-1">
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Callout box */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-2xl shadow-blue-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-white uppercase tracking-wider mb-2"
                      style={{ color: "white" }}
                    >
                      Najpopularniejsze zastosowania
                    </p>
                    <p
                      className="text-white text-lg font-light leading-relaxed"
                      style={{ color: "white" }}
                    >
                      Folia mrożona jest często wybierana do biur, gabinetów,
                      sal konferencyjnych, łazienek oraz drzwi szklanych.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2: FOLIA MATOWA */}
        <motion.section
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 relative z-10 mb-24"
        >
          <div className="relative">
            {/* Section number */}
            <div className="absolute -left-4 md:-left-12 top-0 w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-slate-500/40 text-white font-bold text-3xl">
              02
            </div>

            <div className="ml-12 md:ml-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Czym jest folia matowa na szyby?
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-slate-600 to-transparent rounded-full mb-8" />

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light mb-10">
                Folia matowa to bardzo zbliżone rozwiązanie do folii mrożonej. W
                praktyce oba pojęcia są często używane zamiennie, jednak folia
                matowa może występować w różnych stopniach matowości – od
                delikatnego efektu po mocniejsze zmatowienie szkła.
              </p>

              {/* Features card */}
              <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-200/50 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Cechy folii matowej
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    {
                      text: "skutecznie ogranicza widoczność wnętrza",
                      icon: "👁️",
                    },
                    {
                      text: "rozprasza światło, nie powodując dużego zaciemnienia",
                      icon: "💡",
                    },
                    {
                      text: "dostępna w różnych wariantach przezroczystości",
                      icon: "🎨",
                    },
                    {
                      text: "łatwa w utrzymaniu czystości - nie pozostawia odcisków palców",
                      icon: "🧼",
                    },
                    {
                      text: "odporna na warunki atmosferyczne - montaż wewnątrz i na zewnątrz",
                      icon: "🌦️",
                    },
                    {
                      text: "idealna do zastosowań domowych i komercyjnych",
                      icon: "🏠",
                    },
                  ].map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </span>
                      <span className="text-slate-700 text-lg font-light pt-1">
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Info box */}
              <div className="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-8 shadow-lg">
                <p className="text-slate-700 text-lg font-light leading-relaxed">
                  Folia matowa świetnie sprawdza się na{" "}
                  <span className="font-semibold text-slate-900">
                    oknach mieszkań
                  </span>
                  ,{" "}
                  <span className="font-semibold text-slate-900">
                    witrynach sklepowych
                  </span>
                  ,{" "}
                  <span className="font-semibold text-slate-900">
                    ściankach działowych
                  </span>{" "}
                  i przeszkleniach w lokalach usługowych.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* COMPARISON SECTION */}
        <motion.section
          variants={item}
          className="w-full max-w-6xl px-4 sm:px-8 md:px-16 relative z-10 mb-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg shadow-purple-500/30 mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Szczegółowe porównanie
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Folia mrożona vs folia matowa
            </h2>

            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto">
              Wielu klientów zastanawia się, czy istnieją realne różnice
              pomiędzy tymi foliami. Poniżej przedstawiamy najważniejsze różnice{" "}
              <span className="text-3xl">😉</span>
            </p>
          </div>

          {/* Comparison grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Wygląd",
                items: [
                  {
                    type: "Folia mrożona",
                    desc: "efekt „szronu”, bardziej dekoracyjny",
                    color: "blue",
                  },
                  {
                    type: "Folia matowa",
                    desc: "jednolita, klasyczna matowość",
                    color: "slate",
                  },
                ],
                icon: "👁️",
              },
              {
                title: "Prywatność",
                items: [
                  {
                    type: "Obie folie",
                    desc: "zapewniają bardzo podobny poziom prywatności",
                    color: "purple",
                  },
                ],
                icon: "🔒",
              },
              {
                title: "Przepuszczalność światła",
                items: [
                  {
                    type: "Obie folie",
                    desc: "przepuszczają dużo światła, zwykle od 70 do 90%",
                    color: "amber",
                  },
                ],
                icon: "☀️",
              },
              {
                title: "Zastosowanie",
                items: [
                  {
                    type: "Mrożona",
                    desc: "częściej wybierana do biur i nowoczesnych wnętrz",
                    color: "blue",
                  },
                  {
                    type: "Matowa",
                    desc: "uniwersalna, popularna w mieszkaniach i domach",
                    color: "slate",
                  },
                ],
                icon: "🏢",
              },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm border-2 border-slate-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 rounded-xl p-4"
                    >
                      <div className="font-semibold text-slate-900 mb-1">
                        {item.type}
                      </div>
                      <div className="text-slate-600 font-light">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Price comparison */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 rounded-2xl p-8 shadow-xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">💰</span>
              <h3 className="text-2xl font-bold text-slate-900">Cena</h3>
            </div>
            <p className="text-lg text-slate-700 font-light">
              Praktycznie porównywalne ceny obydwu folii
            </p>
          </div>
        </motion.section>

        {/* APPLICATION SECTION */}
        <motion.section
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 relative z-10 mb-24"
        >
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200/50 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Praktyczne zastosowania
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Residential */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Budynki mieszkalne
                  </h3>
                </div>
                <p className="text-slate-700 font-light leading-relaxed mb-4">
                  W budynkach mieszkalnych montujemy tak naprawdę taką samą
                  ilość folii matowych jak folii mrożonych. Wszystko zależy od
                  preferencji, celu montażu i oczekiwań estetycznych.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Okna łazienkowe</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Drzwi balkonowe</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Przeszklenia klatek schodowych</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Okna od strony ulicy lub sąsiadów</span>
                  </div>
                </div>
              </div>

              {/* Commercial */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Przestrzenie biurowe
                  </h3>
                </div>
                <p className="text-slate-700 font-light leading-relaxed mb-4">
                  W przestrzeniach biurowych klienci najczęściej wybierają folię
                  mrożoną, szczególnie gdy zależy im na estetycznym wyglądzie i
                  zachowaniu światła między pomieszczeniami.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Sale konferencyjne</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Gabinety i biura</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Recepcje</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Przeszklone ściany działowe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 bg-white/60 backdrop-blur-sm border border-indigo-200 rounded-2xl p-6">
              <p className="text-slate-700 leading-relaxed font-light">
                <span className="font-semibold text-slate-900">
                  Możliwość personalizacji:
                </span>{" "}
                Dzięki możliwości drukowania i projektowania różnych wzorów na
                folii mrożonej cieszy się ona popularnością podczas tworzenia
                pasów, logotypów, numeracji pomieszczeń lub grafiki firmowej.
              </p>
            </div>
          </div>
        </motion.section>

        {/* TECHNICAL INFO */}
        <motion.section
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 relative z-10 mb-24"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Czy folia zaciemnia pomieszczenie?
                </h2>
              </div>

              <p className="text-xl text-slate-200 leading-relaxed font-light mb-6">
                To jedno z najczęstszych pytań zadawanych przez klientów.{" "}
                <span className="font-semibold text-white">
                  Nie – folie matowe i mrożone nie powodują wyraźnego
                  zaciemnienia.
                </span>
              </p>

              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Ich zadaniem jest rozproszenie światła, a nie jego blokowanie.
                Dzięki temu wnętrza pozostają jasne, a światło jest bardziej
                miękkie i przyjemne dla oka.
              </p>
            </div>
          </div>
        </motion.section>

        {/* MATTE FILM CHARACTERISTICS */}
        <motion.section
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 relative z-10 mb-24"
        >
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-3xl p-10 md:p-14 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Charakterystyka folii matowej
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed font-light mb-6">
              Mówi się, że folie matowe są najbardziej{" "}
              <span className="font-semibold">
                {'"'}surowe{'"'}
              </span>{" "}
              i{" "}
              <span className="font-semibold">
                {"„"}techniczne{'"'}
              </span>{" "}
              w odbiorze wizualnym. Są bardzo wytrzymałe na zabrudzenia i
              zarysowania.
            </p>

            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Idealne do miejsc o dużym natężeniu ruchu
                  </h3>
                  <p className="text-slate-700 font-light leading-relaxed">
                    Świetnie sprawdzają się w miejscach o wzmożonym ruchu i
                    nagromadzeniu pracowników/klientów/oczekujących. Zapewniają
                    bardzo dużą prywatność, bo choć nie zaciemniają bezpośrednio
                    pomieszczenia, uniemożliwiają rozpoznanie sylwetek nawet
                    przy dużym natężeniu światła.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* PROFESSIONAL INSTALLATION */}
        <motion.section
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 relative z-10 mb-24"
        >
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden relative">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "8s" }}
              />
              <div
                className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "10s", animationDelay: "2s" }}
              />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-semibold mb-6">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Profesjonalna usługa
                </div>

                <h2
                  className="text-3xl md:text-5xl font-bold text-white mb-6"
                  style={{ color: "white" }}
                >
                  Dlaczego profesjonalny montaż?
                </h2>

                <p
                  className="text-xl text-blue-100 font-light max-w-3xl mx-auto"
                  style={{ color: "white" }}
                >
                  Choć folie okienne są dostępne w sprzedaży detalicznej,
                  profesjonalny montaż gwarantuje najlepsze rezultaty
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "Trwałość",
                    desc: "Estetyczny efekt przez lata",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "Perfekcja",
                    desc: "Brak pęcherzyków i nierówności",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                        />
                      </svg>
                    ),
                    title: "Precyzja",
                    desc: "Idealne docięcie do krawędzi szyb",
                  },
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p
                      className="text-blue-100 font-light"
                      style={{ color: "white" }}
                    >
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p
                  className="text-lg text-blue-100 font-light"
                  style={{ color: "white" }}
                >
                  Dodatkowo służymy próbkami folii prywatyzujących i chętnie
                  doradzimy osobiście w wyborze odpowiedniego rodzaju folii.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SUMMARY */}
        <motion.section
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 relative z-10 mb-20"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden relative">
            {/* Pattern background */}
            <div className="absolute inset-0 opacity-5">
              <div
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "48px 48px",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
                <h3 className="text-sm font-bold text-blue-300 uppercase tracking-wider">
                  Podsumowanie
                </h3>
              </div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
                style={{ color: "white" }}
              >
                Który wybór będzie najlepszy dla Ciebie?
              </h2>

              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10">
                Reasumując oba rozwiązania są bardzo skuteczne. Wybór zależy
                głównie od efektu wizualnego jaki chcą Państwo osiągnąć, miejsca
                montażu a także indywidualnych preferencji.
              </p>

              <div className="border-t border-white/10 pt-8">
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  Jeżeli nadal nie mają Państwo pewności, którą folię wybrać{" "}
                  <span className="font-semibold text-white">
                    zapraszamy do kontaktu z pracownikami firmy Dragon Folie
                  </span>{" "}
                  – doradzimy najlepsze rozwiązanie i wykonamy profesjonalny
                  montaż.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <BottomContact
          title="Potrzebujesz pomocy w wyborze folii?"
          className="mt-4"
        />

        <Footer />
      </motion.article>
    </>
  );
}
