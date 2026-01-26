"use client";
import Header from "@/components/Header";
import Title from "@/components/Title";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import { features } from "@/data/folie-dekoracyjne";
import { motion } from "framer-motion";
import LayoutIcon from "@/public/icons/LayoutIcon";
import AlertIcon from "@/public/icons/AlertIcon";
import CheckIcon from "@/public/icons/CheckIcon";
import SparkleIcon from "@/public/icons/SparkleIcon";
import ThumbsUpIcon from "@/public/icons/ThumbsUpIcon";
import FurnitureIcon from "@/public/icons/FurnitureIcon";
import DoorIcon from "@/public/icons/DoorIcon";
import WindowIcon from "@/public/icons/WindowIcon";

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
      <Title title="OKLEJANIE MEBLI, DRZWI I RAM OKIENNYCH FOLIĄ DEKORACYJNĄ" />
      <motion.h1 variants={headline} className="mt-7 text-center">
        <span className="text-dark relative inline-block">
          <span>
            FOLIE <span className="text-blue">DEKORACYJNE W&nbsp;KRAKOWIE</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
            />{" "}
          </span>
        </span>
      </motion.h1>
      <motion.h2
        variants={sub}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16"
      >
        <strong>Oklejanie mebli, oklejanie drzwi</strong> oraz{" "}
        <strong>oklejanie ram okiennych</strong> to nowoczesna technika
        wykończeniowa, która polega na pokrywaniu istniejących powierzchni
        <strong> specjalną folię dekoracyjną (okleiną / laminatem)</strong>.
        Dzięki temu stary mebel, drzwi lub rama okienna zyskuje{" "}
        <strong>
          nowy wygląd, wytrzymałość i&nbsp;ochronę przed uszkodzeniami
          mechanicznymi — bez konieczności wymiany na nowe
        </strong>
        .
      </motion.h2>

      <motion.div
        variants={image}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full relative mt-6 md:mt-8 aspect-[851/315]"
      >
        <Image
          src="/folie-dekoracyjne.webp"
          alt="Zdjęcie folii dekoracyjnych"
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
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7 card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <SparkleIcon />
            <h3>Dlaczego warto oklejać folią dekoracyjną?</h3>
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
              className="flex flex-col p-4 sm:p-5 gap-3 bg-light rounded-3xl w-full"
            >
              <div className="flex flex-row items-center gap-2">
                <h4 className="font-semibold">
                  Odświeżenie wyglądu bez kosztownej wymiany
                </h4>
              </div>
              <p>
                Dzięki okleinowaniu stare meble i&nbsp;drzwi mogą wyglądać jak
                nowe, bez dużych nakładów finansowych. To idealne rozwiązanie
                dla osób, które chcą:
              </p>
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p>zmienić kolor mebli,</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p>dopasować drzwi do nowej aranżacji wnętrza,</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p>zaktualizować wygląd ram okiennych.</p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              custom={1}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col p-4 sm:p-5 gap-3 bg-light rounded-3xl w-full"
            >
              <div className="flex flex-row items-center gap-2">
                <h4 className="font-semibold">Ochrona powierzchni</h4>
              </div>
              <p>
                Specjalne folie ochronne i&nbsp;dekoracyjne zabezpieczają
                powierzchnie przed:
              </p>
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p>zarysowaniami,</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p>wilgocią,</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p>promieniowaniem UV,</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>

                  <p>codziennym zużyciem.</p>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            custom={3}
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col p-4 sm:p-5 gap-3 bg-light rounded-3xl w-full"
          >
            <p className="text-center">
              To szczególnie ważne przy meblach kuchennych, drzwiach
              zewnętrznych i&nbsp;wewnętrznych, a&nbsp;także ramach okiennych
              narażonych na warunki atmosferyczne (np. PVC lub drewno).
            </p>

            <p className="mt-3 font-semibold text-center">
              TAK! Folię dekoracyjną możemy montować również od zewnątrz.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 sm:px-8 md:px-16 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-gray rounded-3xl mt-6 md:mt-8 text-light"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <ThumbsUpIcon />
            <h3>Zalety oklejania folią dekoracyjną</h3>
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
                <div className="text-white p-3 rounded-full flex items-center justify-start shrink-0">
                  <div>{item.icon}</div>
                </div>
                <div className="flex items-center">
                  <p style={{ color: "#333333" }}>{item.title}</p>
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
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 sm:px-8 md:px-16 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start gap-5 w-full  rounded-3xl mt-6 md:mt-8"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <LayoutIcon />
            <h3>Gdzie stosujemy folie dekoracyjne?</h3>
          </div>
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-5 w-full"
          >
            <motion.div
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
            >
              <div className="text-white p-3 rounded-full flex items-start justify-start shrink-0">
                <div>
                  <FurnitureIcon />
                </div>
              </div>
              <div>
                <h4>Oklejanie mebli</h4>
                <p>
                  Folia dekoracyjna jest idealna do mebli kuchennych, szaf
                  i&nbsp;komód, stolików i&nbsp;blatu biurka, zabudowy wnęk.
                </p>
                <p>Dzięki temu meble mogą zyskać:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>nowoczesną teksturę,</li>
                  <li>wygląd drewna, marmuru, betonu lub innego materiału,</li>
                  <li>jednolity kolor dopasowany do aranżacji wnętrza.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
            >
              <div className="text-white p-3 rounded-full flex items-start justify-start shrink-0">
                <div>
                  <DoorIcon />
                </div>
              </div>
              <div>
                <h4>Oklejanie drzwi</h4>
                <p>
                  Okleiny stosuje się na drzwi wewnętrzne, drzwi zewnętrzne oraz
                  futryny i&nbsp;ościeżnice.
                </p>
                <p>Dzięki temu drzwi:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>wyglądają elegancko i&nbsp;nowocześnie,</li>
                  <li>są dopasowane do stylu całego domu,</li>
                  <li>stają się odporne na codzienne uszkodzenia.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
            >
              <div className="text-white p-3 rounded-full flex items-start justify-start shrink-0">
                <div>
                  <WindowIcon />
                </div>
              </div>
              <div>
                <h4>Oklejanie ram okiennych</h4>
                <p>
                  Folii używa się również na ramy okienne PCV, ramy drewniane
                  czy ramy aluminiowe.
                </p>
                <p>Pozwala to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>odmienić kolor okien,</li>
                  <li>zabezpieczyć ramy przed warunkami atmosferycznymi,</li>
                  <li>dopasować okna do elewacji lub wnętrza.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="mt-10 px-4 sm:px-8 md:px-16 lg:px-32 text-center w-full">
        <h3>Gdzie można stosować folię dekoracyjną i&nbsp;laminaty?</h3>
        <p className="mt-4">
          Zastosowanie znajdują nie tylko we wnętrzach mieszkalnych -domy
          i&nbsp;mieszkania ale również w&nbsp;biurach, lokalach usługowych
          i&nbsp;komercyjnych.
        </p>
      </motion.div>

      <motion.div className="mt-10 px-4 sm:px-8 md:px-16 lg:px-32 text-center w-full">
        <h3>
          Ile kosztuje oklejenie powierzchni folią dekoracyjną (okleiną /
          laminatem)?
        </h3>
        <p className="mt-4">
          Niestety w przypadku tego rodzaju folii nie jesteśmy w&nbsp;stanie
          podać Państwu przedziału cenowego. Wynika to ze zbyt dużego wyboru
          jeśli chodzi o sam materiał a&nbsp;także od ilości powierzchni,
          dostępności i&nbsp;potrzebnego czasu na wykonanie Państwa zlecenia.
          Zachęcamy do wypełnienia{" "}
          <a href="/kontakt" className="text-blue underline" target="_blank">
            formularza
          </a>{" "}
          , a&nbsp;my odezwiemy się do Państwa z&nbsp;informacją zwrotną.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <BottomContact
          title="Chcesz odświeżyć meble, drzwi lub okna?"
          className="mt-7"
        />
        <Footer />{" "}
      </motion.div>
    </motion.div>
  );
}
