"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { features, places } from "@/data/folie-przeciwsloneczne";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ThermometerIcon from "@/public/icons/foliePrzeciwsloneczne/ThermometerIcon";
import ShieldIcon from "@/public/icons/o-nas/ShieldIcon";
import LayoutIcon from "@/public/icons/foliePrzeciwsloneczne/LayoutIcon";
import SunIcon from "@/public/icons/foliePrzeciwsloneczne/SunIcon";
import HomeIcon from "@/public/icons/foliePrzeciwsloneczne/HomeIcon";
import CheckIcon from "@/public/icons/foliePrzeciwsloneczne/CheckIcon";
import PlacesIcon from "@/public/icons/foliePrzeciwsloneczne/PlacesIcon";

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
      <Title title="KOMFORT TERMICZNY" />
      <motion.h1
        variants={headline}
        className="mt-7 text-center px-4 sm:px-8 md:px-16"
      >
        <span className="text-dark relative inline-block">
          <span>
            FOLIE <span className="text-blue">PRZECIWSŁONECZNE</span>
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
        Folia przeciwsłoneczna redukuje wpływ promieni UV oraz zmniejsza
        nagrzewanie się pomieszczeń, zapewniając komfort nawet
        w&nbsp;najgorętsze dni. Znajduje zastosowanie wszędzie tam, gdzie
        potrzebna jest skuteczna ochrona przed słońcem i&nbsp;redukcja kosztów
        klimatyzacji.
      </motion.h2>
      <BeforeAfterSlider
        before="/przezroczysta_zewnatrz.webp"
        altBefore="Szyba domu przed aplikacją folii"
        after="/przezroczysta_zewnatrz.webp"
        altAfter="Szyba biblioteki po aplikacji folii przeciwsłonecznej"
        sliderPos={40}
      />
      <motion.div
        variants={container}
        className="px-4 sm:px-8 md:px-16  w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue-light rounded-3xl mt-6 md:mt-8"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <ThermometerIcon />
            <h3>Korzyści z&nbsp;folii przeciwsłonecznych</h3>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row gap-4 md:gap-5 card w-full"
          >
            <motion.div
              variants={card}
              custom={0}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full"
            >
              <h4 className="font-semibold">Oszczędności energii</h4>
              <p className="text-justify">
                Redukcja kosztów klimatyzacji nawet o&nbsp;30-50%. W&nbsp;zimie
                folia pomaga zatrzymać ciepło wewnątrz, obniżając koszty
                ogrzewania.
              </p>
            </motion.div>
            <motion.div
              variants={card}
              custom={0}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full"
            >
              <h4 className="font-semibold">Komfort termiczny</h4>
              <p className="text-justify">
                Obniżenie temperatury wewnątrz pomieszczeń nawet o&nbsp;10°C.
                Eliminacja &quot;efektu sauny&quot; w&nbsp;pomieszczeniach
                z&nbsp;dużymi przeszkleniami.
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
                whileHover={{ scale: 1.03 }}
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
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="px-4 sm:px-8 md:px-16  w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue rounded-3xl mt-6 md:mt-8 card"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <LayoutIcon />
            <h3 style={{ color: "white" }}>Rodzaje folii przeciwsłonecznych</h3>
          </div>
          <motion.div
            variants={container}
            className="flex flex-col md:flex-row gap-5 w-full"
          >
            <motion.div
              variants={card}
              custom={0}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col p-4 sm:p-5 gap-3 bg-blue-light rounded-3xl w-full"
            >
              <div className="flex flex-row items-center gap-2">
                <SunIcon />
                <h4 className="font-semibold">Folie zewnętrzne</h4>
              </div>
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>
                  <p style={{ color: "#333333" }}>
                    Najwyższa skuteczność (do 86% redukcji ciepła)
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>
                  <p style={{ color: "#333333" }}>
                    Montaż na każdym rodzaju szkła
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>
                  <p style={{ color: "#333333" }}>
                    Wymagają odpowiednich warunków atmosferycznych
                  </p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={card}
              custom={0}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col p-4 sm:p-5 gap-3 bg-blue-light rounded-3xl w-full"
            >
              <div className="flex flex-row items-center gap-2">
                <HomeIcon />
                <h4 className="font-semibold">Folie wewnętrzne</h4>
              </div>{" "}
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>
                  <p style={{ color: "#333333" }}>
                    Montaż możliwy przez cały rok
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>
                  <p style={{ color: "#333333" }}>
                    Ograniczenia w&nbsp;stosowaniu na niektórych oknach
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">
                    <CheckIcon />
                  </div>
                  <p style={{ color: "#333333" }}>
                    Mniejsza skuteczność niż folii zewnętrznych
                  </p>
                </li>
              </ul>
            </motion.div>
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
          src="/antyUV.webp"
          alt="Zdjęcie Folii w biurowcu"
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
                whileHover={{ scale: 1.03 }}
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
        className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8"
      >
        <motion.h3 variants={item} className="text-xl md:text-2xl text-center">
          Cena folii przeciwsłonecznych z montażem
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
              src="/półprzeźroczysta-błyszcząca-rulon.webp"
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
              Cena obejmuje folię oraz profesjonalny montaż
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
          title="Chcesz obniżyć temperaturę w pomieszczeniach?"
          className="mt-7"
        />
        <Footer />
      </motion.div>
    </motion.div>
  );
}
