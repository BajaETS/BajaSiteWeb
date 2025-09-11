"use client"; // needed if you use Next.js App Router (app/)

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional icons

type CarouselProps = {
  slides: string[];
};

export default function Carousel({ slides }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 px-2"
              key={index}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-auto rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
