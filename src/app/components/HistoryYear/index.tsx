"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HistoryYearProps {
  image: string;
  year: string;
  text: string;
  index?: number;
}

export default function HistoryYear({ image, year, text, index = 0 }: HistoryYearProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hasAward = text && text.trim() !== "";

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex flex-col items-center p-4 sm:p-5 lg:p-6 rounded-2xl
                 bg-gradient-to-b from-neutral-800 to-neutral-900
                 text-gray-100 w-full max-w-xs sm:max-w-sm lg:max-w-md 2xl:max-w-lg m-2
                 border border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Year Badge */}
      <motion.div
        className={`relative mb-4 ${hasAward ? "" : "mb-6"}`}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
        <h2 className="relative text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bebas text-white px-4 py-1">
          {year}
        </h2>
      </motion.div>

      {/* Award Badge (if applicable) */}
      {hasAward && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 px-4 py-1 bg-primary/20 rounded-full border border-primary/40"
        >
          <p className="text-primary text-xs sm:text-sm lg:text-base font-medium text-center">
            {text}
          </p>
        </motion.div>
      )}

      {/* Image Container */}
      <div
        className={`relative w-full h-40 sm:h-48 lg:h-56 2xl:h-64 rounded-xl overflow-hidden transition-all duration-300 ${
          isHovered ? "ring-2 ring-primary/60" : ""
        }`}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

        <Image
          src={image}
          alt={`Year ${year}`}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />

        {/* Year overlay on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bebas text-white/90 drop-shadow-lg">
            {year}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
