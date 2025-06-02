"use client";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { places } from "@/data/folie-mrozone";
import { LayoutGrid, Scissors } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="PRYWATNOŚĆ I DEKORACJA" />
      <h1 className="mt-7 text-center">
        FOLIE <span className="text-blue">MROŻONE</span>
      </h1>
      <h2 className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        Folie mrożone, nazywane inaczej mrożonką lub szybami mlecznymi to
        specjalny materiał dający efekt mrożonej szyby podobny do odbicia
        światła od zmrożonej powierzchni z&nbsp;maleńkimi kryształkami lodu.
        Mrożona folia stosowana jest, aby przesłonić widok do środka
        pomieszczenia. Może stanowić również element dekoracyjny lub reklamowy,
        ponieważ idealnie nadaje się do ploterowania, wycinania wzorów oraz do
        zadruku.
      </h2>
      <BeforeAfterSlider
        before="/przezroczysta_zewnatrz.webp"
        altBefore="Folia przeźroczysta na oknie zewnątrz"
        after="/folia_mrozona_zewnatrz.webp"
        altAfter="Folia Mrożona na oknie zewnątrz"
        sliderPos={40}
      />
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start p-5 lg:p-7 gap-5 w-full bg-blue-light rounded-3xl mt-6 md:mt-8 card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Scissors className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Dlaczego warto wybrać folie mrożone?</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 card w-full ">
            <div className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full">
              <h4 className="font-semibold">Uniwersalne zastosowanie</h4>
              <p className="text-justify">
                Możliwość zastosowania zarówno jako element dekoracyjny, jak
                i&nbsp;praktyczne rozwiązanie zapewniające prywatność. Idealne
                do wycinania wzorów i&nbsp;nadruków reklamowych.
              </p>
            </div>
            <div className="flex flex-col p-5 lg:p-7 gap-3 bg-light rounded-3xl w-full">
              <h4 className="font-semibold">Łatwy montaż i&nbsp;demontaż</h4>
              <p className="text-justify">
                Folie nie uszkadzają szyb i&nbsp;można je w&nbsp;każdej chwili
                usunąć bez śladu. Prosty montaż bez konieczności wymiany szyb.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 w-full">
        <div className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-6 md:mt-8">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <LayoutGrid className="w-8 h-8 md:w-10 md:h-10" />
            <h3>Gdzie najczęściej stosujemy folie anty-UV?</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 w-full">
            {places.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 p-5 lg:p-7 bg-white rounded-3xl drop-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] card"
              >
                <div className="text-blue p-4 bg-blue-lighter rounded-xl flex items-center justify-center w-16 h-16 shrink-0">
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
      <div className="flex flex-col items-center justify-center mt-6 md:mt-8 w-full px-4 sm:px-8 md:px-16 lg:px-32">
        <h3 className="text-center">Cena folii mrożonych z&nbsp;montażem</h3>
        <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-4 md:py-5 w-full max-w-2xl border-y border-t-dark mt-4">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>120-160 </h3>
            <p>zł/m²</p>
          </div>
          <p className="text-center">
            Cena obejmuje folię mrożoną oraz profesjonalny montaż
          </p>
        </div>
      </div>
      <BottomContact title="Chcesz zamówić folie mrożone?" className="mt-7" />
      <Footer />
    </div>
  );
}
