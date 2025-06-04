"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { offers } from "@/data/offers";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  hidden: { y: 20, opacity: 0 },
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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

const badgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      type: "spring",
      stiffness: 200,
    },
  }),
};

export default function Page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center overflow-hidden"
    >
      <Header />

      <motion.div
        variants={container}
        className="w-full px-4 sm:px-8 md:px-16 text-center mt-8 sm:mt-12 md:mt-16"
      >
        <motion.h1 variants={item}>
          <span className="text-dark relative inline-block">
            <span className="relative z-10">Folie okienne</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
            />{" "}
          </span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 md:mt-7 mx-auto leading-relaxed"
        >
          Nowoczesne rozwiązania dostosowane do Twoich potrzeb
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full justify-items-center px-4 sm:px-8 md:px-16 gap-5 my-10"
      >
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="bg-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-[12px] flex flex-col overflow-hidden"
          >
            <motion.div
              className="w-full relative"
              style={{ aspectRatio: "390/244" }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={offer.href}>
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover w-full h-full rounded-t-[12px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  unoptimized
                />
              </Link>
            </motion.div>

            <div className="flex flex-col p-6 gap-2 items-stretch h-full justify-between ">
              <div>
                <h3 className="mb-2" style={{ fontSize: "1.25rem" }}>
                  {offer.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    textAlign: "justify",
                  }}
                >
                  {offer.description}
                </p>

                <motion.div
                  variants={container}
                  className="flex flex-wrap gap-2 mb-3"
                >
                  {offer.advantages.map((advantage, advIndex) => (
                    <motion.span
                      key={advIndex}
                      variants={badgeVariants}
                      custom={advIndex}
                      className="inline-flex items-center py-1 px-3 bg-blue-light rounded-full text-blue text-sm"
                    >
                      {advantage}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  variants={container}
                  className="flex flex-wrap gap-2"
                >
                  {offer.places.map((place, placeIndex) => (
                    <motion.span
                      key={placeIndex}
                      variants={badgeVariants}
                      custom={placeIndex}
                      className="inline-flex items-center py-1 px-3 bg-gray rounded-full text-light text-sm"
                    >
                      {place}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.div
                whileTap={{ scale: 1.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={offer.href}
                  className="flex items-center gap-1 text-blue w-fit mt-4 max-lg:hidden"
                >
                  Zobacz szczegóły <ArrowRight />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </motion.div>
  );
}
