"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Review {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://rcv0fayzje.execute-api.eu-north-1.amazonaws.com/default/dragon-folie-opinie",
          {
            headers: {
              accept: "application/json",
            },
          },
        );
        const raw = await response.json();
        const data = typeof raw.body === "string" ? JSON.parse(raw.body) : raw;
        // console.log(data.data.result.reviews);
        setReviews(data.data.result.reviews || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        ease: "easeOut",
      },
    }),
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="px-4 sm:px-8 md:px-16 py-12 md:py-20 flex justify-center items-center">
        <div className="animate-pulse text-blue text-xl">
          Ładowanie opinii...
        </div>
      </div>
    );
  }

  if (error || reviews.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="px-4 sm:px-8 md:px-16 py-12 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-50 opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-32 h-32 rounded-full bg-blue-50 opacity-50"></div>

      <motion.div
        variants={item}
        className="flex flex-col items-center mb-12 md:mb-16 relative z-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
          <span className="relative inline-block">
            <span className="relative z-10">
              Zaufali nam klienci z Krakowa i&nbsp;okolic
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-2 bg-blue-light origin-left"
            />
          </span>
        </h3>
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/icons/GoogleIcon.svg"
            alt="Google"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-gray-600 font-medium">Opinie z Google</span>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-7xl mx-auto"
      >
        {reviews.slice(0, 6).map((review, index) => (
          <motion.a
            key={review.time}
            href={review.author_url}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-4">
              <Image
                src={review.profile_photo_url}
                alt={review.author_name}
                width={48}
                height={48}
                className="rounded-full w-12 h-12 flex-shrink-0"
                unoptimized
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-800 truncate">
                  {review.author_name}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {review.relative_time_description}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
              {review.text}
            </p>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        variants={item}
        className="flex justify-center mt-12 relative z-10"
      >
        <a
          href="https://maps.app.goo.gl/Dbfc7SNUvfvNDt857"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue text-white rounded-lg font-semibold hover:bg-blue-dark transition-colors shadow-md hover:shadow-lg"
        >
          Zobacz wszystkie opinie
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}
