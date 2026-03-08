"use client";
import Header from "@/components/Header";
import Title from "@/components/Title";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import { features, places } from "@/data/swietliki-z-poliweglanu";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ShieldIcon from "@/public/icons/ShieldIcon";
import LayoutIcon from "@/public/icons/LayoutIcon";

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
      <Title title="OCHRONA TERMICZNA" />
      <motion.h1 variants={headline} className="mt-7 text-center">
        <span className="text-dark relative inline-block">
          <span>
            FOLIE PRZECIWSŁONECZNE NA{" "}
            <span className="text-blue">
              ŚWIETLIKI Z&nbsp;POLIWĘGLANU W&nbsp;KRAKOWIE
            </span>
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
        Dachy hal produkcyjnych pokryte są najczęściej płytami poliwęglanowymi,
        przez które promienie światła bez problemu przedostają się do wnętrza
        gwałtownie zwiększając temperaturę w&nbsp;słoneczne dni. Powoduje to
        szybkie nagrzewanie się pomieszczeń i&nbsp;obniżenie komfortu pracy
        pracowników hal.
        <br />
        Proponujemy Państwu rozwiązanie w&nbsp;postaci folii przeciwsłonecznych
        na świetliki poliwęglanowe w&nbsp;dwóch kolorach: białym
        i&nbsp;srebrnym. Powodują redukcję nagrzewania hali/magazynu obniżając
        temperaturę wewnątrz najczęściej od 3 do 5&nbsp;°C, jednak w&nbsp;upalne
        dni różnica może wynieść nawet od 8 do 10&nbsp;°C. Zapraszamy do
        zapoznania się z&nbsp;
        <a href="/artykuly" className="text-blue underline">
          artykułem
        </a>
        , w&nbsp;którym opisaliśmy konkretne przykłady efektów montażu. <br />
        Folie na dach z&nbsp;poliwęglanu posiadają mikrospory, inaczej nazywane
        rozszerzalnością cieplną, taką jak płyta poliwęglanowa. Dzięki temu
        folia dostosowuje się do tej specyficznej powierzchni a&nbsp;także
        pozwala aby gaz wydzielany przez płyty poliwęglanowe ulatniał się.
        Chroni poliwęglan dzięki cząsteczkom odbijającym promieniowanie UV
        jednocześnie zapobiegając jego żółknięciu. <br />
        Montaż folii na świetliki wykonywany jest od zewnątrz. Nasi pracownicy
        posiadają kwalifikacje do wykonywania prac na wysokościach, dzięki czemu
        bez względu na wysokość budynku możemy podjąć się montażu folii na
        oknach dachowych.
      </motion.h2>

      <BeforeAfterSlider
        before="/swietliki.webp"
        altBefore="Szyba biblioteki przed aplikacją folii"
        after="/swietliki_po_aplikacji.webp"
        altAfter="Szyba biblioteki po aplikacji folii anty UV"
        sliderPos={40}
      />

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
            <h3>Gdzie stosujemy folie na poliwęglan?</h3>
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
        className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8"
      >
        <motion.h3 variants={item} className="text-xl md:text-2xl text-center">
          Cena folii na świetliki z&nbsp;montażem
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
              alt="Rolka folii przeciwsłonecznej na świetliki z poliwęglanu"
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
              <h3 className="text-2xl md:text-3xl font-bold ">120-140</h3>
              <p>zł/m²</p>
            </div>

            <p className="text-center mt-6">
              Cena obejmuje folię oraz profesjonalny montaż na wysokości.
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
          title="Chcesz obniżyć temperaturę w hali?"
          className="mt-7"
        />
        <Footer />{" "}
      </motion.div>
    </motion.div>
  );
}
