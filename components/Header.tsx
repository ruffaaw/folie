"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  // Animacje
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const submenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      ref={headerRef}
      className="fixed top-0 w-full bg-blue flex justify-between items-center px-4 sm:px-8 md:px-16 py-2 md:py-[10px] z-50 shadow-md"
    >
      <Link href="/" onClick={closeAllMenus} >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-row gap-2 items-center">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={80}
            height={80}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />
          <span className="text-light font-bold text-xl xl:text-2xl">DRAGON FOLIE</span>
        </motion.div>
      </Link>

      <nav className="hidden lg:flex flex-row items-center text-light text-xl xl:text-2xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
        {[
          { name: "O nas", href: "/o-nas" },
          { name: "Folie okienne", href: "/folie-okienne", submenu: true },
          { name: "Montaż i wycena", href: "/montaz-i-wycena" },
          { name: "Nasze realizacje", href: "/nasze-realizacje" },
          { name: "Kontakt", href: "/kontakt" },
        ].map((item) => (
          <div key={item.href} className="relative">
            {item.submenu ? (
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={submenuRef}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-1 cursor-pointer px-4 xl:px-7 py-2 ${
                    isSubmenuOpen ? "scale-105" : ""
                  } ${
                    isActive("/folie-okienne")
                      ? "bg-blue-light text-dark rounded-lg"
                      : ""
                  }`}
                >
                  <Link href="/folie-okienne">Folie okienne</Link>
                  <motion.div
                    animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {isSubmenuOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={submenuVariants}
                      className="absolute top-full left-0 mt-1 w-56 bg-white text-dark rounded-md shadow-lg z-50 border border-blue-light"
                    >
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
                        [
                          "Antywłamaniowe",
                          "/folie-okienne/folie-antywlamaniowe",
                        ],
                        ["Bezpieczne", "/folie-okienne/folie-bezpieczne"],
                        [
                          "Lustro weneckie",
                          "/folie-okienne/folie-lustro-weneckie",
                        ],
                        ["Matowe", "/folie-okienne/folie-matowe"],
                        ["Mrożone", "/folie-okienne/folie-mrozone"],
                      ].map(([title, href]) => (
                        <motion.div key={href} variants={itemVariants}>
                          <Link
                            href={href}
                            className="block px-4 py-2 hover:bg-blue-light hover:text-blue text-lg border-b border-blue-light last:border-b-0"
                            onClick={closeAllMenus}
                          >
                            {title}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <Link
                  href={item.href}
                  className={`px-4 xl:px-7 py-2 ${
                    isActive(item.href)
                      ? "bg-blue-light text-dark rounded-lg"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            )}
          </div>
        ))}
      </nav>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="lg:hidden text-white p-2"
        onClick={toggleMobileMenu}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="lg:hidden absolute top-full left-0 w-full bg-blue shadow-lg z-50"
          >
            <div className="flex flex-col text-light text-xl">
              <Link
                href="/o-nas"
                className={`py-3 px-4 sm:px-8 md:px-16  ${
                  isActive("/o-nas") ? "bg-blue-light text-dark " : ""
                }`}
                onClick={closeAllMenus}
              >
                O nas
              </Link>

              <div className="relative">
                <div
                  className={`flex justify-between items-center py-3 px-4 sm:px-8 md:px-16  ${
                    isActive("/folie-okienne")
                      ? "bg-blue-light text-dark rounded-lg"
                      : ""
                  }`}
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                >
                  <Link
                    href="/folie-okienne"
                    onClick={(e) => e.preventDefault()}
                  >
                    Folie okienne
                  </Link>
                  <motion.div
                    animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="mr-2" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isSubmenuOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={submenuVariants}
                      className="bg-blue-dark px-4 sm:px-8 md:px-16 mt-1 mb-2 rounded-lg"
                    >
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
                        [
                          "Antywłamaniowe",
                          "/folie-okienne/folie-antywlamaniowe",
                        ],
                        ["Bezpieczne", "/folie-okienne/folie-bezpieczne"],
                        [
                          "Lustro weneckie",
                          "/folie-okienne/folie-lustro-weneckie",
                        ],
                        ["Matowe", "/folie-okienne/folie-matowe"],
                        ["Mrożone", "/folie-okienne/folie-mrozone"],
                      ].map(([title, href]) => (
                        <motion.div key={href} variants={itemVariants}>
                          <Link
                            href={href}
                            className="block py-2 px-6 hover:bg-blue-light hover:text-dark text-lg"
                            onClick={closeAllMenus}
                          >
                            {title}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/montaz-i-wycena"
                className={`py-3 px-4 sm:px-8 md:px-16  ${
                  isActive("/montaz-i-wycena") ? "bg-blue-light text-dark " : ""
                }`}
                onClick={closeAllMenus}
              >
                Montaż i wycena
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
