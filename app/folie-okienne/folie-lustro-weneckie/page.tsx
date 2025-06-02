"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { places } from "@/data/folie-lustro-weneckie";
import { Building, EyeOff, GlassWater } from "lucide-react";
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
      <Title title="PRYWATNOŚĆ I STYL" />
      <motion.h1 variants={item} className="mt-7 text-center">
        FOLIE <span className="text-blue">LUSTRO WENECKIE</span>
      </motion.h1>
      <motion.h2
        variants={item}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32"
      >
        Unikalne folie stworzone dla tych, którzy cenią sobie prywatność
        i&nbsp;elegancki wygląd. Działają na zasadzie lustra weneckiego -
        widzisz na zewnątrz, podczas gdy osoby z&nbsp;zewnątrz widzą tylko swoje
        odbicie. Idealne rozwiązanie łączące funkcjonalność z&nbsp;designem.Jest
        to rodzaj folii przeciwsłonecznej, dlatego jej właściwości będą takie
        same jak foli przeciwsłonecznych o&nbsp;których możecie Państwo
        przeczytać{" "}
        <a
          href="/folie-okienne/folie-przeciwsloneczne"
          className="text-blue underline"
        >
          tutaj
        </a>
        .
      </motion.h2>
      <BeforeAfterSlider
        before="/przezroczysta_zewnatrz.webp"
        altBefore="Folia przeźroczysta na oknie zewnątrz"
        after="/folia_lustrzana_zewnatrz.webp"
        altAfter="Folia Lustro Weneckie na oknie zewnątrz"
        sliderPos={40}
      />
      <motion.div
        variants={container}
        className="px-4 sm:px-8 md:px-16 lg:px-32 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue-light rounded-3xl mt-6 md:mt-8 card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <EyeOff className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Jak działa lustro weneckie?</h3>
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
              <h4 className="font-semibold">Efekt optyczny</h4>
              <p className="text-justify">
                Warstwa metalizowana folii odbija światło z&nbsp;zewnątrz,
                tworząc efekt lustra. Jednocześnie przepuszcza światło
                z&nbsp;wnętrza, umożliwiając obserwację otoczenia.
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
              <h4 className="font-semibold">Warunki działania</h4>
              <p className="text-justify">
                Efekt lustra działa tylko gdy natężenie światła na zewnątrz jest
                większe niż wewnątrz. Wieczorem warto użyć dodatkowych zasłon
                dla zachowania prywatności.
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
            <GlassWater className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Dostępne stopnie intensywności</h3>
          </div>
          <motion.div
            variants={container}
            className="flex flex-row gap-5 w-full"
          >
            <motion.div
              variants={card}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl flex-1"
            >
              <h4 className="font-semibold">3 warianty efektu lustra</h4>
              <p className="text-justify">
                Oferujemy folie w trzech stopniach intensywności efektu
                lustrzanego, które różnią się poziomem przepuszczalności
                światła. Im silniejszy efekt lustra, tym większa redukcja
                światła i lepsze chłodzenie pomieszczenia.
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
          className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-6 md:mt-8"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Building className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Gdzie najczęściej stosujemy folie lustro weneckie?</h3>
          </div>
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-5 w-full"
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
        <h3 className="text-center">Cena folii lustrzanych z&nbsp;montażem</h3>
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.03 }}
          className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-4 md:py-5 w-full max-w-2xl border-y border-t-dark mt-4"
        >
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>230-280 </h3>
            <p>zł/m²</p>
          </div>
          <p className="text-center">
            Cena zależy od wybranego wariantu i&nbsp;powierzchni montażu
          </p>
        </motion.div>
      </motion.div>
      <BottomContact title="Chcesz eleganckiej prywatności?" className="mt-7" />
      <Footer />
    </motion.div>
  );
}
