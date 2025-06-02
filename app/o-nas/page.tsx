"use client";
import Header from "@/components/Header";
import { Check, Heart, Shield, Sun, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";

export default function Page() {
  const points = [
    {
      icon: <Shield />,
      head: "Najwyższa jakość",
      description:
        "Używamy tylko sprawdzonych materiałów, które zapewniają długotrwały efekt.",
    },
    {
      icon: <Users />,
      head: "Indywidualne podejście",
      description: `Do każdej realizacji podchodzimy w${"\u00A0"}sposób indywidualny, aby najlepiej dostosować rodzaj folii do oczekiwań i${"\u00A0"}potrzeb klienta. Naszym celem jest zwiększenie komfortu pracy.`,
    },
    {
      icon: <Heart />,
      head: "Zadowoleni klienci",
      description: `Mimo krótkiego stażu firmy możemy pochwalić się wieloma udanymi realizacjami i${"\u00A0"}pozytywnym odzewem od strony naszych klientów, a${"\u00A0"}także brakiem zgłoszeń reklamacji wykonanych przez nas usług.`,
    },
    {
      icon: <Sun />,
      head: "Miła atmosfera",
      description: `Nasi monterzy przeprowadzają prace w ciszy i${"\u00A0"}czystości. Spełniają przy tym Państwa oczekiwania w${"\u00A0"}zakresie kultury osobistej jednocześnie zachowując profesjonalne podejście`,
    },
  ];
  return (
    <div className="mt-[80px] md:mt-[100px] flex flex-col">
      <Header />
      <h1 className="mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-16 lg:px-32">
        Dragon <span className="text-blue">Folie</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="w-full lg:w-2/3 max-w-full lg:max-w-[900px]">
          <h2 className="text-justify">
            Jako firma dopiero raczkujemy, jednak w&nbsp;montażu folii możemy
            pochwalić się wieloletnim doświadczeniem. Nasi monterzy to
            wykwalifikowani specjaliści, którzy:
            <div className="flex flex-row items-center gap-2 mt-4">
              <Check />
              <h4 style={{ color: "#6b7280", fontWeight: "normal" }}>
                Dobiorą idealną folię do Twoich potrzeb
              </h4>
            </div>
            <div className="flex flex-row items-center gap-2 mt-4">
              <Check />
              <h4 style={{ color: "#6b7280", fontWeight: "normal" }}>
                Wyjaśnią wszystkie techniczne szczegóły
              </h4>
            </div>
            <div className="flex flex-row items-center gap-2 mt-4">
              <Check />
              <h4 style={{ color: "#6b7280", fontWeight: "normal" }}>
                Zadbają o&nbsp;perfekcyjny montaż
              </h4>
            </div>
          </h2>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <Image
            src="/logo.jpg"
            alt="Logo Dragon Folie"
            width={300}
            height={300}
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] rounded-lg shadow-md"
            priority
          />
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 flex justify-center items-center flex-col bg-blue-lighter mt-8 md:mt-10 py-8 md:py-16">
        <h3 className="mb-8 md:mb-16 text-2xl md:text-3xl font-bold text-center">
          Dlaczego warto nam zaufać?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 p-5 md:p-7 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue p-3 sm:p-4 bg-blue-lighter rounded-full flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                {React.cloneElement(point.icon, {
                  className: "w-6 h-6 sm:w-8 sm:h-8",
                })}
              </div>
              <div>
                <h4 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">
                  {point.head}
                </h4>
                <p className="text-justify text-base md:text-lg text-gray-600">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
