"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";
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

export default function Page() {
  const galleryImages = [
    "/folia_lustrzana_zewnatrz.webp",
    "/fasada.webp",
    "/folia_mrozona_zewnatrz.webp",
    "/matowa-wewnatrz.webp",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[100px] flex flex-col items-center justify-center"
    >
      <Header />
      <Title title="DOWÓD NASZEJ JAKOŚCI" />

      <motion.h1 variants={headline} className="mt-4 md:mt-7">
        <span className="text-dark relative inline-block">
          <span className="text-dark">NASZE REALIZACJE</span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
          />
        </span>
      </motion.h1>

      <motion.h2
        variants={sub}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32"
      >
        Zobacz przykłady naszych prac i&nbsp;inspiracje dla Twojego projektu
      </motion.h2>

      <motion.div
        variants={imageReveal}
        className="w-full lg:w-4/6 mt-4 md:mt-7"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center rounded-lg">
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={1200}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        variants={container}
        className="w-full px-4 sm:px-8 md:px-16 lg:px-32 mt-12 md:mt-16"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center p-6 md:p-8 bg-dark rounded-xl lg:rounded-2xl text-light"
        >
          <motion.h3
            variants={card}
            custom={0}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="text-center mb-4 md:mb-6"
          >
            Śledź nasze najnowsze realizacje w&nbsp;social media
          </motion.h3>
          <div className="flex gap-6 md:gap-8">
            <motion.a
              variants={card}
              custom={1}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white hover:scale-110 transition-transform"
              aria-label="Nasz Instagram"
            >
              <Instagram className="w-6 h-6 md:w-7 md:h-7" />
            </motion.a>
            <motion.a
              variants={card}
              custom={2}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full text-white hover:scale-110 transition-transform"
              aria-label="Nasz Facebook"
            >
              <Facebook className="w-6 h-6 md:w-7 md:h-7" />
            </motion.a>
          </div>
          <motion.p
            variants={card}
            custom={3}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-6 text-center"
            style={{ color: "#fff" }}
          >
            Codziennie nowe zdjęcia i&nbsp;inspiracje
          </motion.p>
        </motion.div>
      </motion.div>

      <BottomContact
        title="Zainspirowany naszymi realizacjami?"
        className="mt-12 md:mt-16"
      />

      <Footer />
    </motion.div>
  );
}
