"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Check, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center">
      <Header />

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center">
        <h1 className="mt-8 sm:mt-12 md:mt-16 text-center">
          <span className="text-dark">Witamy Państwa na naszej stronie</span>
        </h1>
        <h2 className="mt-4 md:mt-7  max-w-[90vw] md:max-w-[1030px] text-center text-lg md:text-xl">
          Zajmujemy się montażem folii okiennych nie tylko na terenie Krakowa,
          ale również w&nbsp;całym województwie małopolskim i&nbsp;śląskim
        </h2>

        <Button
          text="Poznaj naszą ofertę"
          primaryColor="#003d66"
          backgroundColor="#d0ebff"
          href="/folie-okienne"
          className="mt-6 md:mt-8"
        />

        <div className="relative w-full mt-6 md:mt-8 aspect-video max-w-[1640px]">
          <Image
            src="/fasada.webp"
            alt="Fasada budynku z foliami okiennymi"
            fill
            className="object-cover rounded-lg md:rounded-[20px] z-10"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center bg-blue-lighter rounded-t-3xl md:rounded-t-[100px] lg:rounded-t-[200px] pb-6 md:pb-12 mt-6 sm:-mt-[180px] md:-mt-[200px] lg:-mt-[300px] xl:-mt-[400px] px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="w-full sm:mt-[200px] md:mt-[150px] lg:mt-[250px] xl:mt-[350px]">
          <h3 className="mt-12 md:mt-24 text-2xl md:text-3xl font-bold text-center">
            Dlaczego warto nam zaufać?
          </h3>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 mt-8 md:mt-16 w-full">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 w-full">
              <div className="flex-shrink-0 bg-blue/10 p-3 rounded-full">
                <Mail className="text-dark size-8 md:size-12 lg:size-16 stroke-1" />
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Indywidualne zamówienia
                </h4>
                <p className="text-justify text-base md:text-lg">
                  Jeśli oczekujecie Państwo innego rodzaju folii prosimy
                  o&nbsp;przesłanie maila z&nbsp;zapytaniem. Jesteśmy w stanie
                  wykonać usługę montażu folii z&nbsp;wybranego przez Państwa
                  materiału, innego niż znajdującego się w&nbsp;naszej stałej
                  ofercie.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 w-full ">
              <div className="flex-shrink-0 bg-blue/10 p-3 rounded-full">
                <Check className="text-dark size-8 md:size-12 lg:size-16 stroke-1" />
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Gwarancja jakości
                </h4>
                <p className="text-justify text-base md:text-lg">
                  Zapewniamy, że montaż folii to inwestycja na długie lata,
                  ponieważ używamy folii najwyższej jakości. Do swojej oferty
                  dobraliśmy folie, które są łatwe w utrzymaniu
                  i&nbsp;czyszczeniu, odporne na uszkodzenia i&nbsp;działanie
                  czynników atmosferycznych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
