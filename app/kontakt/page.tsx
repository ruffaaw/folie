"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  User,
  Ruler,
  FileDigit,
  MousePointer,
  Camera,
  Text,
} from "lucide-react";
import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dimensions: "",
    windowsCount: "",
    location: "",
    foilType: "",
    message: "",
    attachments: null,
    privacyPolicy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Tutaj logika wysyłania formularza
    console.log(formData);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[100px] flex flex-col items-center justify-center "
    >
      <Header />
      <motion.h1 variants={headline} className="mt-4 md:mt-7">
        <span className="text-dark relative inline-block">
          <span className="text-dark">KONTAKT</span>
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
        Skontaktuj się z nami, a pomożemy dobrać idealne rozwiązanie dla Twoich
        potrzeb.
      </motion.h2>
      <motion.div
        variants={container}
        className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col lg:flex-col gap-8 mt-4 md:mt-7 mb-7"
      >
        <motion.div
          variants={item}
          className="w-full bg-blue-lighter p-6 md:p-8 rounded-xl shadow-md"
        >
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="visible"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-row gap-3 items-center w-full">
                <User className="w-8 h-8 mt-8" />
                <motion.div
                  variants={card}
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <label
                    htmlFor="name"
                    className="block text-sm md:text-lg font-medium mb-1"
                  >
                    Imię i nazwisko*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </motion.div>
              </div>
              <motion.div
                variants={card}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-row gap-3 items-center w-full"
              >
                <Mail className="w-8 h-8 mt-8" />
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-lg font-medium mb-1"
                  >
                    Adres email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={card}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-row gap-3 items-center w-full"
            >
              <Phone className="w-8 h-8 mt-8" />
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm md:text-lg font-medium mb-1"
                >
                  Telefon*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={card}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-row gap-3 items-center w-full"
              >
                <Ruler className="w-8 h-8 mt-8" />
                <div className="w-full">
                  <label
                    htmlFor="dimensions"
                    className="block text-sm md:text-lg font-medium mb-1"
                  >
                    Wymiary szyb (cm)
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="np. 100x120"
                  />
                </div>
              </motion.div>
              <motion.div
                variants={card}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-row gap-3 items-center w-full"
              >
                <FileDigit className="w-8 h-8 mt-8" />
                <div className="w-full">
                  <label
                    htmlFor="windowsCount"
                    className="block text-sm md:text-lg font-medium mb-1"
                  >
                    Ilość okien
                  </label>
                  <input
                    type="number"
                    id="windowsCount"
                    name="windowsCount"
                    min="1"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light"
                    value={formData.windowsCount}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={card}
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-row gap-3 items-center w-full"
            >
              <MapPin className="w-8 h-8 mt-8" />
              <div className="w-full">
                <label
                  htmlFor="location"
                  className="block text-sm md:text-lg font-medium mb-1"
                >
                  Miejsce montażu
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Miejscowość, ulica"
                />
              </div>
            </motion.div>
            <motion.div
              variants={card}
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-row gap-3 items-center w-full"
            >
              <MousePointer className="w-8 h-8 mt-8" />
              <div className="w-full">
                <label
                  htmlFor="foilType"
                  className="block text-sm md:text-lg font-medium mb-1"
                >
                  Rodzaj folii
                </label>
                <select
                  id="foilType"
                  name="foilType"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light"
                  value={formData.foilType}
                  onChange={handleChange}
                >
                  <option value="">Wybierz rodzaj folii</option>
                  <option value="anty-uv">Folie Anty UV</option>
                  <option value="przeciwsloneczne">
                    Folie przeciwsłoneczne
                  </option>
                  <option value="antywłamaniowe-P1A">
                    Folie antywłamaniowe klasy P1A
                  </option>
                  <option value="antywłamaniowe-P2A">
                    Folie antywłamaniowe klasy P2A
                  </option>
                  <option value="bezpieczne">
                    Folie bezpieczne klasy 3B3 HACCP
                  </option>
                  <option value="lustro-weneckie">Folie lustro weneckie</option>
                  <option value="matowe">Folie matowe</option>
                  <option value="mrozone">Folie mrożone</option>
                </select>
              </div>
            </motion.div>
            <motion.div
              variants={card}
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-row gap-3 items-center w-full"
            >
              <Camera className="w-8 h-8 mt-8" />
              <div className="w-full">
                <label
                  htmlFor="attachments"
                  className="block text-sm md:text-lg font-medium mb-1"
                >
                  Zdjęcia okien (opcjonalne)
                </label>
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  multiple
                  accept="image/*"
                  className="w-full px-4 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-light file:text-blue hover:file:bg-blue-lighter bg-light"
                  onChange={handleChange}
                />
              </div>
            </motion.div>
            <motion.div
              variants={card}
              custom={8}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-row gap-3 items-start w-full"
            >
              <Text className="w-8 h-8 mt-8" />
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm md:text-lg font-medium mb-1"
                >
                  Treść wiadomości
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </motion.div>

            <motion.div
              variants={card}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div className="flex items-center h-5">
                <input
                  id="privacyPolicy"
                  name="privacyPolicy"
                  type="checkbox"
                  required
                  className="w-4 h-4 text-blue border rounded focus:ring-blue"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                />
              </div>
              <div className="ml-3 text-sm md:text-lg">
                <label htmlFor="privacyPolicy" className="font-medium">
                  Zgadzam się z{" "}
                  <a
                    href="/polityka-prywatnosci"
                    className="text-blue underline"
                  >
                    polityką prywatności
                  </a>
                  *
                </label>
              </div>
            </motion.div>

            <motion.button
              variants={card}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              type="submit"
              className="w-full bg-blue text-white py-3 px-6 rounded-lg hover:bg-blue-dark transition-colors font-medium text-sm md:text-lg"
            >
              Wyślij wiadomość
            </motion.button>
          </motion.form>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="border-t border-dark pt-8 text-center"
        >
          <motion.h3
            custom={0}
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl font-semibold mb-4"
          >
            Dragon Folie
          </motion.h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <motion.div
              custom={1}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center hover:scale-110"
            >
              <Phone className="text-blue mr-2" />
              <a href="tel:607935863" className="hover:text-blue">
                607 935 863
              </a>
            </motion.div>

            <motion.div
              custom={2}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center hover:scale-110"
            >
              <Mail className="text-blue mr-2" />
              <a
                href="mailto:dragon.folie@gmail.com"
                className="hover:text-blue"
              >
                dragon.folie@gmail.com
              </a>
            </motion.div>

            <motion.div
              custom={3}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center hover:scale-110"
            >
              <MapPin className="text-blue mr-2" />
              <a
                href="https://maps.app.goo.gl/TW4CQtPvfUZrAb5R6"
                target="_blank"
                className="text-left hover:text-blue"
              >
                ul. Polnych kwiatów 9, <br />
                32-070 Wołowice
              </a>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              custom={4}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="#"
              target="_blank"
              className="text-blue hover:text-blue hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-10 w-10" />
            </motion.a>
            <motion.a
              custom={5}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="#"
              target="_blank"
              className="text-blue hover:text-blue hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-10 w-10" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
}
