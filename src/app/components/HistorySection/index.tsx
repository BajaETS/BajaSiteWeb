"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Timeline from "../Timeline";
import HistoryYear from "../HistoryYear";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HISTORY } from "@/content/history";

export default function HistorySection() {
  const [position, setPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  // HISTORY is already newest-first (see src/content/history.ts). Do not sort in
  // place here: the array is shared module state, and mutating it would reorder
  // the timeline for every later render.
  const sections = HISTORY;
  const years = sections.map((entry) => entry.year);

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
    // Copy the node into a local so the cleanup below removes the listeners from the
    // same element the effect added them to, even if the ref has moved on by then.
    const node = ref.current;
    if (!node) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      {
        const scrollLeft = node.scrollLeft;
        const scrollWidth = node.scrollWidth - node.clientWidth;
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        setPosition(scrollPercentage);
        setIsScrolling(true);

        // Reset scrolling state after scroll ends
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      node.scrollLeft += event.deltaY;
    };

    node.addEventListener("scroll", handleScroll);
    node.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      node.removeEventListener("scroll", handleScroll);
      node.removeEventListener("wheel", handleWheel);
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
          {sections.map(({ image, year, textKey }, index) => (
            <div
              key={year}
              className="flex flex-col w-full mx-auto"
            >
              <HistoryYear
                image={image}
                year={String(year)}
                text={t(textKey as never)}
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
        dragHint={t("pages.history.drag-hint")}
        newestYear={Math.max(...years)}
        oldestYear={Math.min(...years)}
      />
    </div>
  );
}
