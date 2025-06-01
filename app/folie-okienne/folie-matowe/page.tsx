import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { features, places } from "@/data/folie-matowe";
import { Building, Sun, Brush, ShieldCheck } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="DEKORACJA I KOMFORT" />
      <h1 className="mt-7">
        FOLIE <span className="text-blue">MATOWE</span>
      </h1>
      <h2 className="mt-7 text-center px-32">
        Eleganckie rozwiązanie dekoracyjne łączące prywatność
        z&nbsp;przepuszczaniem światła. Tworzą unikalną atmosferę we wnętrzach,
        jednocześnie chroniąc przed nadmiernym nasłonecznieniem
        i&nbsp;promieniami UV. Więcej o ochronie przed UV przeczytasz{" "}
        <a href="/folie-okienne/folie-anty-uv" className="text-blue underline">
          tutaj
        </a>
        .
      </h2>

      <BeforeAfterSlider
        before="/przezroczysta-wewnatrz.webp"
        altBefore="Przeźroczysta szyba przed aplikacją folii"
        after="/matowa-wewnatrz.webp"
        altAfter="Efekt po aplikacji folii matowej"
        sliderPos={70}
      />

      <div className="px-32">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Brush size={44} />
            <h3>Dlaczego warto wybrać folie matowe?</h3>
          </div>
          <div className="flex flex-row gap-5 card">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Funkcjonalność i design</h4>
              <p className="text-justify">
                Obustronny efekt zasłonięcia z jednoczesnym przepuszczaniem
                światła (18-72%). Rozpraszają światło, eliminując odblaski
                i&nbsp;refleksy, co wpływa kojąco na oczy.
              </p>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Praktyczne zalety</h4>
              <p className="text-justify">
                Łatwe w utrzymaniu czystości - nie pozostawiają odcisków palców.
                Odporne na warunki atmosferyczne, mogą być montowane zarówno
                wewnątrz jak i&nbsp;na zewnątrz budynku.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-32 w-full">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-gray rounded-3xl mt-7 text-light">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <ShieldCheck size={44} />
            <h3>Kluczowe właściwości folii matowej</h3>
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
        <div className="flex flex-col items-start justify-start py-7 gap-5 w-full rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Building size={44} />
            <h3>Gdzie sprawdzą się folie matowe?</h3>
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
        <h3>Cena folii matowych z montażem</h3>
        <div className="flex flex-col items-center justify-center px-12 py-5 w-[40vw] border-y border-t-dark">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>120-160 </h3>
            <p style={{ fontSize: "1.5rem" }}>zł/m²</p>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Cena zależy od wybranego koloru i powierzchni montażu
          </p>
        </div>
      </div>

      <BottomContact
        title="Chcesz zmienić wygląd swoich szyb w prosty sposób?"
        className="mt-7"
      />
      <Footer />
    </div>
  );
}
