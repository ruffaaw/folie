"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { offers } from "@/data/offers";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-[80px] md:mt-[100px] flex flex-col items-center justify-center overflow-hidden">
      <Header />
      <h1 className="mt-8 sm:mt-12 md:mt-16 text-center">
        <span className="text-dark">Folie okienne</span>
      </h1>
      <h2 className="mt-4 md:mt-7  max-w-[90vw] md:max-w-[1030px] text-center">
        Nowoczesne rozwiązania dostosowane do Twoich potrzeb
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full justify-items-center px-4 sm:px-8 md:px-16 lg:px-32 gap-5 my-10 ">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-[12px] flex flex-col"
          >
            <div className="w-full relative" style={{ aspectRatio: "390/244" }}>
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover w-full h-full rounded-t-[12px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                unoptimized
              />
            </div>
            <div className="flex flex-col p-6 gap-2 items-stretch h-full justify-between">
              <div>
                <h3 style={{ fontSize: "1.5rem" }}>{offer.title}</h3>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    textAlign: "justify",
                  }}
                >
                  {offer.description}
                </p>
                <div className="gap-2 flex flex-wrap mt-2">
                  {offer.advantages.map((advantage, advIndex) => (
                    <div
                      key={advIndex}
                      className="flex items-center py-1 px-2.5 bg-blue-light rounded-full"
                    >
                      <p style={{ fontSize: "0.8rem", color: "#003d66" }}>
                        {advantage}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="gap-2 flex flex-wrap mt-2">
                  {offer.places.map((place, placeIndex) => (
                    <div
                      key={placeIndex}
                      className="flex items-center py-1 px-2.5 bg-gray rounded-full"
                    >
                      <p style={{ fontSize: "0.8rem", color: "#fff" }}>
                        {place}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={offer.href}
                className="flex items-center gap-1 text-blue w-fit hover:scale-110 mt-4"
              >
                Zobacz szczegóły <ArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
