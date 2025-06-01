import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BottomContact from "@/components/BottomContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { places } from "@/data/folie-lustro-weneckie";
import { Building, EyeOff, GlassWater } from "lucide-react";
import React from "react";
export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="PRYWATNOŚĆ I STYL" />
      <h1 className="mt-7">
        FOLIE <span className="text-blue">LUSTRO WENECKIE</span>
      </h1>
      <h2 className="mt-7 text-center px-32">
        Unikalne folie stworzone dla tych, którzy cenią sobie prywatność
        i&nbsp;elegancki wygląd. Działają na zasadzie lustra weneckiego -
        widzisz na zewnątrz, podczas gdy osoby z&nbsp;zewnątrz widzą tylko swoje
        odbicie. Idealne rozwiązanie łączące funkcjonalność z&nbsp;designem.Jest
        to rodzaj folii przeciwsłonecznej, dlatego jej właściwości będą takie
        same jak foli przeciwsłonecznych o których możecie Państwo przeczytać{" "}
        <a
          href="/folie-okienne/folie-przeciwsloneczne"
          className="text-blue underline"
        >
          tutaj
        </a>
        .
      </h2>
      <BeforeAfterSlider
        before="/przezroczysta_zewnatrz.webp"
        altBefore="Folia przeźroczysta na oknie zewnątrz"
        after="/folia_lustrzana_zewnatrz.webp"
        altAfter="Folia Lustro Weneckie na oknie zewnątrz"
        sliderPos={40}
      />
      <div className="px-32">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-blue-light rounded-3xl mt-7 card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <EyeOff size={44} />
            <h3>Jak działa lustro weneckie?</h3>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Efekt optyczny</h4>
              <p className="text-justify">
                Warstwa metalizowana folii odbija światło z&nbsp;zewnątrz,
                tworząc efekt lustra. Jednocześnie przepuszcza światło
                z&nbsp;wnętrza, umożliwiając obserwację otoczenia.
              </p>
            </div>
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl">
              <h4 className="font-semibold">Warunki działania</h4>
              <p className="text-justify">
                Efekt lustra działa tylko gdy natężenie światła na zewnątrz jest
                większe niż wewnątrz. Wieczorem warto użyć dodatkowych zasłon
                dla zachowania prywatności.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32">
        <div className="flex flex-col items-start justify-start p-7 gap-5 w-full bg-gray rounded-3xl mt-7 text-light card">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <GlassWater size={44} />
            <h3>Dostępne stopnie intensywności</h3>
          </div>
          <div className="flex flex-row gap-5 w-full">
            <div className="flex flex-col p-7 gap-3 bg-light rounded-3xl flex-1">
              <h4 className="font-semibold">3 warianty efektu lustra</h4>
              <p className="text-justify">
                Oferujemy folie w trzech stopniach intensywności efektu
                lustrzanego, które różnią się poziomem przepuszczalności
                światła. Im silniejszy efekt lustra, tym większa redukcja
                światła i lepsze chłodzenie pomieszczenia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-32">
        <div className="flex flex-col items-start justify-start py-7 gap-5 w-full  rounded-3xl mt-7">
          <div className="flex flex-row items-center justify-start gap-2.5 w-full">
            <Building size={44} />
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
        <h3>Cena folii lustrzanych z montażem</h3>
        <div className="flex flex-col items-center justify-center px-12 py-5 w-[40vw] border-y border-t-dark ">
          <div className="flex flex-row items-baseline p-2.5 gap-2.5">
            <h3>230-280 </h3>
            <p style={{ fontSize: "1.5rem" }}>zł/m²</p>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Cena zależy od wybranego wariantu i powierzchni montażu
          </p>
        </div>
      </div>
      <BottomContact title="Chcesz eleganckiej prywatności?" className="mt-7" />
      <Footer />
    </div>
  );
}
