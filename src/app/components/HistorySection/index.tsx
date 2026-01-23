"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Timeline from "../Timeline";
import HistoryYear from "../HistoryYear";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type HistoryYearProps = {
  image: string;
  year: string;
  text: string;
};

export default function HistorySection() {
  const [position, setPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("pages");

  // Extract and sort history years in descending order
  const sections: HistoryYearProps[] = t.raw("history.years")
    .sort((a: HistoryYearProps, b: HistoryYearProps) => parseInt(b.year) - parseInt(a.year));

  // Handle scroll position change from Timeline drag
  const handlePositionChange = useCallback((newPosition: number) => {
    if (ref.current) {
      const scrollWidth = ref.current.scrollWidth - ref.current.clientWidth;
      const newScrollLeft = (newPosition / 100) * scrollWidth;
      ref.current.scrollLeft = newScrollLeft;
      setPosition(newPosition);
    }
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (ref.current) {
        const scrollLeft = ref.current.scrollLeft;
        const scrollWidth = ref.current.scrollWidth - ref.current.clientWidth;
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        setPosition(scrollPercentage);
        setIsScrolling(true);

        // Reset scrolling state after scroll ends
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (ref.current) {
        event.preventDefault();
        ref.current.scrollLeft += event.deltaY;
      }
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
      ref.current.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
        ref.current.removeEventListener("wheel", handleWheel);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="relative h-full">
      {/* Scroll hint arrows */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: position > 5 ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-white/40 text-4xl">‹</div>
      </motion.div>
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: position < 95 ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-white/40 text-4xl">›</div>
      </motion.div>

      {/* Scrollable container */}
      <div
        ref={ref}
        className="overflow-x-auto no-scrollbar mb-[120px] h-full overflow-y-hidden px-8 sm:px-12"
      >
        <motion.div
          className="grid grid-flow-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-4"
          style={{ gridAutoColumns: "minmax(280px, 380px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {sections.map(({ image, year, text }, index) => (
            <div
              key={year}
              className="flex flex-col w-full mx-auto"
            >
              <HistoryYear
                image={image}
                year={year}
                text={text}
                index={index}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Timeline with drag support */}
      <Timeline
        position={position}
        isScrolling={isScrolling}
        totalYears={sections.length}
        onPositionChange={handlePositionChange}
        dragHint={t("history.drag-hint")}
      />
    </div>
  );
}
