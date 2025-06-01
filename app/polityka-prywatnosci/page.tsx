import Header from "@/components/Header";
import { Mail, Phone } from "lucide-react";

export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <h1 className="mt-4 md:mt-7">
        <span className="text-dark">POLITYKA PRYWATNOŚCI</span>
      </h1>
      <div className="w-full  p-6 md:p-8 rounded-xl shadow-md">
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              1. Administrator danych osobowych
            </h3>
            <div className="flex items-start mt-4">
              <p>Administratorem Twoich danych osobowych...</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              2. Jakie dane zbieramy?
            </h3>
            <p className="mb-2">
              Za pośrednictwem formularza kontaktowego zbieramy następujące dane
              osobowe:
            </p>
            <ul className="list-disc pl-10 space-y-1 text-lg text-gray">
              <li>Imię i nazwisko,</li>
              <li>Adres e-mail,</li>
              <li>Numer telefonu,</li>
              <li>Wymiary szyb,</li>
              <li>Ilość okien,</li>
              <li>Miejsce montażu,</li>
              <li>Rodzaj folii,</li>
              <li>Treść wiadomości,</li>
              <li>Ewentualne załączone zdjęcia okien.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              3. Cel i podstawa prawna przetwarzania danych
            </h3>
            <p className="mb-4">Twoje dane osobowe przetwarzamy w celu:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray">
              <li>
                <strong>Odpowiedzi na Twoje zapytanie</strong> przesłane przez
                formularz kontaktowy (art. 6 ust. 1 lit. b RODO – realizacja
                umowy lub działania przed zawarciem umowy),
              </li>
              <li>
                <strong>Archiwizacji korespondencji</strong> w celach dowodowych
                (art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
                administratora).
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              4. Czas przechowywania danych
            </h3>
            <p>
              Twoje dane będą przechowywane przez okres niezbędny do obsługi
              zapytania oraz przez czas wymagany przez przepisy prawa lub do
              momentu wniesienia skutecznego sprzeciwu wobec przetwarzania.
            </p>
          </div>

          {/* Sekcja 5 */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              5. Odbiorcy danych
            </h3>
            <p>
              Twoje dane mogą być przekazane podmiotom świadczącym usługi IT,
              hostingowe lub inne, które wspierają nas w realizacji usług, przy
              czym wszystkie te podmioty zobowiązane są do ochrony danych
              zgodnie z RODO.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              6. Twoje prawa
            </h3>
            <p className="mb-2">Masz prawo do:</p>
            <ul className="list-disc pl-6 space-y-1 text-lg text-gray">
              <li>Dostępu do swoich danych,</li>
              <li>Sprostowania danych,</li>
              <li>Usunięcia danych,</li>
              <li>Ograniczenia przetwarzania,</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>Przenoszenia danych,</li>
              <li>
                Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (PUODO) w przypadku naruszenia przepisów RODO.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              7. Kontakt
            </h3>
            <p className="mb-4">
              W sprawach związanych z przetwarzaniem danych osobowych możesz
              skontaktować się z nami:
            </p>
            <div className="flex flex-row items-center gap-5">
              <div className="flex items-center hover:scale-110">
                <Mail className="h-5 w-5 text-blue mr-2" />
                <a
                  href="mailto:dragon.folie@gmail.com"
                  className="hover:text-blue "
                >
                  dragon.folie@gmail.com
                </a>
              </div>
              <div className="flex items-center hover:scale-110">
                <Phone className="h-5 w-5 text-blue mr-2" />
                <a href="tel:607935863" className="hover:text-blue">
                  607 935 863
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
