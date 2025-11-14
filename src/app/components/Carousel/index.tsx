"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Carousel({ slides }: { slides: string[] }) {
    const t = useTranslations('carousel');
    const images = slides.map((slide) => `/Media/${slide}`);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return (
      <div className="w-full h-[50vh] flex items-center p-4">
        <button 
          className="hover:scale-125 transition-transform duration-200" 
          onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        >
          <Image
            src="/icons/arrow_left.png"
            alt={t('previous')}
            width={48}
            height={48}
          />
        </button>
        <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
          <Image
            key={currentIndex}
            quality={40}
            src={images[currentIndex]}
            alt="image"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <button 
          className="hover:scale-125 transition-transform duration-200" 
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          <Image
            src="/icons/arrow_right.png"
            alt={t('next')}
            width={48}
            height={48}
          />
        </button>
      </div>
    );
}