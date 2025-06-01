"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JumpingText from "@/components/JumpingText";
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
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="KOMFORT TERMICZNY" />
      <div className="flex flex-row items-start justify-start">
        <JumpingText
          text="FOLIE "
          mode="character"
          className="mt-7 text-[4rem] font-bold"
        />
        <JumpingText
          text="PRZECIWSŁONECZNE"
          mode="character"
          className="mt-7 text-[4rem] font-bold text-blue"
        />
      </div>
      <h2 className="mt-7 text-center px-32">
        Folia przeciwsłoneczna redukuje wpływ promieni UV oraz zmniejsza
        nagrzewanie się pomieszczeń, zapewniając komfort nawet
        w&nbsp;najgorętsze dni. Znajduje zastosowanie wszędzie tam, gdzie
        potrzebna jest skuteczna ochrona przed słońcem i&nbsp;redukcja kosztów
        klimatyzacji.
      </h2>
      <div className="w-full relative mt-7" style={{ aspectRatio: "390/200" }}>
        <Image
          src="/przezroczysta_zewnatrz.webp"
          alt="Zdjęcie Folii Przeźroczystej"
          fill
          className="object-cover w-full h-full px-32"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
        />
      </div>
      <div className="px-32">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Thermometer size={44} />
            <h3>Korzyści z&nbsp;folii przeciwsłonecznych</h3>
          </div>
          <div className="flex flex-row gap-5 card">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Oszczędności energii</h4>
              <p className="text-justify">
                Redukcja kosztów klimatyzacji nawet o&nbsp;30-50%. W&nbsp;zimie
                folia pomaga zatrzymać ciepło wewnątrz, obniżając koszty
                ogrzewania.
              </p>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Komfort termiczny</h4>
              <p className="text-justify">
                Obniżenie temperatury wewnątrz pomieszczeń nawet o&nbsp;10°C.
                Eliminacja "efektu sauny" w&nbsp;pomieszczeniach z&nbsp;dużymi
                przeszkleniami.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 w-full">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-gray rounded-3xl mt-7 text-light">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Shield size={44} />
            <h3>Kluczowe właściwości</h3>
          </div>
          <div className="grid grid-cols-2 gap-5 w-full">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 p-7 bg-white rounded-3xl card"
              >
                <div className="text-light p-4 bg-gray rounded-full flex items-center justify-center w-16 h-16 shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center">
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
      <div className="px-32 w-full">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue rounded-3xl mt-7 card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <LayoutList size={44} className="text-light" />
            <h3 style={{ color: "white" }}>Rodzaje folii przeciwsłonecznych</h3>
          </div>
          <div className="flex flex-row gap-5 w-full">
            <div className="flex flex-col p-7 gap-3 bg-blue-light rounded-3xl w-full">
              <div className="flex flex-row items-center gap-2">
                <Sun size={35} />
                <h4 className="font-semibold">Folie zewnętrzne</h4>
              </div>
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Najwyższa skuteczność (do 86% redukcji ciepła)
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Montaż na każdym rodzaju szkła
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Wymagają odpowiednich warunków atmosferycznych
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-blue-light rounded-3xl w-full">
              <div className="flex flex-row items-center gap-2">
                <Home size={35} />
                <h4 className="font-semibold">Folie wewnętrzne</h4>
              </div>{" "}
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Montaż możliwy przez cały rok
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Ograniczenia w stosowaniu na niektórych oknach
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Mniejsza skuteczność niż folii zewnętrznych
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32">
        <div className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Building size={44} />
            <h3> Gdzie najczęściej stosujemy folie przeciwsłoneczne?</h3>
          </div>
          <div className="grid grid-cols-3 gap-5 w-full">
            {places.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 p-7 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
              >
                <div className="text-blue p-4 bg-blue-lighter rounded-xl flex items-center justify-center w-16 h-16 shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center">
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
      <div className="flex flex-col items-center justify-center mt-7">
        <h3>Cena folii przeciwsłonecznych z montażem</h3>
        <div className="flex flex-col items-center justify-center px-12 py-5 w-[50vw] border-y border-t-dark ">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>230-280 </h3>
            <p style={{ fontSize: "1.5rem" }}>zł/m²</p>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Cena obejmuje folię oraz profesjonalny montaż
          </p>
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
