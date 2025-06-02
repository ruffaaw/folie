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
    <div className="mt-[100px] flex flex-col items-center justify-center ">
      <Header />
      <h1 className="mt-4 md:mt-7">
        <span className="text-dark">KONTAKT</span>
      </h1>
      <h2 className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        Skontaktuj się z nami, a pomożemy dobrać idealne rozwiązanie dla Twoich
        potrzeb.
      </h2>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col lg:flex-col gap-8 mt-4 md:mt-7 mb-7">
        <div className="w-full bg-blue-lighter p-6 md:p-8 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-row gap-3 items-center w-full">
                <User className="w-8 h-8 mt-8" />
                <div className="w-full">
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
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center w-full">
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
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center w-full">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-row gap-3 items-center w-full">
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
              </div>
              <div className="flex flex-row gap-3 items-center w-full">
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
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center w-full">
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
            </div>
            <div className="flex flex-row gap-3 items-center w-full">
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
            </div>
            <div className="flex flex-row gap-3 items-center w-full">
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
            </div>
            <div className="flex flex-row gap-3 items-start w-full">
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
            </div>

            <div className="flex items-center">
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
            </div>

            <button
              type="submit"
              className="w-full bg-blue text-white py-3 px-6 rounded-lg hover:bg-blue-dark transition-colors font-medium text-sm md:text-lg"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
        <div className="border-t border-dark pt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Dragon Folie - Karol Jaskorski
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <div className="flex items-center hover:scale-110">
              <Phone className="text-blue mr-2" />
              <a href="tel:607935863" className="hover:text-blue">
                607 935 863
              </a>
            </div>

            <div className="flex items-center hover:scale-110">
              <Mail className="text-blue mr-2" />
              <a
                href="mailto:dragon.folie@gmail.com"
                className="hover:text-blue"
              >
                dragon.folie@gmail.com
              </a>
            </div>

            <div className="flex items-center">
              <MapPin className="text-blue mr-2" />
              <span>Małopolskie/Śląskie</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-blue hover:text-blue hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-10 w-10" />
            </a>
            <a
              href="#"
              className="text-blue hover:text-blue hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
