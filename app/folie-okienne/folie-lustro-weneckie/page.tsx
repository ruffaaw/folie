"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { places } from "@/data/folie-lustro-weneckie";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import EyeOffIcon from "@/public/icons/EyeOffIcon";
import MirrorIcon from "@/public/icons/MirrorIcon";
import PlacesIcon from "@/public/icons/PlacesIcon";

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
      stiffness: 80,
      damping: 12,
    },
  },
};

const card = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
    },
  },
};

const image = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
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
      className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center overflow-hidden"
    >
      <Header />
      <Title title="PRYWATNOŚĆ I STYL" />
      <motion.h1 variants={headline} className="mt-7 text-center">
        <span className="text-dark relative inline-block">
          <span>
            FOLIE <span className="text-blue">LUSTRO WENECKIE</span>
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
          />
        </span>
      </motion.h1>
      <motion.h2
        variants={sub}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 "
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
        className="px-4 sm:px-8 md:px-16  w-full"
      >
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue-light rounded-3xl mt-6 md:mt-8 card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <EyeOffIcon />
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
              viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
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
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 sm:px-8 md:px-16  w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-gray rounded-3xl mt-6 md:mt-8 text-light card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <MirrorIcon />
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
              viewport={{ once: true, margin: "-100px" }}
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
        variants={image}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full relative mt-6 md:mt-8 aspect-video"
      >
        <Image
          src="/lustro-weneckie.webp"
          alt="Zdjęcie folii lustro weneckie"
          fill
          className="object-cover md:px-16"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
          unoptimized
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="px-4 sm:px-8 md:px-16  w-full"
      >
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start justify-start gap-5 w-full  rounded-3xl mt-6 md:mt-8"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <PlacesIcon />
            <h3>Gdzie najczęściej stosujemy folie lustro weneckie?</h3>
          </div>
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full"
          >
            {places.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col lg:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
              >
                <div className="text-white p-3 rounded-full flex items-start justify-start shrink-0">
                  <div>{item.icon}</div>
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
        className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8"
      >
        <motion.h3 variants={item} className="text-xl md:text-2xl text-center">
          Cena folii lustrzanych z&nbsp;montażem
        </motion.h3>

        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full max-w-4xl p-6 md:p-8 mt-4 border-y border-t-dark"
        >
          <motion.div
            variants={image}
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-1/2 aspect-[3/2] relative overflow-hidden"
          >
            <Image
              src="/lustrzana-rulon.webp"
              alt="Rolka Folii Anty UV"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          <motion.div
            variants={item}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <div className="flex flex-row items-baseline gap-2 justify-center">
              <h3 className="text-2xl md:text-3xl font-bold ">230-280</h3>
              <p>zł/m²</p>
            </div>

            <p className="text-center mt-6">
              Cena zależy od wybranego wariantu i&nbsp;powierzchni montażu.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <BottomContact
          title="Chcesz eleganckiej prywatności?"
          className="mt-7"
        />
        <Footer />
      </motion.div>
    </motion.div>
  );
}
