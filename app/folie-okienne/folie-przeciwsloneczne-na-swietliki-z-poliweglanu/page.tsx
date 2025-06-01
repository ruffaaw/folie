"use client";
import Header from "@/components/Header";
import Title from "@/components/Title";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import JumpingText from "@/components/JumpingText";
import Image from "next/image";
import React from "react";
import { Layers, Shield, Thermometer } from "lucide-react";
import { features, places } from "@/data/swietliki-z-poliweglanu";
export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="OCHRONA TERMICZNA" />
      <div className="flex flex-row items-start justify-start">
        <JumpingText
          text="FOLIE NA "
          mode="character"
          className="mt-7 text-[4rem] font-bold"
        />
        <JumpingText
          text="ŚWIETLIKI POLIWĘGLANOWE"
          mode="character"
          className="mt-7 text-[4rem] font-bold text-blue"
        />
      </div>
      <h2 className="mt-7 text-center px-32">
        Specjalistyczne folie przeciwsłoneczne na płyty poliwęglanowe, które
        redukują nagrzewanie się hal produkcyjnych nawet o&nbsp;3-5°C. Nasze
        rozwiązanie poprawia komfort pracy, zachowując przy tym właściwości
        poliwęglanu.
      </h2>
      <div className="w-1/2 relative mt-7" style={{ aspectRatio: "390/200" }}>
        <Image
          src="/półprzeźroczysta-błyszcząca-rulon.webp"
          alt="Zjęcie rulonu folii półprzeźroczystej"
          fill
          className="object-cover w-1/2 h-1/2 px-32"
          sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 25vw"
          unoptimized
        />
      </div>
      <div className="px-32">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7 card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Thermometer size={44} />
            <h3>Dlaczego warto wybrać nasze folie?</h3>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Specjalna konstrukcja</h4>
              <p className="text-justify">
                Mikrospory w folii zapewniają rozszerzalność cieplną identyczną
                jak płyta poliwęglanowa, pozwalając na swobodne ulatnianie się
                gazów i idealne dopasowanie do powierzchni.
              </p>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
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
      <div className="px-32">
        <div className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Layers size={44} />
            <h3>Gdzie najczęściej stosujemy folie anty-UV?</h3>
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
        <h3>Cena folii na świetliki z montażem</h3>
        <div className="flex flex-col items-center justify-center px-12 py-5 w-[40vw] border-y border-t-dark ">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>90-120 </h3>
            <p style={{ fontSize: "1.5rem" }}>zł/m²</p>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
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
