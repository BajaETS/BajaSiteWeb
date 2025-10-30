"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Carousel({ slides }: { slides: string[] }) {
    const t = useTranslations('carousel');
    const images = slides.map((slide) => `/Media/${slide}`);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return (
      <>
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>
          previous
        </button>
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <Image key={currentIndex} src={images[currentIndex]} alt={t('carousel image', { index: currentIndex })} width={500} height={300} />
          </div>
        </div>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>
          next
        </button>
      </>
    );
}