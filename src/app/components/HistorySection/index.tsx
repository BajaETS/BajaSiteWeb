"use client";
import React, { useState, useRef, useEffect } from "react";
import Timeline from "../Timeline";
import HistoryYear from "../HistoryYear";
import { useTranslations } from "next-intl";

type HistoryYearProps = {
  image: string;
  year: string;
  text: string;
};

export default function HistorySection() {
  const [position, setPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("pages");

  // Extraire et trier les années de l'historique en ordre décroissant
  const sections: HistoryYearProps[] = t.raw("history.years")
    .sort((a: HistoryYearProps, b: HistoryYearProps) => parseInt(b.year) - parseInt(a.year));

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollLeft = ref.current.scrollLeft;
        const scrollWidth = ref.current.scrollWidth - ref.current.clientWidth;
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        setPosition(scrollPercentage);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (ref.current) {
        ref.current.scrollLeft += event.deltaY;
      }
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
      ref.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
        ref.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <div ref={ref} className="overflow-x-auto no-scrollbar h-full overflow-y-hidden">
        <div 
          className="grid grid-flow-col gap-6 sm:gap-8 md:gap-12"
          style={{ gridAutoColumns: "minmax(400px, 1fr)" }}
        >
          {sections.map(({ image, year, text }) => (
            <div 
              key={year} 
              className={`flex flex-col w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto ${text === "" ? "justify-center items-center" : ""}`}
            >
              <HistoryYear image={image} year={year} text={text} />
            </div>
          ))}
        </div>
      </div>
      <Timeline position={position} />
    </>
  );
}
