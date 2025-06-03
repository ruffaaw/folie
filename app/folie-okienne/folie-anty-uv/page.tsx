"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { negative, places } from "@/data/folie-anty-uv";
import { FlaskConical, Layers, TriangleAlert } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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

      <Title title="Ochrona przed UV" />

      <motion.h1
        variants={item}
        className="mt-7 text-center px-4 sm:px-8 md:px-16"
      >
        <span className="text-dark relative inline-block">
          <span>
            FOLIE ANTY <span className="text-blue">ULTRAFIOLETOWE</span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-light -z-0"></span>
        </span>
      </motion.h1>

      <motion.h2
        variants={item}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 "
      >
        Ten rodzaj folii powoduje zatrzymanie szkodliwego promienia
        ultrafioletowego (UV) ze światła dziennego nawet w&nbsp;99% bez wpływu
        na inne parametry promieniowania słonecznego. Dzięki temu, swoje
        zastosowanie znajdują wszędzie tam, gdzie chcemy ochronić cenne
        przedmioty zabezpieczając je przed żółknięciem i&nbsp;płowieniem czy
        wydłużyć atrakcyjność witryn sklepowych.
      </motion.h2>
      <BeforeAfterSlider
        before="/przezroczysta_zewnatrz.webp"
        altBefore="Przeźroczysta szyba przed aplikacją folii"
        after="/przezroczysta_zewnatrz.webp"
        altAfter="Efekt po aplikacji folii matowej"
        sliderPos={40}
      />
      <motion.div
        variants={container}
        className="px-4 sm:px-8 md:px-16  w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 mt-6 md:mt-8 gap-5 w-full bg-blue-light rounded-3xl"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 1.5V5.16667M23.5 1.5V5.16667M12.5 30.8333V34.5M23.5 30.8333V34.5M5.16667 12.5H1.5M5.16667 23.5H1.5M34.5 12.5H30.8333M34.5 23.5H30.8333M8.83333 30.8333H27.1667C28.1391 30.8333 29.0718 30.447 29.7594 29.7594C30.447 29.0718 30.8333 28.1391 30.8333 27.1667V8.83333C30.8333 7.86087 30.447 6.92824 29.7594 6.24061C29.0718 5.55298 28.1391 5.16667 27.1667 5.16667H8.83333C7.86087 5.16667 6.92824 5.55298 6.24061 6.24061C5.55298 6.92824 5.16667 7.86087 5.16667 8.83333V27.1667C5.16667 28.1391 5.55298 29.0718 6.24061 29.7594C6.92824 30.447 7.86087 30.8333 8.83333 30.8333ZM12.5 12.5H23.5V23.5H12.5V12.5Z"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3>Jak działa promieniowanie UV przez szyby?</h3>
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
              <h4 className="font-semibold">Przepuszczalność promieni</h4>
              <p className="text-justify">
                Standardowe szyby przepuszczają znaczną część promieni UV.
                Dopiero specjalne szkło laminowane lub z&nbsp;filtrem UV
                zapewnia lepszą ochronę, ale jego wymiana jest kosztowna.
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
              <h4 className="font-semibold">Rozwiązanie: folie anty-UV</h4>
              <p className="text-justify">
                Nasze folie blokują UV-A i&nbsp;UV-B do 410 nm, stanowiąc
                ekonomiczną alternatywę dla wymiany szyb. Można je dopasować do
                konkretnych potrzeb, zachowując przy tym przejrzystość szkła.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={image}
        whileHover={{ scale: 1.03 }}
        className="w-full relative mt-6 md:mt-8 aspect-[10/7] "
      >
        <Image
          src="/folia-anty-uv.webp"
          alt="Zdjęcie Folii Anty UV"
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
        className="px-4 sm:px-8 md:px-16 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-gray rounded-3xl mt-6 md:mt-8 text-light"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <FlaskConical size={44} />
            <h3>Negatywny wpływ UV na zdrowie</h3>
          </div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full"
          >
            {negative.map((item, index) => (
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
                <div className="text-white p-3 bg-gray rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  <TriangleAlert className="w-6 h-6 sm:w-7 sm:h-7" />
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
        className="px-4 sm:px-8 md:px-16 w-full"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start py-7 gap-5 w-full rounded-3xl mt-6 md:mt-8"
        >
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Layers size={44} />
            <h3>Gdzie najczęściej stosujemy folie anty-UV?</h3>
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
                <div className="text-blue p-3 bg-blue-lighter rounded-lg flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
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
        className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8"
      >
        <h3 className="text-xl md:text-2xl text-center">
          Cena folii anty-UV z montażem
        </h3>

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
              src="/przezroczysta-rulon.webp"
              alt="Folia anty-UV w rolce"
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
              Cena obejmuje folię anty-UV oraz profesjonalny montaż
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <BottomContact title="Chcesz chronić się przed UV?" className="mt-7" />
      <Footer />
    </motion.div>
  );
}
