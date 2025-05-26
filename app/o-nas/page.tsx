"use client";
import Header from "@/components/Header";
import { Check, Heart, Shield, Sun, Users } from "lucide-react";
import Image from "next/image";
import JumpingText from "@/components/JumpingText";
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
    <div className="mt-[104px]">
      <Header />
      <div className="flex flex-row items-start justify-start mt-8 px-32">
        <JumpingText
          text="Dragon "
          mode="character"
          className="mt-24 text-[4rem] font-bold text-blue"
        />
        <JumpingText
          text="Folie"
          mode="character"
          className="mt-24 text-[4rem] font-bold"
        />
      </div>
      <div className="flex flex-row items-start justify-between px-32">
        <div className="w-2/3 max-w-[900px] text-justify">
          <h2>
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
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={300}
          height={300}
          className="w-1/3"
        />
      </div>

      <div className="px-32 flex justify-center items-center flex-col bg-blue-lighter mt-10 py-16">
        <h3 className="mb-16">Dlaczego warto nam zaufać?</h3>
        <div className="grid grid-cols-2 gap-5">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex gap-5 p-7 bg-white rounded-3xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]"
            >
              <div className="text-blue p-4 bg-blue-lighter rounded-full flex items-center justify-center w-16 h-16 shrink-0">
                <div className="w-8 h-8 flex items-center justify-center">
                  {React.cloneElement(point.icon, {
                    className: "w-full h-full",
                  })}
                </div>
              </div>
              <div>
                <h4 className="font-semibold">{point.head}</h4>
                <p className="text-justify">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
