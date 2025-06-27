"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ShieldIcon from "@/public/icons/ShieldIcon";
import UserIcon from "@/public/icons/UserIcon";
import HeartIcon from "@/public/icons/HeartIcon";
import SunIcon from "@/public/icons/SunIcon";
import CheckIcon from "@/public/icons/CheckIcon";

export default function Page() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: "spring",
        ease: "easeOut",
      },
    }),
  };

  const checkItem = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
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

  const imageReveal = {
    hidden: { opacity: 0, y: 50, scale: 1.05 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.8 },
    },
  };

  const points = [
    {
      icon: <ShieldIcon />,
      head: "Najwyższa jakość",
      description:
        "Używamy tylko sprawdzonych materiałów, które zapewniają długotrwały efekt.",
    },
    {
      icon: <UserIcon />,
      head: "Indywidualne podejście",
      description: `Do każdej realizacji podchodzimy w${"\u00A0"}sposób indywidualny, aby najlepiej dostosować rodzaj folii do oczekiwań i${"\u00A0"}potrzeb klienta. Naszym celem jest zwiększenie komfortu pracy.`,
    },
    {
      icon: <HeartIcon />,
      head: "Zadowoleni klienci",
      description: `Mimo krótkiego stażu firmy możemy pochwalić się wieloma udanymi realizacjami i${"\u00A0"}pozytywnym odzewem od strony naszych klientów, a${"\u00A0"}także brakiem zgłoszeń reklamacji wykonanych przez nas usług.`,
    },
    {
      icon: <SunIcon />,
      head: "Miła atmosfera",
      description: `Nasi monterzy przeprowadzają prace w${"\u00A0"}ciszy i${"\u00A0"}czystości. Spełniają przy tym Państwa oczekiwania w${"\u00A0"}zakresie kultury osobistej jednocześnie zachowując profesjonalne podejście.`,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[80px] md:mt-[100px] flex flex-col"
    >
      <Header />

      <motion.h1
        variants={headline}
        className="mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-16"
        style={{ textAlign: "justify" }}
      >
        <span className="text-dark relative inline-block">
          Dragon <span className="text-blue">Folie</span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
          />
        </span>
      </motion.h1>

      <motion.div
        variants={container}
        className="flex flex-col lg:flex-row items-start justify-between gap-8 px-4 sm:px-8 md:px-16"
      >
        <div className="w-full lg:w-2/3 max-w-full lg:max-w-[900px]">
          <motion.h2
            variants={sub}
            className="text-justify"
            style={{ textAlign: "justify" }}
          >
            To nowa firma na Polskim rynku, jednak w montażu folii możemy
            pochwalić się wieloletnim doświadczeniem. <br />
            Nasi monterzy to wykwalifikowani specjaliści, którzy:
            <motion.div
              variants={checkItem}
              custom={0}
              className="flex flex-row items-center gap-2 mt-4"
            >
              <CheckIcon />
              <h4 style={{ color: "#6b7280", fontWeight: "normal" }}>
                dobiorą idealną folię do Twoich potrzeb,
              </h4>
            </motion.div>
            <motion.div
              variants={checkItem}
              custom={1}
              className="flex flex-row items-center gap-2 mt-4"
            >
              <CheckIcon />
              <h4 style={{ color: "#6b7280", fontWeight: "normal" }}>
                wyjaśnią wszystkie techniczne szczegóły,
              </h4>
            </motion.div>
            <motion.div
              variants={checkItem}
              custom={2}
              className="flex flex-row items-center gap-2 mt-4"
            >
              <CheckIcon />
              <h4 style={{ color: "#6b7280", fontWeight: "normal" }}>
                zadbają o&nbsp;perfekcyjny montaż.
              </h4>
            </motion.div>
          </motion.h2>
        </div>

        <motion.div
          variants={imageReveal}
          className="w-full lg:w-1/3 flex justify-center lg:justify-end"
        >
          <Image
            src="/logo-szare.webp"
            alt="Logo Dragon Folie"
            width={400}
            height={400}
            className="w-full max-w-[350px] md:max-w-[400px] rounded-lg"
            priority
            unoptimized
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 sm:px-8 md:px-16 flex justify-center items-center flex-col bg-gradient-to-b from-white to-blue-50 mt-8 md:mt-10 py-12 md:py-20 relative overflow-hidden"
      >
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-light"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-light"></div>
        <div className="absolute top-1/4 -right-10 w-24 h-24 rounded-lg bg-blue-light rotate-45"></div>

        <motion.h3
          variants={item}
          className="mb-12 md:mb-20 text-2xl md:text-3xl font-bold text-center relative z-10"
        >
          <span className="relative inline-block">
            <span className="relative z-10">Dlaczego warto nam zaufać?</span>
          </span>
        </motion.h3>

        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl relative z-10"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="text-blue p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-inner">
                {React.cloneElement(point.icon, {
                  className: "w-6 h-6 sm:w-8 sm:h-8",
                })}
              </div>
              <div>
                <h4 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-gray-800">
                  {point.head}
                </h4>
                <p className="text-justify text-base md:text-lg text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </motion.div>
  );
}
