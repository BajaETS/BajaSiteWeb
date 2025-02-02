"use client";
import React from "react";
import Image from "next/image";

interface HistoryYearProps {
  image: string;
  year: number;
  text: string;
}

export default function HistoryYear({ image, year, text }: HistoryYearProps) {
  return (
    <div
      className="flex flex-col items-center p-4 sm:p-6 rounded-xl shadow-md 
                 bg-neutral-900 text-gray-100 transition-all duration-300 
                 transform hover:scale-[1.03] w-full max-w-xs sm:max-w-md 
                 m-2 h-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-white">{year}</h2>
      
      <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden my-4">
        <Image
          src={image}
          alt={`Year ${year}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false} // Set to true for important images
        />
      </div>

      <p className="text-base sm:text-lg text-gray-300 text-center">{text}</p>
    </div>
  );
}
