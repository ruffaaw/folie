"use client";
import Header from "@/components/Header";
import Title from "@/components/Title";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import { Layers, Shield, Thermometer } from "lucide-react";
import { features, places } from "@/data/swietliki-z-poliweglanu";
export default function Page() {
  return (
    <div className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center overflow-hidden">
      <Header />
      <Title title="OCHRONA TERMICZNA" />
      <h1 className="mt-7 text-center">
        FOLIE NA <span className="text-blue">ŚWIETLIKI POLIWĘGLANOWE</span>
      </h1>
      <h2 className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        Specjalistyczne folie przeciwsłoneczne na płyty poliwęglanowe, które
        redukują nagrzewanie się hal produkcyjnych nawet o&nbsp;3-5°C. Nasze
        rozwiązanie poprawia komfort pracy, zachowując przy tym właściwości
        poliwęglanu.
      </h2>
      <div className="w-full relative mt-6 md:mt-8 aspect-[3/2] md:aspect-[4/2]">
        <Image
          src="/półprzeźroczysta-błyszcząca-rulon.webp"
          alt="Zjęcie rulonu folii półprzeźroczystej"
          fill
          className="object-cover w-full h-full md:px-16 lg:px-32"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
        />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue-light rounded-3xl mt-6 md:mt-8 card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Thermometer size={44} />
            <h3>Dlaczego warto wybrać nasze folie?</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 card w-full">
            <div className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full">
              <h4 className="font-semibold">Specjalna konstrukcja</h4>
              <p className="text-justify">
                Mikrospory w folii zapewniają rozszerzalność cieplną identyczną
                jak płyta poliwęglanowa, pozwalając na swobodne ulatnianie się
                gazów i idealne dopasowanie do powierzchni.
              </p>
            </div>
            <div className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full">
              <h4 className="font-semibold">Kompleksowa ochrona</h4>
              <p className="text-justify">
                Zapobiega żółknięciu poliwęglanu dzięki cząsteczkom odbijającym
                UV. Dostępne w wersji białej i srebrnej dla różnych potrzeb
                estetycznych.
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
                <div className="text-light p-4 bg-gray rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 items-center justify-center">
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
        <div className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-6 md:mt-8">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Layers className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Gdzie najczęściej stosujemy folie anty-UV?</h3>
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
        <h3 className="text-center">Cena folii na świetliki z montażem</h3>
        <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-4 md:py-5 w-full max-w-3xl border-y border-t-dark mt-4">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5 text-center">
            <h3>90-120 </h3>
            <p>zł/m²</p>
          </div>
          <p className="text-center">
            Cena obejmuje folię oraz profesjonalny montaż na wysokości
          </p>
        </div>
      </div>
      <BottomContact
        title="Chcesz obniżyć temperaturę w hali?"
        className="mt-7"
      />
      <Footer />
    </div>
  );
}
