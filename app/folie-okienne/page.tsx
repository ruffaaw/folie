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
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const badgeVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "easeInOut",
      stiffness: 200,
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

      <motion.h1 variants={item} className="mt-8 sm:mt-12 md:mt-16 text-center">
        <span className="text-dark">Folie okienne</span>
      </motion.h1>

      <motion.h2
        variants={item}
        className="mt-4 md:mt-7 max-w-[90vw] md:max-w-[1030px] text-center"
      >
        Nowoczesne rozwiązania dostosowane do Twoich potrzeb
      </motion.h2>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full justify-items-center px-4 sm:px-8 md:px-16 lg:px-32 gap-5 my-10"
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
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover w-full h-full rounded-t-[12px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                unoptimized
              />
            </motion.div>

            <div className="flex flex-col p-6 gap-2 items-stretch h-full justify-between">
              <div>
                <h3 style={{ fontSize: "1.5rem" }}>{offer.title}</h3>
                <p
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
                  className="gap-2 flex flex-wrap mt-2"
                >
                  {offer.advantages.map((advantage, advIndex) => (
                    <motion.div
                      key={advIndex}
                      variants={badgeVariants}
                      className="flex items-center py-1 px-2.5 bg-blue-light rounded-full"
                    >
                      <p style={{ fontSize: "0.8rem", color: "#003d66" }}>
                        {advantage}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={container}
                  className="gap-2 flex flex-wrap mt-2"
                >
                  {offer.places.map((place, placeIndex) => (
                    <motion.div
                      key={placeIndex}
                      variants={badgeVariants}
                      className="flex items-center py-1 px-2.5 bg-gray rounded-full"
                    >
                      <p style={{ fontSize: "0.8rem", color: "#fff" }}>
                        {place}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                whileTap={{ scale: 1.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={offer.href}
                  className="flex items-center gap-1 text-blue w-fit mt-4"
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
