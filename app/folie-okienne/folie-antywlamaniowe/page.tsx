"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { features, places } from "@/data/folie-antywlamaniowe";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ShieldIcon from "@/public/icons/ShieldIcon";
import ShieldCheckIcon from "@/public/icons/ShieldCheckIcon";
import AlertIcon from "@/public/icons/AlertIcon";
import LockIcon from "@/public/icons/LockIcon";
import CheckIcon from "@/public/icons/CheckIcon";
import ProfitIcon from "@/public/icons/ProfitIcon";
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
      <Title title="BEZPIECZEŃSTWO" />
      <motion.h1 variants={headline} className="mt-7 text-center">
        <span className="text-dark relative inline-block">
          <span>
            FOLIE <span className="text-blue">ANTYWŁAMANIOWE</span>
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
        Przezroczysta folia poliestrowa o wysokiej wytrzymałości, która zamienia
        zwykłe szyby w skuteczną barierę antywłamaniową. Niewidoczna ochrona,
        która nie wpływa na estetykę okien, zapewniając bezpieczeństwo
        i&nbsp;komfort psychiczny.
      </motion.h2>

      <BeforeAfterSlider
        before="/antywlamaniowe.webp"
        altBefore="Szyba domu przed aplikacją folii"
        after="/antywlamaniowe.webp"
        altAfter="Szyba biblioteki po aplikacji folii przeciwsłonecznej"
        sliderPos={50}
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
            <ShieldCheckIcon />
            <h3>Dlaczego warto wybrać folie antywłamaniowe?</h3>
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
              viewport={{ once: true }}
              className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full"
            >
              <h4 className="font-semibold">Niewidoczna ochrona</h4>
              <p className="text-justify">
                W&nbsp;przeciwieństwie do krat czy rolet, folia jest całkowicie
                przezroczysta i&nbsp;nie zmienia wyglądu okna. Stanowi element
                zaskoczenia dla potencjalnych włamywaczy.
              </p>
            </motion.div>
            <motion.div
              custom={1}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full"
            >
              <h4 className="font-semibold">Wielofunkcyjność</h4>
              <p className="text-justify">
                Oprócz ochrony przed włamaniem, folia zabezpiecza przed falą
                uderzeniową wybuchu, chroniąc przed odłamkami szkła.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
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
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-gray rounded-3xl mt-6 md:mt-8 text-light"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <ShieldIcon />
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
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl card"
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
        variants={image}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full relative mt-6 md:mt-8 aspect-video"
      >
        <Image
          src="/anty-wlamaniowe.webp"
          alt="Zdjęcie folii anty włamaniowych"
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
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue rounded-3xl mt-7 card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <AlertIcon />
            <h3 style={{ color: "white" }}>Jak działa ochrona?</h3>
          </div>
          <motion.div
            variants={container}
            className="flex flex-col md:flex-row gap-5 w-full"
          >
            <motion.div
              custom={0}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col p-4 sm:p-5 gap-3 bg-blue-light rounded-3xl w-full"
            >
              <div className="flex flex-row items-center gap-2">
                <LockIcon />
                <h4 className="font-semibold">Mechanizm zabezpieczenia</h4>
              </div>
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p style={{ color: "#333333" }}>
                    Zapobiega natychmiastowemu rozkruszeniu szyby
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p style={{ color: "#333333" }}>
                    Wymaga użycia specjalistycznych narzędzi
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p style={{ color: "#333333" }}>
                    Znacznie wydłuża czas potrzebny na sforsowanie
                    zabezpieczenia
                  </p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              custom={1}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col p-4 sm:p-5 gap-3 bg-blue-light rounded-3xl w-full"
            >
              <div className="flex flex-row items-center gap-2">
                <ProfitIcon />
                <h4 className="font-semibold">Dodatkowe korzyści</h4>
              </div>{" "}
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p style={{ color: "#333333" }}>
                    Ochrona przed falą uderzeniową wybuchu
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p style={{ color: "#333333" }}>
                    Zabezpieczenie przed przypadkowym stłuczeniem szkła
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p style={{ color: "#333333" }}>
                    Zmniejszenie kosztów ubezpieczenia nieruchomości
                  </p>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
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
            <h3> Gdzie najczęściej stosujemy folie przeciwsłoneczne?</h3>
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
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
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
        className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8 md:px-16 "
      >
        <motion.h3 variants={item} className="text-center">
          Cena folii antywłamaniowych z&nbsp;montażem
        </motion.h3>
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center px-12 py-5 w-full border-y border-t-dark "
        >
          <motion.div className="flex flex-col lg:flex-row w-full justify-center items-center">
            <motion.div
              variants={image}
              whileHover={{ scale: 1.03 }}
              className="w-full md:w-1/2 aspect-[3/2] relative overflow-hidden"
            >
              <Image
                src="/przezroczysta-rulon.webp"
                alt="Rolka Folii Antywłamaniowej"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-16"
            >
              <motion.div
                variants={item}
                custom={0}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center justify-center"
              >
                <h3 className="text-center">Folia antywłamaniowa klasy P1A</h3>
                <div className="flex flex-row items-baseline p-2.5 gap-2.5">
                  <h3>160-180 </h3>
                  <p>zł/m²</p>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                custom={1}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center justify-center"
              >
                <h3 className="text-center">Folia antywłamaniowa klasy P2A</h3>
                <div className="flex flex-row items-baseline p-2.5 gap-2.5">
                  <h3>190-240 </h3>
                  <p>zł/m²</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <p className="text-center">
            Cena zależy od grubości folii i&nbsp;klasy zabezpieczenia.
          </p>
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
          title="Chcesz zabezpieczyć swoją nieruchomość?"
          className="mt-7"
        />
        <Footer />
      </motion.div>
    </motion.div>
  );
}
