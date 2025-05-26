"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSubmenuOpen(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navItemVariants = {
    hover: { scale: 1.15 },
    tap: { scale: 0.95 },
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: { opacity: 0, y: -10 },
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className="fixed top-0 w-full bg-blue flex justify-between items-center px-32 py-[10px] z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image src="/logo.jpg" alt="logo" width={80} height={80} />
        </motion.div>
      </Link>

      <div className="flex flex-row text-light text-2xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
        <Link
          href="/o-nas"
          className={`hover:scale-[115%] px-7 py-2.5 ${
            isActive("/o-nas") ? "bg-blue-light text-dark rounded-xl" : ""
          }`}
        >
          O nas
        </Link>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={submenuRef}
        >
          <motion.div
            className={`flex items-center gap-1 cursor-pointer px-7 py-2.5 ${
              isSubmenuOpen ? "scale-[115%]" : "scale-100"
            } ${
              isActive("/folie-okienne")
                ? "bg-blue-light text-dark rounded-xl"
                : ""
            }`}
            variants={navItemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link href="/folie-okienne">Folie okienne</Link>
            <motion.div
              animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown />
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {isSubmenuOpen && (
              <motion.div
                className="absolute top-full -left-[67px] mt-2 w-76 bg-white text-dark rounded-md shadow-lg z-50"
                variants={submenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  href="/folie-okienne/folie-anty-uv"
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue rounded-t-md border-b border-blue"
                >
                  Folie Anty UV
                </Link>
                <Link
                  href="/folie-okienne/folie-przeciwsloneczne"
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue border-b border-blue"
                >
                  Folie przeciwsłoneczne
                </Link>
                <Link
                  href="/folie-okienne/folie-przeciwsloneczne-na-swietliki-z-poliweglanu"
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue border-b border-blue"
                >
                  Folie przeciwsłoneczne na świetliki z&nbsp;poliwęglanu
                </Link>
                <Link
                  href="/folie-okienne/folie-antywlamaniowe"
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue border-b border-blue"
                >
                  Folie antywłamaniowe
                </Link>
                <Link
                  href="/folie-okienne/folie-bezpieczne"
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue border-b border-blue"
                >
                  Folie bezpieczne
                </Link>
                <Link
                  href="/folie-okienne/folie-lustro-weneckie"
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue border-b border-blue"
                >
                  Folie lustro weneckie
                </Link>
                <Link
                  href="/folie-okienne/folie-matowe"
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue border-b border-blue"
                >
                  Folie matowe
                </Link>
                <Link
                  href="/folie-okienne/folie-mrozone"
                  className="block px-4 py-2 hover:bg-blue-light hover:text-blue rounded-b-md"
                >
                  Folie mrożone
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          href="/montaz-i-wycena"
          className={`hover:scale-[115%] px-7 py-2.5 ${
            isActive("/montaz-i-wycena")
              ? "bg-blue-light text-dark rounded-xl"
              : ""
          }`}
        >
          Montaż i&nbsp;wycena
        </Link>
        <Link
          href="/nasze-realizacje"
          className={`hover:scale-[115%] px-7 py-2.5 ${
            isActive("/nasze-realizacje")
              ? "bg-blue-light text-dark rounded-xl"
              : ""
          }`}
        >
          Nasze realizacje
        </Link>
        <Link
          href="/kontakt"
          className={`hover:scale-[115%] px-7 py-2.5 ${
            isActive("/kontakt") ? "bg-blue-light text-dark rounded-xl" : ""
          }`}
        >
          Kontakt
        </Link>
      </div>
    </motion.header>
  );
}
