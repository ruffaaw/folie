"use client";

import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faq = [
  {
    q: `Czy folie na świetliki z${"\u00A0"}poliwęglanu rzeczywiście obniżają temperaturę?`,
    a: `Tak. Profesjonalne folie przeciwsłoneczne mogą zredukować ilość energii słonecznej nawet o${"\u00A0"}60–80%, co przekłada się na obniżenie temperatury wewnątrz obiektu o${"\u00A0"}kilka do kilkunastu stopni.`,
    category: "Temperatura",
    icon: "🌡️",
  },
  {
    q: "Czy folia na świetliki ogranicza ilość światła dziennego?",
    a: `Folie są tak dobierane, aby zachować dostęp do naturalnego światła, jednocześnie redukując nagrzewanie i${"\u00A0"}olśnienie. Dzięki temu wnętrze pozostaje jasne, ale bardziej komfortowe.`,
    category: "Światło",
    icon: "☀️",
  },
  {
    q: "Czy folie przeciwsłoneczne są bezpieczne dla poliwęglanu?",
    a: `Tak, pod warunkiem zastosowania folii przeznaczonych specjalnie do poliwęglanu. Nieprawidłowo dobrane materiały mogą prowadzić do uszkodzeń – dlatego kluczowy jest profesjonalny dobór i${"\u00A0"}montaż.`,
    category: "Bezpieczeństwo",
    icon: "🛡️",
  },
  {
    q: `Czy montaż folii wymaga przestoju w${"\u00A0"}pracy obiektu?`,
    a: "Nie, w większości przypadków nie ma potrzeby przerywania pracy. Montaż jest szybki i realizowany w sposób minimalizujący ingerencję w funkcjonowanie obiektu. Odbywa się on od zewnątrz szyby, czyli na dachu magazynu.",
    category: "Montaż",
    icon: "🔧",
  },
  {
    q: "Jak długo wytrzymują folie na świetlikach z poliwęglanu?",
    a: "Wysokiej jakości folie przeciwsłoneczne charakteryzują się wieloletnią trwałością i odpornością na warunki atmosferyczne, przy zachowaniu właściwości ochronnych. Nasza firma obejmuje montaż takiej folii 2 letnią gwarancją.",
    category: "Trwałość",
    icon: "⏱️",
  },
  {
    q: "Czy folie chronią przed promieniowaniem UV?",
    a: "Tak. Folie skutecznie blokują promieniowanie UV, co chroni wnętrze obiektu, towary, maszyny oraz elementy wyposażenia przed degradacją.",
    category: "Ochrona UV",
    icon: "✅",
  },
  {
    q: "Dlaczego nie można zamontować zwykłej folii przeciwsłonecznej na świetliki z poliwęglanu?",
    a: 'Folie przeciwsłoneczne na poliwęglan odznaczają się większą elastycznością oraz specjalnym klejem, umożliwiającym folii „pracowanie" wraz z rozszerzającym się i kurczącym pod wpływem ciepła poliwęglanem. Montaż folii na szybach lub świetlikach z tworzyw sztucznych takich jak poliwęglan wymaga użycia dedykowanych produktów. Zastosowanie materiału przeznaczonego na szkło będzie skutkowało powstawaniem bąbli i marszczeniem się folii. Dodatkowo, po demontażu, istnieje duże prawdopodobieństwo, że na oklejonej powierzchni pozostanie klej, który będzie bardzo ciężki lub nawet niemożliwy do usunięcia.',
    category: "Dobór materiału",
    icon: "⚠️",
  },
  {
    q: "Czy folia może zastąpić klimatyzację?",
    a: "To zależy, w przestrzeniach, w których głównym problemem jest intensywne nasłonecznienie – np. pod świetlikami dachowymi lub dużymi powierzchniami z poliwęglanu – folia przeciwsłoneczna może w praktyce zastąpić klimatyzację lub znacząco ograniczyć jej użycie. Odbijając promieniowanie słoneczne jeszcze przed jego przeniknięciem do wnętrza, skutecznie zmniejsza wzrost temperatury, a inwestycja w folię często zwraca się z dużą nadwyżką w ciągu kilku lat dzięki niższym kosztom chłodzenia.\n\nJeżeli jednak wysoka temperatura wynika głównie z wewnętrznych zysków ciepła, takich jak praca maszyn, urządzeń, oświetlenia czy duża liczba osób, folia nie będzie w stanie schłodzić pomieszczenia. W takich przypadkach ograniczy jedynie wpływ słońca, ale nie zastąpi systemu aktywnego chłodzenia.",
    category: "Klimatyzacja",
    icon: "❄️",
  },
  {
    q: "Czy folia na poliwęglan całkowicie zaciemnia wnętrze?",
    a: "Nie. Folie są projektowane tak, aby ograniczać ciepło i promieniowanie UV, jednocześnie przepuszczając światło widzialne w kontrolowanym stopniu.",
    category: "Światło",
    icon: "💡",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const headline = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sub = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
  },
};

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FAQ - folie na świetliki z poliwęglanu",
    description:
      "Najczęściej zadawane pytania o folie przeciwsłoneczne na świetliki z poliwęglanu: temperatura, UV, montaż i trwałość.",
    image: ["https://dragonfolie.com/artykuł-4-grafika.webp"],
    datePublished: "2026-03-15",
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
        "https://dragonfolie.com/artykuly/faq-folie-na-swietliki-z-poliweglanu",
    },
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mt-[100px] flex flex-col items-center relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-100/30 via-indigo-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-100/20 via-transparent to-transparent rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <Header />
        <Title title="FAQ" />

        {/* Hero Section */}
        <section className="w-full px-4 sm:px-8 md:px-16 text-center relative z-10 mb-12">
          <motion.h1 variants={headline} className="mt-4 md:mt-7">
            <span className="text-dark relative inline-block">
              <span className="text-dark">NAJCZĘŚCIEJ ZADAWANE PYTANIA </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
              />
            </span>
          </motion.h1>

          <motion.h2
            variants={sub}
            className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16"
          >
            FOLIE NA ŚWIETLIKI Z POLIWĘGLANU
          </motion.h2>
        </section>

        {/* Stats Section */}
        <motion.div
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 mb-16 relative z-10"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {faq.length}
              </div>
              <div className="text-sm text-slate-600 font-medium">Pytań</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {[...new Set(faq.map((f) => f.category))].length}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                Kategorii
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-slate-600 font-medium">
                Przydatne
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <section className="w-full max-w-5xl px-4 sm:px-8 md:px-16 relative z-10">
          <div className="space-y-4">
            {faq.map((faqItem, i) => (
              <motion.div
                key={i}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className={`
                    relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden
                    border-2 transition-all duration-300 cursor-pointer
                    ${
                      openIndex === i
                        ? "border-blue-500 shadow-2xl shadow-blue-500/20"
                        : "border-slate-200/50 shadow-lg hover:shadow-xl hover:border-blue-300"
                    }
                  `}
                  onClick={() => toggleFaq(i)}
                >
                  {/* Question Header */}
                  <div className="p-6 md:p-7 flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl
                        transition-all duration-300
                        ${
                          openIndex === i
                            ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 scale-110"
                            : "bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-indigo-100"
                        }
                      `}
                    >
                      {openIndex === i ? "✨" : faqItem.icon}
                    </div>

                    {/* Question Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2">
                            <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                              {faqItem.category}
                            </span>
                          </div>
                          <h3
                            className={`
                              text-lg md:text-xl font-semibold leading-tight
                              transition-colors duration-300
                              ${openIndex === i ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"}
                            `}
                          >
                            {faqItem.q}
                          </h3>
                        </div>

                        {/* Toggle Icon */}
                        <motion.div
                          animate={{ rotate: openIndex === i ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`
                            w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                            transition-colors duration-300
                            ${
                              openIndex === i
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                            }
                          `}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                          <div className="pl-16 border-l-4 border-blue-200">
                            <p className="text-slate-700 leading-relaxed text-base md:text-lg font-light pl-4 whitespace-pre-line">
                              {faqItem.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Decorative gradient bar when open */}
                  {openIndex === i && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left"
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <BottomContact title="Masz dodatkowe pytania?" className="mt-4" />

        <Footer />
      </motion.div>
    </>
  );
}
