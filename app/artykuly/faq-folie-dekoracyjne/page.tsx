"use client";

import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faq = [
  {
    q: "Czy oklejanie mebli folią jest trwałe?",
    a: "Tak. Oklejanie mebli folią dekoracyjną jest trwałe i odporne na codzienne użytkowanie, pod warunkiem zastosowania wysokiej jakości materiałów, profesjonalnego montażu oraz zastosowania się do zaleceń po wykonanym montażu.",
    category: "Trwałość",
    icon: "💪",
  },
  {
    q: "Jak długo utrzymuje się folia dekoracyjna na meblach?",
    a: "Źródła podają różne wartości od 3 do nawet kilkunastu lat. Według naszego doświadczenia dobrze zamontowana folia dekoracyjna na meble może utrzymać się nawet kilkanaście lat, nie tracąc koloru ani przyczepności. Ważny jest wybór najwyższej jakości materiału oraz profesjonalny montaż przez doświadczonych monterów – takie działanie daje najlepsze efekty.",
    category: "Trwałość",
    icon: "⏱️",
  },
  {
    q: "Czy folia dekoracyjna nadaje się do mebli kuchennych?",
    a: "Tak, jak najbardziej. Oklejanie mebli kuchennych folią to bardzo popularne rozwiązanie, ponieważ folie są odporne na wilgoć, temperaturę i łatwe w czyszczeniu. Daje to możliwość odświeżenia Państwa kuchni niewielkim kosztem w porównaniu do wymiany mebli na nowe.",
    category: "Zastosowanie",
    icon: "🍳",
  },
  {
    q: "Czy można okleić stare drzwi folią?",
    a: "Renowacja drzwi folią dekoracyjną to skuteczny sposób na odnowienie starych drzwi bez konieczności ich wymiany. Należy jednak pamiętać, że folia nie wypełni ewentualnych ubytków czy pęknięć w drzwiach. W tym celu można wypełnić specjalną szpachlą istniejące ubytki a następnie okleić je folią dekoracyjną. Cały proces zajmie nieco więcej czasu, jednak efekt finalny jest tego warty 😊",
    category: "Drzwi",
    icon: "🚪",
  },
  {
    q: "Czy oklejanie drzwi jest tańsze niż wymiana?",
    a: "Zdecydowanie tak. Oklejanie drzwi folią to znacznie niższy koszt niż zakup i montaż nowych drzwi.",
    category: "Cena",
    icon: "💰",
  },
  {
    q: "Czy można zmienić kolor ram okiennych PCV?",
    a: "Tak. Zmiana koloru okien PCV folią jest możliwa i bardzo trwała, bez ingerencji w konstrukcję okna. Wybór kolorów i struktur jest ogromny, dlatego podczas pomiaru przekazujemy w Państwa ręce wzorniki, z których możecie wybrać najlepszy dla Was wzór.",
    category: "Okna",
    icon: "🪟",
  },
  {
    q: "Czy folia na oknach zewnętrznych jest odporna na warunki atmosferyczne?",
    a: "Tak. Folie do oklejania ram okiennych zewnętrznych są odporne na promieniowanie UV, deszcz i zmienne temperatury. Dzieje się tak za pomocą specjalnej powłoki, którą nakładamy po zamontowaniu folii.",
    category: "Trwałość",
    icon: "☀️",
  },
  {
    q: "Czy folia dekoracyjna nie odkleja się z czasem?",
    a: "Przy prawidłowym montażu i przygotowaniu powierzchni folia nie odkleja się i zachowuje estetyczny wygląd przez lata.",
    category: "Trwałość",
    icon: "✅",
  },
  {
    q: "Czy oklejanie mebli wymaga ich demontażu?",
    a: "Najczęściej nie. Oklejanie mebli folią odbywa się na miejscu, bez konieczności demontażu zabudowy. W niektórych przypadkach istnieje potrzeba demontażu frontów szafek. Wówczas nasi monterzy w bezpieczny i delikatny sposób ściągają potrzebne elementy, a po oklejeniu folią dekoracyjną montują je z powrotem.",
    category: "Proces",
    icon: "🔧",
  },
  {
    q: "Czy można okleić meble i drzwi na wysoki połysk lub mat?",
    a: "Tak. Dostępne są folie dekoracyjne matowe, półmatowe i na wysoki połysk, a także imitujące drewno, beton czy marmur. Ilość możliwości jest prawie nieograniczona, dlatego wiemy, że znajdziemy dla Państwa wnętrza idealnie pasującą okleinę. Na każdym spotkaniu mamy ze sobą wzorniki, które pomogą w wyborze.",
    category: "Wybór",
    icon: "✨",
  },
  {
    q: "Czy oklejanie folią sprawdzi się w firmie lub biurze?",
    a: "Tak. Oklejanie mebli i drzwi w biurach oraz lokalach usługowych to szybki sposób na odświeżenie wnętrza bez przestoju w pracy.",
    category: "Zastosowanie",
    icon: "🏢",
  },
  {
    q: "Czy oferujecie profesjonalny montaż folii dekoracyjnej?",
    a: "Tak. Dragon Folie oferuje profesjonalne oklejanie mebli, drzwi i ram okiennych, gwarantując trwałość i estetykę wykonania.",
    category: "Usługi",
    icon: "🛠️",
  },
  {
    q: "Ile kosztuje oklejenie powierzchni folią dekoracyjną (okleiną / laminatem)?",
    a: "Niestety w przypadku tego rodzaju folii nie jesteśmy w stanie podać Państwu przedziału cenowego. Wynika to ze zbyt dużego wyboru jeśli chodzi o sam materiał a także od ilości powierzchni, dostępności i potrzebnego czasu na wykonanie Państwa zlecenia. Zachęcamy do wypełnienia formularza znajdującego się w zakładce KONTAKT, a my odezwiemy się do Państwa z informacją zwrotną.",
    category: "Cena",
    icon: "📊",
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
    headline: "FAQ - folie dekoracyjne, okleiny i laminaty",
    description:
      "Najczęściej zadawane pytania o folie dekoracyjne, oklejanie mebli i drzwi oraz trwałość oklein.",
    image: ["https://dragonfolie.com/artykuł-1-grafika.webp"],
    datePublished: "2026-03-05",
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
      "@id": "https://dragonfolie.com/artykuly/faq-folie-dekoracyjne",
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

          {/* Grid pattern */}
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
        <section className="w-full px-4 sm:px-8 md:px-16 text-center relative z-10 mb-12 ">
          {/* <motion.div variants={headline} className="relative">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Najczęściej zadawane
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                pytania
              </span>
            </h1>

            <div className="flex justify-center items-center gap-3 mt-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-slate-300" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Folie dekoracyjne
              </div>
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-slate-300" />
            </div>

            <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Okleiny • Laminaty • Odpowiedzi na wszystkie Twoje wątpliwości
            </p>
          </motion.div> */}

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
            FOLIE DEKORACYJNE/ OKLEINY/ LAMINATY
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
                7
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
                          {/* Category badge */}
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
                            <p className="text-slate-700 leading-relaxed text-base md:text-lg font-light pl-4">
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

        {/* CTA Section */}
        {/* <motion.div
          variants={item}
          className="w-full max-w-5xl px-4 sm:px-8 md:px-16 mt-20 mb-16 relative z-10"
        >
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-10 md:p-14 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "6s" }}
              />
              <div
                className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "8s", animationDelay: "2s" }}
              />
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Szybka pomoc
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nie znalazłeś odpowiedzi?
              </h2>

              <p className="text-xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
                Skontaktuj się z nami – chętnie odpowiemy na wszystkie Twoje
                pytania i pomożemy w wyborze najlepszego rozwiązania.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                  <svg
                    className="w-6 h-6 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-white font-light">E-mail</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                  <svg
                    className="w-6 h-6 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-white font-light">Telefon</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                  <svg
                    className="w-6 h-6 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="text-white font-light">Czat</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}

        <BottomContact title="Masz dodatkowe pytania?" className="mt-4" />

        <Footer />
      </motion.div>
    </>
  );
}
