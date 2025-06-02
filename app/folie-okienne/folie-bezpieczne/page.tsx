"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { features, places } from "@/data/folie-bezpieczne";
import { Building, GlassWater, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
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
      duration: 0.6,
    },
  },
};

const card = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
  hover: {
    y: -5,
    transition: { duration: 0.3 },
  },
};

const image = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center overflow-hidden"
    >
      <Header />
      <Title title="BEZPIECZEŃSTWO" />
      <motion.h1 variants={item} className="mt-7 text-center">
        FOLIE <span className="text-blue">BEZPIECZNE</span>
      </motion.h1>
      <motion.h2
        variants={item}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32"
      >
        Wielowarstwowe folie bezpieczne zapobiegające rozprzestrzenianiu się
        odłamków szkła. Niewidoczna ochrona spełniająca standardy HACCP,
        zapewniająca bezpieczeństwo w&nbsp;domach, zakładach produkujących
        żywność i&nbsp;obiektach publicznych.
      </motion.h2>
      <motion.div
        variants={image}
        whileHover={{ scale: 1.03 }}
        className="w-full lg:w-8/12 relative mt-7 aspect-[3/2]"
      >
        <Image
          src="/bezpieczne.webp"
          alt="Zdjęcie folii bezpiecznej"
          fill
          className="object-cover h-full md:px-16 lg:px-32 w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
        />
      </motion.div>

      <motion.div
        variants={container}
        className="px-4 sm:px-8 md:px-16 lg:px-32 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue-light rounded-3xl mt-6 md:mt-8 card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Standard HACCP</h3>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col md:flex-row gap-4 md:gap-5 card w-full"
          >
            <motion.div
              variants={card}
              custom={0}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full"
            >
              <h4 className="font-semibold">Co to jest HACCP?</h4>
              <p className="text-justify">
                System Analizy Zagrożeń i&nbsp;Krytycznych Punktów Kontroli
                (Hazard Analysis and Critical Control Points) to międzynarodowy
                standard bezpieczeństwa żywności, wymagający zabezpieczenia
                przed odłamkami szkła.
              </p>
            </motion.div>
            <motion.div
              custom={1}
              variants={card}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full"
            >
              <h4 className="font-semibold">Wymagania prawne</h4>
              <p className="text-justify">
                Wszystkie firmy branży spożywczej mają obowiązek stosowania
                rozwiązań spełniających standard HACCP. Nasze folie zapewniają
                pełną zgodność z&nbsp;przepisami.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="px-4 sm:px-8 md:px-16 lg:px-32 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-gray rounded-3xl mt-6 md:mt-8 text-light card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <GlassWater className="w-8 h-8 md:w-10 md:h-10 text-light" />
            <h3>Kluczowe właściwości</h3>
          </div>
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={card}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl"
              >
                <div className="text-light p-4 bg-gray rounded-full flex items-center justify-center w-16 h-16 shrink-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                    {React.cloneElement(item.icon, {
                      className: "w-full h-full",
                    })}
                  </div>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="px-4 sm:px-8 md:px-16 lg:px-32 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-7"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Building className="w-8 h-8 md:w-10 md:h-10" />
            <h3> Gdzie najczęściej stosujemy folie przeciwsłoneczne?</h3>
          </div>
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 w-full"
          >
            {places.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={card}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
              >
                <div className="text-blue p-4 bg-blue-lighter rounded-xl flex items-center justify-center w-16 h-16 shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {React.cloneElement(item.icon, {
                      className: "w-6 h-6 sm:w-7 sm:h-7",
                    })}
                  </div>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8 md:px-16 lg:px-32"
      >
        <h3 className="text-center">
          Cena folii bezpiecznych klasy 3B3 HACCP z&nbsp;montażem
        </h3>
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center justify-center px-12 py-5 w-full lg:w-[70vw] border-y border-t-dark mt-4"
        >
          <div className="flex flex-row items-baseline gap-2.5">
            <h3>120-160 </h3>
            <p>zł/m²</p>
          </div>
          <p className="text-center">
            Cena obejmuje folię spełniającą standard HACCP oraz profesjonalny
            montaż
          </p>
        </motion.div>
      </motion.div>
      <BottomContact
        title="Potrzebujesz zabezpieczenia przed odłamkami szkła?"
        className="mt-7"
      />
      <Footer />
    </motion.div>
  );
}
