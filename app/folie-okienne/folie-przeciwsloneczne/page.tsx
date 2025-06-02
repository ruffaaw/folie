"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { features, places } from "@/data/folie-przeciwsloneczne";
import {
  Building,
  Check,
  Home,
  LayoutList,
  Shield,
  Sun,
  Thermometer,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center overflow-hidden">
      <Header />
      <Title title="KOMFORT TERMICZNY" />
      <h1 className="mt-7 text-center">
        FOLIE <span className="text-blue">PRZECIWSŁONECZNE</span>
      </h1>
      <h2 className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        Folia przeciwsłoneczna redukuje wpływ promieni UV oraz zmniejsza
        nagrzewanie się pomieszczeń, zapewniając komfort nawet
        w&nbsp;najgorętsze dni. Znajduje zastosowanie wszędzie tam, gdzie
        potrzebna jest skuteczna ochrona przed słońcem i&nbsp;redukcja kosztów
        klimatyzacji.
      </h2>
      <div className="w-full lg:w-8/12 relative mt-6 md:mt-8 aspect-[10/7]">
        <Image
          src="/przezroczysta_zewnatrz.webp"
          alt="Zdjęcie Folii Przeźroczystej"
          fill
          className="object-cover w-full h-full md:px-16 lg:px-32"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
        />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue-light rounded-3xl mt-6 md:mt-8">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Thermometer className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Korzyści z&nbsp;folii przeciwsłonecznych</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 card w-full">
            <div className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full">
              <h4 className="font-semibold">Oszczędności energii</h4>
              <p className="text-justify">
                Redukcja kosztów klimatyzacji nawet o&nbsp;30-50%. W&nbsp;zimie
                folia pomaga zatrzymać ciepło wewnątrz, obniżając koszty
                ogrzewania.
              </p>
            </div>
            <div className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full">
              <h4 className="font-semibold">Komfort termiczny</h4>
              <p className="text-justify">
                Obniżenie temperatury wewnątrz pomieszczeń nawet o&nbsp;10°C.
                Eliminacja &quot;efektu sauny&quot; w&nbsp;pomieszczeniach
                z&nbsp;dużymi przeszkleniami.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-gray rounded-3xl mt-6 md:mt-8 text-light">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Shield className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Kluczowe właściwości</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl card"
              >
                <div className="text-white p-3 bg-gray rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7">
                    {React.cloneElement(item.icon, {
                      className: "w-full h-full",
                    })}
                  </div>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue rounded-3xl mt-6 md:mt-8 card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <LayoutList className="w-8 h-8 md:w-10 md:h-10 text-light" />
            <h3 style={{ color: "white" }}>Rodzaje folii przeciwsłonecznych</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="flex flex-col p-4 sm:p-5 gap-3 bg-blue-light rounded-3xl w-full">
              <div className="flex flex-row items-center gap-2">
                <Sun className="w-6 h-6 sm:w-8 sm:h-8" />
                <h4 className="font-semibold">Folie zewnętrzne</h4>
              </div>
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Najwyższa skuteczność (do 86% redukcji ciepła)
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Montaż na każdym rodzaju szkła
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Wymagają odpowiednich warunków atmosferycznych
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-4 sm:p-5 gap-3 bg-blue-light rounded-3xl w-full">
              <div className="flex flex-row items-center gap-2">
                <Home className="w-6 h-6 sm:w-8 sm:h-8" />
                <h4 className="font-semibold">Folie wewnętrzne</h4>
              </div>{" "}
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Montaż możliwy przez cały rok
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Ograniczenia w stosowaniu na niektórych oknach
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p style={{ color: "#333333" }}>
                    Mniejsza skuteczność niż folii zewnętrznych
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Building size={44} />
            <h3> Gdzie najczęściej stosujemy folie przeciwsłoneczne?</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 w-full">
            {places.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
              >
                <div className="text-blue p-4 bg-blue-lighter rounded-xl flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {React.cloneElement(item.icon, {
                      className: "w-6 h-6 sm:w-7 sm:h-7",
                    })}
                  </div>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8">
        <h3 className="text-center">
          Cena folii przeciwsłonecznych z montażem
        </h3>
        <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-4 md:py-5 w-full max-w-2xl border-y border-t-dark mt-4">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>230-280 </h3>
            <p>zł/m²</p>
          </div>
          <p>Cena obejmuje folię oraz profesjonalny montaż</p>
        </div>
      </div>
      <BottomContact
        title="Chcesz obniżyć temperaturę w pomieszczeniach?"
        className="mt-7"
      />
      <Footer />
    </div>
  );
}
