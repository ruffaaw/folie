import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import {
  MapPin,
  Ruler,
  Square,
  ClipboardList,
  Image,
  Mail,
} from "lucide-react";

export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Header />
      <Title title="PROFESJONALNY MONTAŻ" />

      <h1 className="mt-4 md:mt-7">
        <span className="text-dark">MONTAŻ I WYCENA</span>
      </h1>

      <h2 className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        Folie montujemy na terenie województwa małopolskiego i&nbsp;województwa
        śląskiego.
      </h2>

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 mt-8 md:mt-12">
        <div className="flex flex-col items-start justify-start p-4 sm:p-5 md:p-6 lg:p-7 gap-3 sm:gap-4 md:gap-5 w-full bg-blue-light rounded-2xl lg:rounded-3xl">
          <div className="flex flex-row items-center justify-start gap-2 w-full">
            <ClipboardList className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
            <h3>Do wyceny montażu potrzebujemy:</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full">
            <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl lg:rounded-3xl items-start">
              <div className="text-blue p-2 sm:p-3 bg-blue-lighter rounded-full">
                <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4>Wymiary szyb</h4>
                <p>Dokładne wymiary szyb okiennych w cm</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl lg:rounded-3xl items-start">
              <div className="text-blue p-2 sm:p-3 bg-blue-lighter rounded-full">
                <Square className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4>Ilość okien</h4>
                <p>Liczba okien do oklejenia</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl lg:rounded-3xl items-start">
              <div className="text-blue p-2 sm:p-3 bg-blue-lighter rounded-full">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
              </div>
              <div>
                <h4>Miejsce montażu</h4>
                <p>Adres lub lokalizacja montażu</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 bg-white rounded-xl lg:rounded-3xl items-start">
              <div className="text-blue p-2 sm:p-3 bg-blue-lighter rounded-full">
                <Image className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
              </div>
              <div>
                <h4>Zdjęcia okien</h4>
                <p>Aktualny stan okien (opcjonalne)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 mt-8 md:mt-12">
        <div className="flex flex-col items-start justify-start p-4 sm:p-5 md:p-6 lg:p-7 gap-3 sm:gap-4 md:gap-5 w-full bg-gray rounded-2xl lg:rounded-3xl text-light">
          <div className="flex flex-row items-center justify-start gap-2 w-full">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" />
            <h3>Dodatkowe usługi</h3>
          </div>

          <div className="flex flex-col p-4 sm:p-5 md:p-6 lg:p-7 gap-2 sm:gap-3 bg-light rounded-xl lg:rounded-3xl text-dark w-full">
            <h4 className="font-semibold">Pełna obsługa</h4>
            <p className="text-justify">
              Na życzenie klienta możemy wykonać pomiar samodzielnie.
              Dysponujemy próbkami wykorzystywanych przez nas folii, dzięki
              czemu możemy Państwa osobiście zapoznać z&nbsp;naszą ofertą.
            </p>
          </div>
        </div>
      </div>

      <BottomContact
        title="Masz pytania dotyczące montażu?"
        className="mt-8 md:mt-12"
      />

      <Footer />
    </div>
  );
}
