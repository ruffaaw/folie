"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsSubmenuOpen(false), 100);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeAllMenus = () => {
    setIsSubmenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full bg-blue flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 py-2 md:py-[10px] z-50 shadow-md"
    >
      <Link href="/" onClick={closeAllMenus}>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={80}
          height={80}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
      </Link>

      <nav className="hidden lg:flex flex-row items-center text-light text-xl xl:text-2xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
        <Link
          href="/o-nas"
          className={`hover:scale-105 transition-transform px-4 xl:px-7 py-2 ${
            isActive("/o-nas") ? "bg-blue-light text-dark rounded-lg" : ""
          }`}
        >
          O&nbsp;nas
        </Link>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={submenuRef}
        >
          <div
            className={`flex items-center gap-1 cursor-pointer px-4 xl:px-7 py-2 ${
              isSubmenuOpen ? "scale-105" : ""
            } ${
              isActive("/folie-okienne")
                ? "bg-blue-light text-dark rounded-lg"
                : ""
            }`}
          >
            <Link href="/folie-okienne">Folie okienne</Link>
            <ChevronDown className="w-4 h-4" />
          </div>

          {isSubmenuOpen && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white text-dark rounded-md shadow-lg z-50 border border-blue-light">
              {[
                ["Anty UV", "/folie-okienne/folie-anty-uv"],
                ["Przeciwsłoneczne", "/folie-okienne/folie-przeciwsloneczne"],
                [
                  `Na świetliki z${"\u00A0"}poliwęglanu`,
                  "/folie-okienne/folie-przeciwsloneczne-na-swietliki-z-poliweglanu",
                ],
                ["Antywłamaniowe", "/folie-okienne/folie-antywlamaniowe"],
                ["Bezpieczne", "/folie-okienne/folie-bezpieczne"],
                ["Lustro weneckie", "/folie-okienne/folie-lustro-weneckie"],
                ["Matowe", "/folie-okienne/folie-matowe"],
                ["Mrożone", "/folie-okienne/folie-mrozone"],
              ].map(([title, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue text-lg border-b border-blue-light last:border-b-0"
                  onClick={closeAllMenus}
                >
                  {title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href={"/montaz-i-wycena"}
          className={`hover:scale-105 transition-transform px-4 xl:px-7 py-2 ${
            isActive("/montaz-i-wycena")
              ? "bg-blue-light text-dark rounded-lg"
              : ""
          }`}
        >
          Montaż i&nbsp;wycena
        </Link>
        {["Nasze realizacje", "Kontakt"].map((item) => {
          const path = item.replace(/\s+/g, "-").toLowerCase();
          return (
            <Link
              key={path}
              href={`/${path}`}
              className={`hover:scale-105 transition-transform px-4 xl:px-7 py-2 ${
                isActive(`/${path}`) ? "bg-blue-light text-dark rounded-lg" : ""
              }`}
            >
              {item}
            </Link>
          );
        })}
      </nav>

      <button
        className="lg:hidden text-white p-2"
        onClick={toggleMobileMenu}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-blue shadow-lg z-50">
          <div className="flex flex-col text-light text-xl">
            <Link
              href="/o-nas"
              className={`py-3 px-4 sm:px-8 md:px-16 lg:px-32 ${
                isActive("/o-nas") ? "bg-blue-light text-dark " : ""
              }`}
              onClick={closeAllMenus}
            >
              O nas
            </Link>

            <div className="relative">
              <div
                className={`flex justify-between items-center py-3 px-4 sm:px-8 md:px-16 lg:px-32 ${
                  isActive("/folie-okienne")
                    ? "bg-blue-light text-dark rounded-lg"
                    : ""
                }`}
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              >
                <Link href="/folie-okienne" onClick={(e) => e.preventDefault()}>
                  Folie okienne
                </Link>
                <ChevronDown
                  className={`mr-2 transition-transform ${
                    isSubmenuOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isSubmenuOpen && (
                <div className="bg-blue-dark px-4 sm:px-8 md:px-16 lg:px-32 mt-1 mb-2 rounded-lg">
                  {[
                    ["Anty UV", "/folie-okienne/folie-anty-uv"],
                    [
                      "Przeciwsłoneczne",
                      "/folie-okienne/folie-przeciwsloneczne",
                    ],
                    [
                      `Na świetliki z${"\u00A0"}poliwęglanu`,
                      "/folie-okienne/folie-przeciwsloneczne-na-swietliki-z-poliweglanu",
                    ],
                    ["Antywłamaniowe", "/folie-okienne/folie-antywlamaniowe"],
                    ["Bezpieczne", "/folie-okienne/folie-bezpieczne"],
                    ["Lustro weneckie", "/folie-okienne/folie-lustro-weneckie"],
                    ["Matowe", "/folie-okienne/folie-matowe"],
                    ["Mrożone", "/folie-okienne/folie-mrozone"],
                  ].map(([title, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="block py-2 px-6 hover:bg-blue-light hover:text-dark text-lg"
                      onClick={closeAllMenus}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/montaz-i-wycena"
              className={`py-3 px-4 sm:px-8 md:px-16 lg:px-32 ${
                isActive("/montaz-i-wycena") ? "bg-blue-light text-dark " : ""
              }`}
              onClick={closeAllMenus}
            >
              Montaż i wycena{" "}
            </Link>

            {["Nasze realizacje", "Kontakt"].map((item) => {
              const path = item.replace(/\s+/g, "-").toLowerCase();
              return (
                <Link
                  key={path}
                  href={`/${path}`}
                  className={`py-3 px-4 sm:px-8 md:px-16 lg:px-32 ${
                    isActive(`/${path}`) ? "bg-blue-light text-dark" : ""
                  }`}
                  onClick={closeAllMenus}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
