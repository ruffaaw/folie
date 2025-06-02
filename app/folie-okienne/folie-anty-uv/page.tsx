"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { negative, places } from "@/data/folie-anty-uv";
import { FlaskConical, Layers, TriangleAlert } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center overflow-hidden">
      <Header />
      <Title title="Ochrona przed UV" />
      <h1 className="mt-7 text-center">
        FOLIE ANTY <span className="text-blue">ULTRAFIOLETOWE</span>
      </h1>
      <h2 className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        Ten rodzaj folii powoduje zatrzymanie szkodliwego promienia
        ultrafioletowego (UV) ze światła dziennego nawet w&nbsp;99% bez wpływu
        na inne parametry promieniowania słonecznego. Dzięki temu, swoje
        zastosowanie znajdują wszędzie tam, gdzie chcemy ochronić cenne
        przedmioty zabezpieczając je przed żółknięciem i&nbsp;płowieniem czy
        wydłużyć atrakcyjność witryn sklepowych.
      </h2>
      <div className="w-full relative mt-6 md:mt-8 aspect-video">
        <Image
          src="/fasada.webp"
          alt="Zdjęcie Folii Anty UV"
          fill
          className="object-cover rounded-lg px-4 sm:px-8 md:px-16 lg:px-32"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start p-7 mt-6 md:mt-8 gap-5 w-full bg-blue-light rounded-3xl">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 1.5V5.16667M23.5 1.5V5.16667M12.5 30.8333V34.5M23.5 30.8333V34.5M5.16667 12.5H1.5M5.16667 23.5H1.5M34.5 12.5H30.8333M34.5 23.5H30.8333M8.83333 30.8333H27.1667C28.1391 30.8333 29.0718 30.447 29.7594 29.7594C30.447 29.0718 30.8333 28.1391 30.8333 27.1667V8.83333C30.8333 7.86087 30.447 6.92824 29.7594 6.24061C29.0718 5.55298 28.1391 5.16667 27.1667 5.16667H8.83333C7.86087 5.16667 6.92824 5.55298 6.24061 6.24061C5.55298 6.92824 5.16667 7.86087 5.16667 8.83333V27.1667C5.16667 28.1391 5.55298 29.0718 6.24061 29.7594C6.92824 30.447 7.86087 30.8333 8.83333 30.8333ZM12.5 12.5H23.5V23.5H12.5V12.5Z"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3>Jak działa promieniowanie UV przez szyby?</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 card w-full">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl w-full">
              <h4 className="font-semibold">Przepuszczalność promieni</h4>
              <p className="text-justify">
                Standardowe szyby przepuszczają znaczną część promieni UV.
                Dopiero specjalne szkło laminowane lub z&nbsp;filtrem UV
                zapewnia lepszą ochronę, ale jego wymiana jest kosztowna.
              </p>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl w-full">
              <h4 className="font-semibold">Rozwiązanie: folie anty-UV</h4>
              <p className="text-justify">
                Nasze folie blokują UV-A i&nbsp;UV-B do 410 nm, stanowiąc
                ekonomiczną alternatywę dla wymiany szyb. Można je dopasować do
                konkretnych potrzeb, zachowując przy tym przejrzystość szkła.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-gray rounded-3xl mt-6 md:mt-8 text-light">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <FlaskConical size={44} />
            <h3>Negatywny wpływ UV na zdrowie</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
            {negative.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5  bg-white rounded-3xl card"
              >
                <div className="text-white p-3 bg-gray rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  <TriangleAlert className="w-6 h-6 sm:w-7 sm:h-7" />
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
            <Layers size={44} />
            <h3>Gdzie najczęściej stosujemy folie anty-UV?</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 w-full">
            {places.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
              >
                <div className="text-blue p-3 bg-blue-lighter rounded-lg flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 sm:w-7 sm:h-7",
                  })}
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
        <h3 className="text-xl md:text-2xl">Cena folii anty-UV z montażem</h3>
        <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-4 md:py-5 w-full max-w-2xl border-y border-t-dark mt-4">
          <div className="flex flex-row items-baseline gap-2">
            <h3 className="text-2xl md:text-3xl">120-160</h3>
            <p className="text-xl md:text-2xl">zł/m²</p>
          </div>
          <p className="text-center text-lg md:text-xl mt-2">
            Cena obejmuje folię anty-UV oraz profesjonalny montaż
          </p>
        </div>
      </div>
      <BottomContact title="Chcesz chronić się przed UV?" className="mt-7" />
      <Footer />
    </div>
  );
}
