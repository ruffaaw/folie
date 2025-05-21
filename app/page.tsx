import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Check, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <h1 className="mt-24">Witamy Państwa na naszej stronie</h1>
      <h2 className="mt-16 max-w-[1030px] text-center">
        Zajmujemy się montażem folii okiennych nie tylko na terenie Krakowa, ale
        również w&nbsp;całym województwie małopolskim i&nbsp;śląskim
      </h2>
      <Button
        text="Poznaj naszą ofertę"
        primaryColor="#003d66"
        backgroundColor="#d0ebff"
        href="/folie-okienne"
        className="mt-8"
      />
      <Image
        src="/fasada.webp"
        alt="Fasada"
        width={1640}
        height={1025}
        className="object-cover rounded-[20px] mt-8 z-10"
      />
      <div className="flex flex-col items-center justify-center bg-blue-lighter rounded-[200px] w-full pb-6 -mt-[512px] mb-24">
        <h3 className="mt-[586px]">Dlaczego warto nam zaufać?</h3>
        <div className="flex flex-row items-start justify-between gap-5 w-full px-32">
          <div className="flex flex-row items-start gap-5">
            <Mail className="text-dark size-16 stroke-1" />
            <div className="flex flex-col gap-10">
              <h4>Indywidualne zamówienia</h4>
              <p className="text-justify max-w-2xl">
                Jeśli oczekujecie Państwo innego rodzaju folii prosimy
                o&nbsp;przesłanie maila z&nbsp;zapytaniem. Jesteśmy w stanie
                wykonać usługę montażu folii z&nbsp;wybranego przez Państwa
                materiału, innego niż znajdującego się w&nbsp;naszej stałej
                ofercie.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-5">
            <Check className="text-dark size-16 stroke-1" />
            <div className="flex flex-col gap-10">
              <h4>Gwarancja jakości</h4>
              <p className="text-justify max-w-2xl">
                Zapewniamy, że montaż folii to inwestycja na długie lata,
                ponieważ używamy folii najwyższej jakości. Do swojej oferty
                dobraliśmy folie, które są łatwe w utrzymaniu
                i&nbsp;czyszczeniu, odporne na uszkodzenia i&nbsp;działanie
                czynników atmosferycznych. Wierzymy, że dobry materiał to
                podstawa trwałości prac,&nbsp;a inwestycja, którą Państwo
                poczynicie zwróci się za kilka lat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
