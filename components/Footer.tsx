import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full overflow-hidden">
      <div className=" bg-blue-lighter">
        <div
          className="flex flex-col lg:flex-row items-start gap-8 px-4 sm:px-8 md:px-16 py-20 w-full"
          id="footer-p"
        >
          <div className="w-full lg:w-[30%] flex items-center lg:items-start flex-col">
            <h3 className="text-xl font-bold mb-4">Dragon Folie</h3>
            <p className="text-gray mb-4 max-lg:text-center">
              Profesjonalne folie okienne i&nbsp;usługi montażowe
            </p>
          </div>

          <div className="w-full lg:w-1/5 flex items-center lg:items-start flex-col">
            <h4 className="text-lg font-semibold mb-4">Folie okienne</h4>
            <ul className="space-y-2 flex flex-col items-center lg:items-start">
              <li>
                <Link
                  href="/folie-okienne"
                  className="text-dark hover:text-blue transition"
                >
                  Wszystkie folie
                </Link>
              </li>
              <li>
                <Link
                  href="/folie-okienne/folie-anty-uv"
                  className="text-dark hover:text-blue transition"
                >
                  Folie Anty UV
                </Link>
              </li>
              <li>
                <Link
                  href="/folie-okienne/folie-przeciwsloneczne"
                  className="text-dark hover:text-blue transition"
                >
                  Folie przeciwsłoneczne
                </Link>
              </li>
              <li>
                <Link
                  href="/folie-okienne/folie-przeciwsloneczne-na-swietliki-z-poliweglanu"
                  className="text-dark hover:text-blue transition"
                >
                  Folie na świetliki
                </Link>
              </li>
              <li>
                <Link
                  href="/folie-okienne/folie-antywlamaniowe"
                  className="text-dark hover:text-blue transition"
                >
                  Folie antywłamaniowe
                </Link>
              </li>
              <li>
                <Link
                  href="/folie-okienne/folie-bezpieczne"
                  className="text-dark hover:text-blue transition"
                >
                  Folie bezpieczne
                </Link>
              </li>
              <li>
                <Link
                  href="/folie-okienne/folie-lustro-weneckie"
                  className="text-dark hover:text-blue transition"
                >
                  Lustro weneckie
                </Link>
              </li>
              <li>
                <Link
                  href="/folie-okienne/folie-matowe"
                  className="text-dark hover:text-blue transition"
                >
                  Folie matowe
                </Link>
              </li>
              <li>
                <Link
                  href="/folie-okienne/folie-mrozone"
                  className="text-dark hover:text-blue transition"
                >
                  Folie mrożone
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-[15%] flex items-center lg:items-start flex-col">
            <h4 className="text-lg font-semibold mb-4">Firma</h4>
            <ul className="space-y-2 flex flex-col items-center lg:items-start">
              <li>
                <Link
                  href="/o-nas"
                  className="text-dark hover:text-blue transition"
                >
                  O&nbsp;nas
                </Link>
              </li>
              <li>
                <Link
                  href="/montaz-i-wycena"
                  className="text-dark hover:text-blue transition"
                >
                  Montaż i&nbsp;wycena
                </Link>
              </li>
              <li>
                <Link
                  href="/nasze-realizacje"
                  className="text-dark hover:text-blue transition"
                >
                  Realizacje
                </Link>
              </li>

              <li>
                <Link
                  href="/kontakt"
                  className="text-dark hover:text-blue transition"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/5 flex items-center lg:items-start flex-col">
            <h4 className="text-lg font-semibold mb-4">Informacje</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/polityka-prywatnosci"
                  className="text-dark hover:text-blue transition"
                >
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[30%] flex flex-col space-y-2 items-center lg:items-start">
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <a href="tel:+48665333625" className="w-fit">
              <motion.p whileHover={{ color: "#003d66" }}>
                +48&nbsp;665&nbsp;333&nbsp;625
              </motion.p>
            </a>
            <a href="tel:+48665333771" className="w-fit">
              <motion.p whileHover={{ color: "#003d66" }}>
                +48&nbsp;665&nbsp;333&nbsp;771
              </motion.p>
            </a>
            <a
              href="mailto:dragon.folie2025@gmail.com"
              target="_blank"
              className="w-fit"
            >
              <motion.p whileHover={{ color: "#003d66" }}>
                dragon.folie2025@gmail.com
              </motion.p>
            </a>
            <motion.a
              whileHover={{ color: "#003d66" }}
              href="https://maps.app.goo.gl/TW4CQtPvfUZrAb5R6"
              target="_blank"
              className="w-fit max-lg:text-center"
            >
              ul. Polnych kwiatów 9, <br />
              32-070 Wołowice
            </motion.a>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 bg-gray-dark px-4 sm:px-8 md:px-16">
          <p className="my-2 text-center md:text-left" id="footer-text">
            2025 Policrafts ©
          </p>
          <div className="text-center md:text-right">
            <p className="p-0 m-0" id="footer-text">
              Realizacja witryny: Rafał Ciupek
            </p>
            <p className="p-0 m-0" id="footer-text">
              Wizualizacje: Maciej Krzyszkowski
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
