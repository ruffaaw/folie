"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import BottomContact from "@/components/BottomContact";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const galleryImages = [
    "/folia_lustrzana_zewnatrz.webp",
    "/fasada.webp",
    "/folia_mrozona_zewnatrz.webp",
    "/matowa-wewnatrz.webp",
  ];

  return (
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <Header />
      <Title title="DOWÓD NASZEJ JAKOŚCI" />

      <h1 className="mt-4 md:mt-7">
        <span className="text-blue">NASZE REALIZACJE</span>
      </h1>

      <h2 className="mt-4 md:mt-7 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        Zobacz przykłady naszych prac i&nbsp;inspiracje dla Twojego projektu
      </h2>

      <div className="w-full lg:w-4/6 mt-4 md:mt-7">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center rounded-lg">
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={1200}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 mt-12 md:mt-16">
        <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-dark rounded-xl lg:rounded-2xl text-light">
          <h3 className="text-center mb-4 md:mb-6">
            Śledź nasze najnowsze realizacje w&nbsp;social media
          </h3>
          <div className="flex gap-6 md:gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white hover:scale-110 transition-transform"
              aria-label="Nasz Instagram"
            >
              <Instagram className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full text-white hover:scale-110 transition-transform"
              aria-label="Nasz Facebook"
            >
              <Facebook className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>
          <p className="mt-4 md:mt-6 text-center" style={{ color: "#fff" }}>
            Codziennie nowe zdjęcia i&nbsp;inspiracje #TwojaMarka
          </p>
        </div>
      </div>

      <BottomContact
        title="Zainspirowany naszymi realizacjami?"
        className="mt-12 md:mt-16"
      />

      <Footer />
    </div>
  );
}
