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
  UploadCloud,
  X,
  FileText,
} from "lucide-react";
import { useRef, useState } from "react";
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
    attachments: [] as File[],
    privacyPolicy: false,
  });

  const [previews, setPreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    if (type === "file") {
      if (!target.files) return;

      const newFiles = Array.from(target.files);
      const validFiles = newFiles.filter((file) => {
        const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
        const isValidType = [
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/gif",
          "application/pdf",
        ].includes(file.type);
        return isValidSize && isValidType;
      });

      // Łączenie nowych plików z istniejącymi (limit 5)
      const updatedFiles = [...formData.attachments, ...validFiles].slice(0, 5);
      setFormData((prev) => ({
        ...prev,
        attachments: updatedFiles,
      }));

      // Czyszczenie poprzednich podglądów
      previews.forEach((preview) => {
        if (preview !== "pdf") URL.revokeObjectURL(preview);
      });

      // Generowanie nowych podglądów
      const newPreviews = updatedFiles.map((file) => {
        if (file.type === "application/pdf") {
          return "pdf";
        }
        return URL.createObjectURL(file);
      });

      setPreviews(newPreviews);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const removeAttachment = (index: number) => {
    const updatedFiles = formData.attachments.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    // Czyszczenie pamięci dla podglądu (jeśli to obraz)
    if (previews[index] !== "pdf") {
      URL.revokeObjectURL(previews[index]);
    }

    setFormData((prev) => ({
      ...prev,
      attachments: updatedFiles,
    }));
    setPreviews(updatedPreviews);

    // Reset inputa
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    // Walidacja podstawowych pól
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.privacyPolicy
    ) {
      alert("Proszę wypełnić wymagane pola!");
      setIsSubmitting(false);
      return;
    }

    // Ograniczenie liczby plików
    if (formData.attachments.length > 5) {
      alert("Możesz przesłać maksymalnie 5 plików");
      setIsSubmitting(false);
      return;
    }

    // Ograniczenie rozmiaru pojedynczego pliku
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    const oversizedFiles = formData.attachments.filter(
      (file) => file.size > maxFileSize
    );

    if (oversizedFiles.length > 0) {
      alert(
        `Następujące pliki są zbyt duże (max 5MB): ${oversizedFiles
          .map((f) => f.name)
          .join(", ")}`
      );
      setIsSubmitting(false);
      return;
    }

    // Ograniczenie rozmiaru plików do 25MB
    const maxTotalSize = 25 * 1024 * 1024; // 25MB
    const totalSize = formData.attachments.reduce(
      (sum, file) => sum + file.size,
      0
    );

    if (totalSize > maxTotalSize) {
      alert(`Łączny rozmiar załączników nie może przekraczać 25MB`);
      setIsSubmitting(false);
      return;
    }

    // Ograniczenie typów plików
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "application/pdf",
    ];
    const invalidFiles = formData.attachments.filter(
      (file) => !allowedTypes.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      alert(
        `Następujące pliki mają nieobsługiwany format: ${invalidFiles
          .map((f) => f.name)
          .join(", ")}`
      );
      setIsSubmitting(false);
      return;
    }

    // Ograniczenie częstotliwości wysyłania
    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 60000) {
      alert(
        "Wiadomość została już wysłana. Poczekaj chwilę przed wysłaniem kolejnej."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const emailBody = `
        Imię i nazwisko: ${formData.name}
        Email: ${formData.email}
        Telefon: ${formData.phone}
        Wymiary: ${formData.dimensions || "Nie podano"}
        Ilość okien: ${formData.windowsCount || "Nie podano"}
        Lokalizacja: ${formData.location || "Nie podano"}
        Rodzaj folii: ${formData.foilType || "Nie wybrano"}
        Wiadomość:
        ${formData.message || "Brak"}
      `;
      const attachmentsBase64 = await Promise.all(
        formData.attachments.map(async (file) => {
          const base64 = await convertToBase64(file);
          return {
            filename: file.name,
            content_type: file.type,
            base64: base64.split(",")[1],
          };
        })
      );
      const response = await fetch(
        "https://jc5vg6se5e.execute-api.eu-north-1.amazonaws.com/dev/send-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "_just-a'test\"key,or>is<it?",
          },
          body: JSON.stringify({
            email: "dragon.folie2025@gmail.com",
            subject: `Zapytanie od ${formData.name}`,
            message: emailBody,
            attachments: attachmentsBase64,
            metadata: {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
            },
          }),
        }
      );
      if (response.ok) {
        alert("Wiadomość wysłana pomyślnie!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          dimensions: "",
          windowsCount: "",
          location: "",
          foilType: "",
          message: "",
          attachments: [],
          privacyPolicy: false,
        });
        setPreviews([]);
        setLastSubmissionTime(now);
      }
    } catch (error) {
      alert(
        "Wystąpił błąd: " +
          (error instanceof Error ? error.message : String(error))
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[100px] flex flex-col items-center justify-center overflow-hidden"
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue focus:border-blue bg-light cursor-pointer"
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
                  Zdjęcia okien lub pliki PDF (max 5 plików, do 5MB każdy)
                </label>

                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.add(
                      "border-blue-500",
                      "bg-blue-50"
                    );
                  }}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.remove(
                      "border-blue-500",
                      "bg-blue-50"
                    );
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.remove(
                      "border-blue-500",
                      "bg-blue-50"
                    );
                    if (e.dataTransfer.files.length > 0) {
                      handleChange({
                        target: {
                          files: e.dataTransfer.files,
                          name: "attachments",
                          type: "file",
                        },
                      } as React.ChangeEvent<HTMLInputElement>);
                    }
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <UploadCloud className="w-10 h-10 text-gray-400" />
                    <p className="text-sm text-gray-600">
                      Dodaj pliki lub kliknij, aby wybrać
                    </p>
                    <p className="text-xs text-gray-500">
                      Obsługiwane formaty: JPG, PNG, WEBP, GIF, PDF (max 5MB)
                    </p>
                  </div>
                </div>

                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  multiple
                  accept="image/jpeg,image/png,image/webp,image/gif,application/pdf"
                  className="hidden"
                  onChange={handleChange}
                  ref={fileInputRef}
                />
              </div>
            </motion.div>

            {previews.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">
                  Wybrane pliki ({previews.length}/5):
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square overflow-hidden rounded-lg border border-gray-200 flex items-center justify-center">
                        {preview === "pdf" ? (
                          <div className="flex flex-col items-center justify-center h-full w-full bg-gray-100 p-2">
                            <FileText className="w-8 h-8 text-gray-400 sm:w-10 sm:h-10" />
                            <span className="text-xs text-gray-600 truncate px-2 text-center">
                              {formData.attachments[index]?.name || "Plik PDF"}
                            </span>
                          </div>
                        ) : (
                          <img
                            src={preview}
                            alt={`Podgląd ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-red-600 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                        aria-label="Usuń plik"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                  className="w-4 h-4 text-blue border rounded focus:ring-blue cursor-pointer"
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
              className={`w-full bg-blue text-white py-3 px-6 rounded-lg hover:bg-blue-dark transition-colors font-medium text-sm md:text-lg ${
                isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isSubmitting ? (
                <div className="inset-0 flex items-center justify-center bg-green z-50">
                  <div className="animate-spin rounded-full h-7 w-7 border-t-4 border-blue-light"></div>
                </div>
              ) : (
                "Wyślij wiadomość"
              )}
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
            <div className="flex flex-col lg:flex-row gap-6">
              <motion.div
                custom={1}
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center hover:scale-110"
              >
                <Phone className="text-blue mr-2" />
                <a href="tel:+48665333625" className="hover:text-blue">
                  +48&nbsp;665&nbsp;333&nbsp;625
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
                <Phone className="text-blue mr-2" />
                <a href="tel:+48665333771" className="hover:text-blue">
                  +48&nbsp;665&nbsp;333&nbsp;771
                </a>
              </motion.div>
            </div>

            <motion.div
              custom={3}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center hover:scale-110"
            >
              <Mail className="text-blue mr-2" />
              <a
                href="mailto:dragon.folie2025@gmail.com"
                className="hover:text-blue"
              >
                dragon.folie2025@gmail.com
              </a>
            </motion.div>

            <motion.div
              custom={4}
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
              custom={5}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="https://www.instagram.com/dragon_folie?igsh=MWJrdG41eTFpanEwbg%3D%3D"
              target="_blank"
              className="text-blue hover:text-blue hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-10 w-10" />
            </motion.a>
            <motion.a
              custom={6}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="https://www.facebook.com/share/19B4vpMnE9/?mibextid=wwXIfr"
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
