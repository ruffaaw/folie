"use client";
import Header from "@/components/Header";
import JumpingText from "@/components/JumpingText";
import Title from "@/components/Title";
import { negative } from "@/data/folie-anty-uv";
import { FlaskConical, TriangleAlert } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center px-32">
      <Header />
      <Title title="Ochrona przed UV" />
      <div className="flex flex-row items-start justify-start">
        <JumpingText
          text="FOLIE ANTY "
          mode="character"
          className="mt-7 text-[4rem] font-bold"
        />
        <JumpingText
          text="ULTRAFIOLETOWE"
          mode="character"
          className="mt-7 text-[4rem] font-bold text-blue"
        />
      </div>
      <h2 className="mt-7 text-center">
        Ten rodzaj folii powoduje zatrzymanie szkodliwego promienia
        ultrafioletowego (UV) ze światła dziennego nawet w&nbsp;99% bez wpływu
        na inne parametry promieniowania słonecznego. Dzięki temu, swoje
        zastosowanie znajdują wszędzie tam, gdzie chcemy ochronić cenne
        przedmioty zabezpieczając je przed żółknięciem i&nbsp;płowieniem czy
        wydłużyć atrakcyjność witryn sklepowych.
      </h2>
      <div className="w-full relative mt-7" style={{ aspectRatio: "390/200" }}>
        <Image
          src="/fasada.webp"
          alt="Zdjęcie Folii Anty UV"
          fill
          className="object-cover w-full h-full rounded-[20px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7">
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3>Jak działa promieniowanie UV przez szyby?</h3>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
            <h4 className="font-semibold">Przepuszczalność promieni</h4>
            <p className="text-justify">
              Standardowe szyby przepuszczają znaczną część promieni UV. Dopiero
              specjalne szkło laminowane lub z&nbsp;filtrem UV zapewnia lepszą
              ochronę, ale jego wymiana jest kosztowna.
            </p>
          </div>
          <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
            <h4 className="font-semibold">Rozwiązanie: folie anty-UV</h4>
            <p className="text-justify">
              Nasze folie blokują UV-A i&nbsp;UV-B do 410 nm, stanowiąc
              ekonomiczną alternatywę dla wymiany szyb. Można je dopasować do
              konkretnych potrzeb, zachowując przy tym przejrzystość szkła.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-gray rounded-3xl mt-7 text-light">
        <div className="flex flex-row items-center justify-start gap-2.5 w-full">
          <FlaskConical size={44} />
          <h3>Negatywny wpływ UV na zdrowie</h3>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full">
          {negative.map((item, index) => (
            <div key={index} className="flex gap-5 p-7 bg-white rounded-3xl">
              <div className="text-light p-4 bg-gray rounded-full flex items-center justify-center w-16 h-16 shrink-0">
                <div className="w-8 h-8 flex items-center justify-center">
                  {React.cloneElement(<TriangleAlert />, {
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
  );
}
