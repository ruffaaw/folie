"use client";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { places } from "@/data/folie-mrozone";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ShieldCheckIcon from "@/public/icons/ShieldCheckIcon";
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
      className="mt-[100px] flex flex-col items-center justify-center"
    >
      <Header />
      <Title title="PRYWATNOŚĆ I DEKORACJA" />
      <motion.h1 variants={headline} className="mt-7 text-center">
        <span className="text-dark relative inline-block">
          <span>
            FOLIE <span className="text-blue">MROŻONE</span>
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
        Folie mrożone, nazywane inaczej mrożonką lub szybami mlecznymi to
        specjalny materiał dający efekt mrożonej szyby podobny do odbicia
        światła od zmrożonej powierzchni z&nbsp;maleńkimi kryształkami lodu.
        Mrożona folia stosowana jest, aby przesłonić widok do środka
        pomieszczenia. Może stanowić również element dekoracyjny lub reklamowy,
        ponieważ idealnie nadaje się do ploterowania, wycinania wzorów oraz do
        zadruku.
      </motion.h2>
      <BeforeAfterSlider
        before="/przezroczysta_zewnatrz.webp"
        altBefore="Folia przeźroczysta na oknie zewnątrz"
        after="/folia_mrozona_zewnatrz.webp"
        altAfter="Folia Mrożona na oknie zewnątrz"
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
            <ShieldCheckIcon />
            <h3>Dlaczego warto wybrać folie mrożone?</h3>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col md:flex-row gap-4 md:gap-5 card w-full "
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
              <h4 className="font-semibold">Uniwersalne zastosowanie</h4>
              <p className="text-justify">
                Możliwość zastosowania zarówno jako element dekoracyjny, jak
                i&nbsp;praktyczne rozwiązanie zapewniające prywatność. Idealne
                do wycinania wzorów i&nbsp;nadruków reklamowych.
              </p>
            </motion.div>
            <motion.div
              custom={1}
              variants={card}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full"
            >
              <h4 className="font-semibold">Łatwy montaż i&nbsp;demontaż</h4>
              <p className="text-justify">
                Folie nie uszkadzają szyb i&nbsp;można je w&nbsp;każdej chwili
                usunąć bez śladu. Prosty montaż bez konieczności wymiany szyb.
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
          src="/mrozone.webp"
          alt="Zdjęcie folii mrożonych"
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
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 sm:px-8 md:px-16  w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start  gap-5 w-full  rounded-3xl mt-6 md:mt-8"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <PlacesIcon />
            <h3>Gdzie najczęściej stosujemy folie anty-UV?</h3>
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
                className="flex gap-5 p-5 lg:p-7 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
              >
                <div className=" p-3 rounded-lg flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 sm:w-7 sm:h-7",
                  })}
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
        className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8"
      >
        <motion.h3 variants={item} className="text-xl md:text-2xl text-center">
          Cena folii mrożonych z&nbsp;montażem
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
              src="/mrozona-rulon.webp"
              alt="Rolka Folii Matowej"
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
              <h3 className="text-2xl md:text-3xl font-bold ">120-160</h3>
              <p>zł/m²</p>
            </div>

            <p className="text-center mt-6">
              Cena obejmuje folię mrożoną oraz profesjonalny montaż
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
        <BottomContact title="Chcesz zamówić folie mrożone?" className="mt-7" />
        <Footer />
      </motion.div>
    </motion.div>
  );
}
