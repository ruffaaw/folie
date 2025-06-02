"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { features, places } from "@/data/folie-antywlamaniowe";
import {
  AlertOctagon,
  Box,
  Building,
  Check,
  FlaskConical,
  Lock,
  ShieldCheck,
} from "lucide-react";
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
        FOLIE <span className="text-blue">ANTYWŁAMANIOWE</span>
      </motion.h1>
      <motion.h2
        variants={item}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32"
      >
        Przezroczysta folia poliestrowa o wysokiej wytrzymałości, która zamienia
        zwykłe szyby w skuteczną barierę antywłamaniową. Niewidoczna ochrona,
        która nie wpływa na estetykę okien, zapewniając bezpieczeństwo
        i&nbsp;komfort psychiczny.
      </motion.h2>
      <motion.div
        variants={image}
        whileHover={{ scale: 1.03 }}
        className="w-full lg:w-8/12 relative mt-7 aspect-[1000/659]"
      >
        <Image
          src="/anty-wlamaniowe.webp"
          alt="Grafika folii antywłamaniowych"
          fill
          className="object-cover w-full h-full md:px-16 lg:px-32"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
              whileHover={{ scale: 1.03 }}
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
              whileHover={{ scale: 1.03 }}
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
        className="px-4 sm:px-8 md:px-16 lg:px-32 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-gray rounded-3xl mt-6 md:mt-8 text-light"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <FlaskConical className="w-8 h-8 md:w-10 md:h-10 text-light" />
            <h3>Negatywny wpływ UV na zdrowie</h3>
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
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl card"
              >
                <div className="text-light p-4 bg-gray rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 items-center justify-center">
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
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue rounded-3xl mt-7 card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <AlertOctagon className="w-8 h-8 md:w-10 md:h-10 text-light" />
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
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex flex-col p-4 sm:p-5 gap-3 bg-blue-light rounded-3xl w-full"
            >
              <div className="flex flex-row items-center gap-2">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8" />
                <h4 className="font-semibold">Mechanizm zabezpieczenia</h4>
              </div>
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Zapobiega natychmiastowemu rozkruszeniu szyby
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Wymaga użycia specjalistycznych narzędzi
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
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
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex flex-col p-4 sm:p-5 gap-3 bg-blue-light rounded-3xl w-full"
            >
              <div className="flex flex-row items-center gap-2">
                <Box className="w-6 h-6 sm:w-8 sm:h-8" />
                <h4 className="font-semibold">Dodatkowe korzyści</h4>
              </div>{" "}
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Ochrona przed falą uderzeniową wybuchu
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Zabezpieczenie przed przypadkowym stłuczeniem szkła
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
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
        className="px-4 sm:px-8 md:px-16 lg:px-32 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-6 md:mt-8"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Building size={44} />
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
          Cena folii antywłamaniowych z&nbsp;montażem
        </h3>
        <div className="flex flex-col items-center justify-center px-12 py-5 w-full lg:w-[80vw] border-y border-t-dark ">
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
          <p className="text-center">
            Cena zależy od grubości folii i&nbsp;klasy zabezpieczenia
          </p>
        </div>
      </motion.div>
      <BottomContact
        title="Chcesz zabezpieczyć swoją nieruchomość?"
        className="mt-7"
      />
      <Footer />
    </motion.div>
  );
}
