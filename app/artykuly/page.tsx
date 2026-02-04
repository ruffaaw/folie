"use client";

import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
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
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[100px] flex flex-col items-center overflow-hidden"
    >
      <Header />
      <Title title="WIEDZA I PORADNIKI" />

      <motion.h1 variants={headline} className="mt-4 md:mt-7">
        <span className="text-dark relative inline-block">
          <span className="text-dark">Artykuły i&nbsp;poradniki</span>
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
        Oferujemy nowoczesne folie okienne i&nbsp;specjalistyczne rozwiązania
        dopasowane do potrzeb mieszkań, biur oraz obiektów komercyjnych. Sprawdź
        dostępne rodzaje folii, ich właściwości oraz zastosowania.
      </motion.h2>

      {/* Lista artykułów */}
      <motion.div
        variants={container}
        className="w-full px-4 sm:px-8 md:px-16 mt-8 md:mt-12"
      >
        <div className="flex flex-col gap-10">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className={`flex flex-col lg:flex-row
          ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
          bg-white rounded-3xl overflow-hidden
          drop-shadow-[0px_15px_40px_rgba(0,0,0,0.1)]`}
            >
              {/* ZDJĘCIE */}
              <div className="lg:w-[55%] w-full flex items-center justify-center p-6">
                <div className="relative w-full max-w-[1080px] max-h-[70vh] aspect-[1080/1350]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority={index === 0}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* TEKST */}
              <div
                className="lg:w-[45%] w-full
                  flex flex-col justify-between
                  p-6 md:p-8"
              >
                <div>
                  <h3 className="text-dark text-xl md:text-2xl leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                    {article.excerpt}{" "}
                    <Link
                      href={`/artykuly/${article.slug}`}
                      className="inline-flex items-center
                 text-blue font-semibold hover:underline"
                    >
                      Czytaj dalej
                    </Link>
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <BottomContact
        title="Masz dodatkowe pytania?"
        className="mt-10 md:mt-14"
      />

      <Footer />
    </motion.div>
  );
}
