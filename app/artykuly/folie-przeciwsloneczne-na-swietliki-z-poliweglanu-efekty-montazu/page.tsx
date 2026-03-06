"use client";

import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const headline = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sub = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
  },
};

export default function Page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-[100px] flex flex-col items-center overflow-hidden"
    >
      <Header />
      <Title title="WIEDZA I PORADNIKI" />

      <motion.h1 variants={headline} className="mt-4 md:mt-7">
        <span className="text-dark relative inline-block">
          <span className="text-dark">
            Folie na świetliki z&nbsp;poliwęglanu&nbsp;– efekty montażu
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
          />
        </span>
      </motion.h1>

      <motion.h2
        variants={sub}
        className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16"
      >
        Świetliki dachowe z poliwęglanu to popularne rozwiązanie w obiektach
        przemysłowych i&nbsp;magazynowych. Choć zapewniają naturalne
        doświetlenie, w praktyce często stają się źródłem poważnych problemów –
        nadmiernego ogrzewania, oślepiania pracowników, degradacji towarów oraz
        utrudnionej widoczności ekranów maszyn i&nbsp;sterowników.
        <br className="mt-3 block" />
        Poniżej przedstawiamy Państwu konkretne przykłady efektów montażu.
      </motion.h2>

      <motion.div
        variants={container}
        className="w-full px-4 sm:px-8 md:px-16 mt-8 md:mt-12 flex flex-col gap-10"
      >
        {/* REALIZACJA NR 1 */}
        <motion.article
          variants={item}
          className="bg-white rounded-3xl overflow-hidden drop-shadow-[0px_15px_40px_rgba(0,0,0,0.1)]"
        >
          {/* Nagłówek realizacji */}
          <div className="bg-blue px-6 md:px-10 py-5 flex items-center gap-4">
            <span className="text-white text-3xl font-bold opacity-30 select-none">
              01
            </span>
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              Realizacja nr&nbsp;1
            </h3>
          </div>

          <div className="p-6 md:p-10 flex flex-col gap-8">
            {/* Miejsce */}
            <div className="flex flex-col gap-2">
              <h4 className="text-blue font-semibold uppercase tracking-wide text-sm">
                Miejsce
              </h4>
              <p className="text-dark">
                Hala produkcyjna odzieży i&nbsp;wyrobów skórzanych
                o&nbsp;powierzchni 1300&nbsp;m².
              </p>
            </div>

            {/* Opis i cel */}
            <div className="flex flex-col gap-2">
              <h4 className="text-blue font-semibold uppercase tracking-wide text-sm">
                Opis i cel montażu
              </h4>
              <p className="text-dark leading-relaxed">
                Hala produkcyjna posiadała liczne przeszklenia dachowe
                (świetliki) w&nbsp;celu wpuszczenia jak największej ilości
                światła dziennego. Jednak w&nbsp;efekcie powodowały one wysoką
                temperaturę wewnątrz. Inwestorom zależało{" "}
                <strong>na jak największym obniżeniu temperatury.</strong>{" "}
                Jednocześnie oczekiwali, że folia{" "}
                <strong>nie zabierze całkowicie naturalnego światła.</strong>
              </p>
            </div>

            {/* Rozwiązanie */}
            <div className="flex flex-col gap-2">
              <h4 className="text-blue font-semibold uppercase tracking-wide text-sm">
                Rozwiązanie
              </h4>
              <p className="text-dark leading-relaxed">
                Zastosowano specjalistyczną{" "}
                <strong>folię przeciwsłoneczną</strong> przeznaczoną do montażu{" "}
                <strong>na świetlikach z poliwęglanu</strong> w&nbsp;
                <strong>kolorze białym.</strong> Folia ta rozprasza wpadające
                światło, zmniejsza intensywność promieni słonecznych
                i&nbsp;refleksów jednocześnie zachowując jasność wnętrza. Folia
                ta absorbuje ciepło powodując obniżenie się temperatury wewnątrz
                hali.
              </p>
            </div>

            {/* Efekt montażu */}
            <div className="flex flex-col gap-4">
              <h4 className="text-blue font-semibold uppercase tracking-wide text-sm">
                Efekt montażu
              </h4>

              {/* Tabela pomiarów */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-5 py-3 font-semibold text-dark">
                        Pomiar
                      </th>
                      <th className="text-center px-5 py-3 font-semibold text-dark">
                        Przed montażem
                      </th>
                      <th className="text-center px-5 py-3 font-semibold text-blue">
                        Po montażu
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="px-5 py-3 text-dark">
                        Temperatura na zewnątrz
                      </td>
                      <td className="px-5 py-3 text-center text-dark">
                        31&nbsp;°C
                      </td>
                      <td className="px-5 py-3 text-center text-blue font-semibold">
                        34&nbsp;°C
                      </td>
                    </tr>
                    <tr className="border-t border-slate-100 bg-blue-light/30">
                      <td className="px-5 py-3 text-dark">
                        Temperatura wewnątrz
                      </td>
                      <td className="px-5 py-3 text-center text-dark">
                        29&nbsp;°C
                      </td>
                      <td className="px-5 py-3 text-center text-blue font-bold">
                        24&nbsp;°C
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-dark leading-relaxed">
                W&nbsp;efekcie montażu temperatura w&nbsp;hali{" "}
                <strong>była niższa o&nbsp;5&nbsp;°C.</strong> Warto jednak
                zwrócić uwagę na fakt, że{" "}
                <strong>
                  pomiary przed i&nbsp;po dokonaliśmy w&nbsp;innych
                  temperaturach zewnętrznych.
                </strong>{" "}
                Podczas dokonywania pomiaru <strong>po</strong> montażu{" "}
                <strong>właściciel hali</strong> poinformował nas, że{" "}
                <strong>zredukował nawiew klimatyzacji o&nbsp;80%.</strong>
              </p>
            </div>
          </div>
        </motion.article>

        {/* REALIZACJA NR 2 */}
        <motion.article
          variants={item}
          className="bg-white rounded-3xl overflow-hidden drop-shadow-[0px_15px_40px_rgba(0,0,0,0.1)]"
        >
          {/* Nagłówek realizacji */}
          <div className="bg-gray px-6 md:px-10 py-5 flex items-center gap-4">
            <span className="text-white text-3xl font-bold opacity-30 select-none">
              02
            </span>
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              Realizacja nr&nbsp;2
            </h3>
          </div>

          <div className="p-6 md:p-10 flex flex-col gap-8">
            {/* Miejsce */}
            <div className="flex flex-col gap-2">
              <h4 className="text-blue font-semibold uppercase tracking-wide text-sm">
                Miejsce
              </h4>
              <p className="text-dark">
                Magazyn logistyczny (przechowywanie towarów) o&nbsp;powierzchni
                2000&nbsp;m².
              </p>
            </div>

            {/* Opis i cel */}
            <div className="flex flex-col gap-2">
              <h4 className="text-blue font-semibold uppercase tracking-wide text-sm">
                Opis i&nbsp;cel montażu
              </h4>
              <p className="text-dark leading-relaxed">
                Ten magazyn służył do przechowywania artykułów budowlanych,
                które aby zachować swoje właściwości potrzebowały odpowiednich
                warunków. Pod wpływem wysokiej temperatury opakowania
                blakły,&nbsp;a artykuły traciły swoje właściwości. Właściciel
                hali zamontował klimatyzacje, jednak koszty, które ponosił za
                prąd były bardzo wysokie. Dodatkowo klimatyzacja nie
                rozwiązywała problemu nadmiernego promieniowania UV
                uszkadzającego etykiety. Celem montażu było obniżenie
                temperatury wewnątrz hali a&nbsp;także redukcja promieni UV.
              </p>
            </div>

            {/* Rozwiązanie */}
            <div className="flex flex-col gap-2">
              <h4 className="text-blue font-semibold uppercase tracking-wide text-sm">
                Rozwiązanie
              </h4>
              <p className="text-dark leading-relaxed">
                Zastosowano specjalistyczną{" "}
                <strong>folię przeciwsłoneczną</strong> przeznaczoną do montażu{" "}
                <strong>na świetlikach z&nbsp;poliwęglanu</strong> w&nbsp;
                <strong>kolorze srebrnym.</strong> Folia ta jest folią
                refleksyjną, ogranicza do maksimum przepuszczanie promieni
                słonecznych i&nbsp;promieniowania UV. W efekcie widocznie obniża
                temperaturę wewnątrz hali o&nbsp;nawet 10–12&nbsp;°C.
              </p>
            </div>

            {/* Efekt montażu */}
            <div className="flex flex-col gap-4">
              <h4 className="text-blue font-semibold uppercase tracking-wide text-sm">
                Efekt montażu
              </h4>
              <p className="text-dark leading-relaxed">
                Według relacji inwestora temperatura w&nbsp;hali{" "}
                <strong>była niższa o&nbsp;6–7&nbsp;°C</strong> przy
                jednoczesnej redukcji nawiewów klimatyzacji. Co ważniejsze –
                produkty które znajdowały się w&nbsp;hali nie ulegały już
                takiemu nasłonecznieniu co można było zauważyć natychmiast.
                Folie na świetliki z&nbsp;poliwęglanu wyraźnie{" "}
                <strong>ograniczyły wpadające promienie słoneczne</strong>{" "}
                zacieniając otoczenie,{" "}
                <strong>
                  ustabilizowały temperaturę w&nbsp;strefach składowania
                  produktów.
                </strong>
              </p>
            </div>
          </div>
        </motion.article>

        {/* Podsumowanie */}
        <motion.div
          variants={item}
          className="bg-blue-light rounded-3xl p-6 md:p-10 flex flex-col gap-5"
        >
          <h3 className="text-dark text-xl md:text-2xl font-semibold">
            Montaż folii na świetliki z poliwęglanu to:
          </h3>
          <ul className="flex flex-col gap-3 font-bold">
            {[
              "dobra inwestycja na długie lata;",
              "realna poprawa komfortu pracy pracowników i użytkowania obiektu;",
              "ochrona przed przegrzewaniem się hali;",
              "obniżenie kosztów klimatyzacji;",
              "ochrona produktów i ekranów maszyn przed promieniowaniem ultrafioletowym.",
            ].map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-dark text-base md:text-lg"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-dark flex-shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <BottomContact
        title="Masz dodatkowe pytania?"
        className="mt-10 md:mt-14"
      />

      <Footer />
    </motion.div>
  );
}
