"use client";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { features, places } from "@/data/folie-bezpieczne";
import { Building, GlassWater, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="BEZPIECZEŃSTWO" />
      <h1 className="mt-7">
        FOLIE <span className="text-blue">BEZPIECZNE</span>
      </h1>
      <h2 className="mt-7 text-center px-32">
        Wielowarstwowe folie bezpieczne zapobiegające rozprzestrzenianiu się
        odłamków szkła. Niewidoczna ochrona spełniająca standardy HACCP,
        zapewniająca bezpieczeństwo w&nbsp;domach, zakładach produkujących
        żywność i&nbsp;obiektach publicznych.
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
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7 card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <ShieldCheck size={44} />
            <h3>Standard HACCP</h3>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Co to jest HACCP?</h4>
              <p className="text-justify">
                System Analizy Zagrożeń i Krytycznych Punktów Kontroli (Hazard
                Analysis and Critical Control Points) to międzynarodowy standard
                bezpieczeństwa żywności, wymagający zabezpieczenia przed
                odłamkami szkła.
              </p>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Wymagania prawne</h4>
              <p className="text-justify">
                Wszystkie firmy branży spożywczej mają obowiązek stosowania
                rozwiązań spełniających standard HACCP. Nasze folie zapewniają
                pełną zgodność z przepisami.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 w-full">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-gray rounded-3xl mt-7 text-light card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <GlassWater size={44} />
            <h3>Kluczowe właściwości</h3>
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
        <h3>Cena folii bezpiecznych klasy 3B3 HACCP z montażem</h3>
        <div className="flex flex-col items-center justify-center px-12 py-5 w-[50vw] border-y border-t-dark ">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>120-160 </h3>
            <p style={{ fontSize: "1.5rem" }}>zł/m²</p>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Cena obejmuje folię spełniającą standard HACCP oraz profesjonalny
            montaż
          </p>
        </div>
      </div>
      <BottomContact
        title="Potrzebujesz zabezpieczenia przed odłamkami szkła?"
        className="mt-7"
      />
      <Footer />
    </div>
  );
}
