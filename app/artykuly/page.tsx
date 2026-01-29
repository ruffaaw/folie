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
        <div className="flex flex-col gap-5">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={item}
              whileHover={{ y: -4 }}
              className="flex flex-col md:flex-row gap-4 p-4 sm:p-5 bg-white
                         rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.3)]"
            >
              {/* Zdjęcie */}
              <div className="w-full md:w-[260px] h-[180px] rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={520}
                  height={360}
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>

              {/* Treść */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-dark">{article.title}</h3>
                  <p className="mt-2 text-gray-700 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <Link
                  href={`/artykuly/${article.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-blue underline font-medium"
                >
                  Czytaj więcej
                </Link>
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
