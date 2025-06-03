"use client";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import {
  MapPin,
  Ruler,
  Square,
  ClipboardList,
  Image,
  Mail,
} from "lucide-react";
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

export default function Page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[100px] flex flex-col items-center justify-center overflow-hidden"
    >
      <Header />
      <Title title="PROFESJONALNY MONTAŻ" />

      <motion.h1 variants={item} className="mt-4 md:mt-7">
        <span className="text-dark">MONTAŻ I WYCENA</span>
      </motion.h1>

      <motion.h2
        variants={item}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16"
      >
        Folie montujemy na terenie województwa małopolskiego i&nbsp;województwa
        śląskiego, jednak w&nbsp;przypadku większych zleceń jesteśmy
        w&nbsp;stanie dojechać w&nbsp;każdy zakątek Polski.
      </motion.h2>

      <motion.div
        variants={container}
        className="w-full px-4 sm:px-8 md:px-16 mt-8 md:mt-12"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-start justify-start p-4 sm:p-5 md:p-6 lg:p-7 gap-3 sm:gap-4 md:gap-5 w-full bg-blue-light rounded-2xl lg:rounded-3xl"
        >
          <div className="flex flex-row items-center justify-start gap-2 w-full">
            <ClipboardList className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
            <h3>Do wyceny montażu potrzebujemy:</h3>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full"
          >
            <motion.div
              variants={card}
              custom={0}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl lg:rounded-3xl items-start"
            >
              <div className="text-blue p-2 sm:p-3 bg-blue-lighter rounded-full">
                <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4>Wymiary szyb</h4>
                <p style={{ textAlign: "justify" }}>
                  Dokładne wymiary szyb okiennych w cm
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={card}
              custom={1}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl lg:rounded-3xl items-start"
            >
              <div className="text-blue p-2 sm:p-3 bg-blue-lighter rounded-full">
                <Square className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4>Ilość okien</h4>
                <p style={{ textAlign: "justify" }}>
                  Liczba okien do oklejenia
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={card}
              custom={2}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl lg:rounded-3xl items-start"
            >
              <div className="text-blue p-2 sm:p-3 bg-blue-lighter rounded-full">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
              </div>
              <div>
                <h4>Miejsce montażu</h4>
                <p style={{ textAlign: "justify" }}>
                  Adres lub lokalizacja montażu
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={card}
              custom={3}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl lg:rounded-3xl items-start"
            >
              <div className="text-blue p-2 sm:p-3 bg-blue-lighter rounded-full">
                <Image className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
              </div>
              <div>
                <h4>Zdjęcia szyb</h4>
                <p style={{ textAlign: "justify" }}>
                  Aktualny stan szyb, które planujecie Państwo okleić i&nbsp;ich
                  otoczenie (dostępność).
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="w-full px-4 sm:px-8 md:px-16 mt-8 md:mt-12"
      >
        <motion.div
          variants={item}
          custom={0}
          className="flex flex-col items-start justify-start p-4 sm:p-5 md:p-6 lg:p-7 gap-3 sm:gap-4 md:gap-5 w-full bg-gray rounded-2xl lg:rounded-3xl text-light"
        >
          <div className="flex flex-row items-center justify-start gap-2 w-full">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
            <h3>Dodatkowe usługi</h3>
          </div>

          <motion.div
            variants={item}
            custom={1}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col p-4 sm:p-5 md:p-6 lg:p-7 gap-2 sm:gap-3 bg-light rounded-xl lg:rounded-3xl text-dark w-full"
          >
            <h4 className="font-semibold">Pełna obsługa</h4>
            <p className="text-justify">
              Na życzenie klienta możemy wykonać pomiar samodzielnie.
              Dysponujemy próbkami wykorzystywanych przez nas folii, dzięki
              czemu możemy Państwa osobiście zapoznać z&nbsp;naszą ofertą.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <BottomContact
        title="Masz pytania dotyczące montażu?"
        className="mt-8 md:mt-12"
      />

      <Footer />
    </motion.div>
  );
}
