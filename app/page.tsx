"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import EnvelopeIcon from "@/public/icons/EnvelopeIcon";
import CheckIcon from "@/public/icons/CheckIcon50";

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
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const itemAltOne = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
};

const itemAltTwo = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
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

const button = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.6 },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 50, scale: 1.05 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.8 },
  },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center overflow-hidden"
    >
      <Header />

      <motion.div
        variants={container}
        className="w-full px-4 sm:px-8 md:px-16 flex flex-col items-center"
      >
        <motion.h1
          variants={headline}
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <span className="text-dark relative inline-block">
            <span className="text-dark">Witamy Państwa na naszej stronie!</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
            />
          </span>
        </motion.h1>
      </motion.div>
      <motion.div variants={container}>
        <motion.h2
          variants={sub}
          className="mt-4 md:mt-7 max-w-[90vw] md:max-w-[1030px] text-center text-lg md:text-xl z-20"
          style={{ color: "#333", fontWeight: 500, textAlign: "center" }}
        >
          Zajmujemy się montażem folii okiennych na terenie całego województwa
          małopolskiego i&nbsp;śląskiego.
        </motion.h2>
      </motion.div>

      <motion.div variants={container}>
        <motion.div variants={button} className="mt-10 md:mt-12 z-20">
          <Button
            text="Poznaj naszą ofertę"
            primaryColor="#003d66"
            backgroundColor="#d0ebff"
            href="/folie-okienne"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageReveal}
        className="relative w-full mt-10 md:mt-12 aspect-video flex justify-center z-30"
      >
        <Image
          src="/fasada.webp"
          alt="Fasada budynku z foliami okiennymi"
          fill
          className="object-cover h-full w-full "
          priority
          unoptimized
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="w-full flex flex-col items-center bg-gradient-to-t from-[#d0ebff] via-white to-white pb-6 md:pb-12 px-4 sm:px-8 md:px-16 z-10 py-12 md:py-20"
      >
        <div className="w-full">
          <motion.h3
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Dlaczego warto nam zaufać?
          </motion.h3>

          <motion.div
            variants={container}
            className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 mt-8 md:mt-16 w-full"
          >
            <motion.div
              variants={itemAltOne}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 w-full"
            >
              <div className="md:w-12 md:h-12 lg:w-16 lg:h-16 flex justify-center items-center">
                <EnvelopeIcon />
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Indywidualne zamówienia
                </h4>
                <p className="text-justify text-base md:text-lg">
                  Jeśli oczekujecie Państwo innego rodzaju folii prosimy
                  o&nbsp;przesłanie maila z&nbsp;zapytaniem. Jesteśmy
                  w&nbsp;stanie wykonać usługę montażu folii z&nbsp;wybranego
                  przez Państwa materiału, innego niż znajdującego się
                  w&nbsp;naszej stałej ofercie.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemAltTwo}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 w-full"
            >
              <div className="md:w-12 md:h-12 lg:w-16 lg:h-16 flex justify-center items-center">
                <CheckIcon />
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Gwarancja jakości
                </h4>
                <p className="text-justify text-base md:text-lg">
                  Zapewniamy, że montaż folii to inwestycja na długie lata,
                  ponieważ używamy folii najwyższej jakości. Do swojej oferty
                  dobraliśmy folie, które są łatwe w utrzymaniu
                  i&nbsp;czyszczeniu, odporne na uszkodzenia i&nbsp;działanie
                  czynników atmosferycznych.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
}
