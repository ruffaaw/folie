"use client";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JumpingText from "@/components/JumpingText";
import Title from "@/components/Title";
import { places } from "@/data/folie-mrozone";
import { LayoutGrid, Scissors } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="PRYWATNOŚĆ I DEKORACJA" />
      <div className="flex flex-row items-start justify-start">
        <JumpingText
          text="FOLIE "
          mode="character"
          className="mt-7 text-[4rem] font-bold"
        />
        <JumpingText
          text="MROŻONE"
          mode="character"
          className="mt-7 text-[4rem] font-bold text-blue"
        />
      </div>
      <h2 className="mt-7 text-center px-32">
        Folie mrożone, nazywane inaczej mrożonką lub szybami mlecznymi to
        specjalny materiał dający efekt mrożonej szyby podobny do odbicia
        światła od zmrożonej powierzchni z maleńkimi kryształkami lodu. Mrożona
        folia stosowana jest, aby przesłonić widok do środka pomieszczenia. Może
        stanowić również element dekoracyjny lub reklamowy, ponieważ idealnie
        nadaje się do ploterowania, wycinania wzorów oraz do zadruku.
      </h2>
      <BeforeAfterSlider
        before="/przezroczysta_zewnatrz.webp"
        altBefore="Folia przeźroczysta na oknie zewnątrz"
        after="/folia_mrozona_zewnatrz.webp"
        altAfter="Folia Mrożona na oknie zewnątrz"
        sliderPos={40}
      />
      <div className="px-32">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Scissors size={44} />
            <h3>Dlaczego warto wybrać folie mrożone?</h3>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Uniwersalne zastosowanie</h4>
              <p className="text-justify">
                Możliwość zastosowania zarówno jako element dekoracyjny, jak
                i praktyczne rozwiązanie zapewniające prywatność. Idealne do
                wycinania wzorów i nadruków reklamowych.
              </p>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Łatwy montaż i demontaż</h4>
              <p className="text-justify">
                Folie nie uszkadzają szyb i można je w każdej chwili usunąć bez
                śladu. Prosty montaż bez konieczności wymiany szyb.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32">
        <div className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <LayoutGrid size={44} />
            <h3>Gdzie najczęściej stosujemy folie anty-UV?</h3>
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
        <h3>Cena folii mrożonych z montażem</h3>
        <div className="flex flex-col items-center justify-center px-12 py-5 w-[40vw] border-y border-t-dark ">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>120-160 </h3>
            <p style={{ fontSize: "1.5rem" }}>zł/m²</p>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Cena obejmuje folię mrożoną oraz profesjonalny montaż
          </p>
        </div>
      </div>
      <BottomContact title="Chcesz zamówić folie mrożone?" className="mt-7" />
      <Footer />
    </div>
  );
}
