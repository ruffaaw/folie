"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JumpingText from "@/components/JumpingText";
import Title from "@/components/Title";
import { features, places } from "@/data/folie-antywlamaniowe";
import {
  AlertOctagon,
  Box,
  Building,
  Check,
  FlaskConical,
  Lock,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="BEZPIECZEŃSTWO" />
      <div className="flex flex-row items-start justify-start">
        <JumpingText
          text="FOLIE "
          mode="character"
          className="mt-7 text-[4rem] font-bold"
        />
        <JumpingText
          text="ANTYWŁAMANIOWE"
          mode="character"
          className="mt-7 text-[4rem] font-bold text-blue"
        />
      </div>
      <h2 className="mt-7 text-center px-32">
        Przezroczysta folia poliestrowa o wysokiej wytrzymałości, która zamienia
        zwykłe szyby w skuteczną barierę antywłamaniową. Niewidoczna ochrona,
        która nie wpływa na estetykę okien, zapewniając bezpieczeństwo i komfort
        psychiczny.
      </h2>
      <div className="w-full relative mt-7" style={{ aspectRatio: "390/180" }}>
        <Image
          src="/fasada.webp"
          alt="Grafika folii antywłamaniowych"
          fill
          className="object-cover w-full h-full px-32"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
        />
      </div>

      <div className="px-32">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <ShieldCheck size={44} />
            <h3>Dlaczego warto wybrać folie antywłamaniowe?</h3>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Niewidoczna ochrona</h4>
              <p className="text-justify">
                W&nbsp;przeciwieństwie do krat czy rolet, folia jest całkowicie
                przezroczysta i&nbsp;nie zmienia wyglądu okna. Stanowi element
                zaskoczenia dla potencjalnych włamywaczy.
              </p>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Wielofunkcyjność</h4>
              <p className="text-justify">
                Oprócz ochrony przed włamaniem, folia zabezpiecza przed falą
                uderzeniową wybuchu, chroniąc przed odłamkami szkła.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 w-full">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-gray rounded-3xl mt-7 text-light">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <FlaskConical size={44} />
            <h3>Negatywny wpływ UV na zdrowie</h3>
          </div>
          <div className="grid grid-cols-2 gap-5 w-full">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5 p-7 bg-white rounded-3xl">
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
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <AlertOctagon size={44} className="text-light" />
            <h3 style={{ color: "white" }}>Jak działa ochrona?</h3>
          </div>
          <div className="flex flex-row gap-5 w-full">
            <div className="flex flex-col p-7 gap-3 bg-blue-light rounded-3xl w-full">
              <div className="flex flex-row items-center gap-2">
                <Lock size={35} />
                <h4 className="font-semibold">Mechanizm zabezpieczenia</h4>
              </div>
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Zapobiega natychmiastowemu rozkruszeniu szyby
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Wymaga użycia specjalistycznych narzędzi
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Znacznie wydłuża czas potrzebny na sforsowanie
                    zabezpieczenia
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-blue-light rounded-3xl w-full">
              <div className="flex flex-row items-center gap-2">
                <Box size={35} />
                <h4 className="font-semibold">Dodatkowe korzyści</h4>
              </div>{" "}
              <ul className="space-y-3 text-gray-700 ">
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Ochrona przed falą uderzeniową wybuchu
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Zabezpieczenie przed przypadkowym stłuczeniem szkła
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={25} />
                  <p style={{ color: "#333333" }}>
                    Zmniejszenie kosztów ubezpieczenia nieruchomości
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
                className="flex gap-5 p-7 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)]"
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
        <h3>Cena folii antywłamaniowych z&nbsp;montażem</h3>
        <div className="flex flex-col items-center justify-center px-12 py-5 w-[80vw] border-y border-t-dark ">
          <div className="flex flex-row items-center justify-center gap-16">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center">Folia antywłamaniowa klasy P1A</h3>
              <div className="flex flex-row items-baseline p-2.5 gap-2.5">
                <h3>160-180 </h3>
                <p style={{ fontSize: "1.5rem" }}>zł/m²</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center">Folia antywłamaniowa klasy P2A</h3>
              <div className="flex flex-row items-baseline p-2.5 gap-2.5">
                <h3>190-240 </h3>
                <p style={{ fontSize: "1.5rem" }}>zł/m²</p>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Cena zależy od grubości folii i&nbsp;klasy zabezpieczenia
          </p>
        </div>
      </div>
      <BottomContact
        title="Chcesz zabezpieczyć swoją nieruchomość?"
        className="mt-7"
      />
      <Footer />
    </div>
  );
}
