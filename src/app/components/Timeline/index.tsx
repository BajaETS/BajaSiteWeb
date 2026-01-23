"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TimelineProps {
  position: number;
  isScrolling?: boolean;
  totalYears?: number;
  onPositionChange?: (newPosition: number) => void;
  dragHint?: string;
}

export default function Timeline({
  position,
  isScrolling = false,
  totalYears = 1,
  onPositionChange,
  dragHint = "drag me"
}: TimelineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!trackRef.current || !onPositionChange) return;

    const track = trackRef.current;
    const rect = track.getBoundingClientRect();

    let clientX: number;
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    onPositionChange(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleDrag(e);

    const handleMouseMove = (event: MouseEvent) => {
      handleDrag(event);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleDrag(e);

    const handleTouchMove = (event: TouchEvent) => {
      handleDrag(event);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    handleDrag(e);
  };

  return (
    <motion.div
      className="flex justify-center items-center fixed bottom-0 w-full mb-8 mt-20 px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div
        ref={trackRef}
        className="relative w-[90%] max-w-4xl 2xl:max-w-6xl cursor-pointer py-4"
        onClick={handleTrackClick}
      >
        {/* Timeline track background */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full" />

        {/* Progress fill */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full"
          style={{ width: `${position}%` }}
        />

        {/* Timeline dots */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>

        {/* Car indicator - simplified, no framer motion for positioning */}
        <div
          className={`absolute top-[-70px] 2xl:top-[-90px] cursor-grab active:cursor-grabbing select-none transition-transform duration-100 ${
            isDragging ? 'scale-110' : 'scale-100'
          }`}
          style={{
            left: `${position}%`,
            transform: `translateX(-50%) ${isDragging ? 'scale(1.1)' : 'scale(1)'}`
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Glow effect under car */}
          <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full blur-xl transition-all duration-200 ${
            isDragging ? 'bg-primary/60 w-20' : 'bg-primary/40'
          }`} />

          <Image
            src="/History/RightSide.png"
            alt="Timeline car"
            height={200}
            width={200}
            className="w-auto h-16 sm:h-20 2xl:h-24 drop-shadow-lg pointer-events-none"
            draggable={false}
          />

          {/* Drag hint - on top */}
          {!isDragging && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white/40 whitespace-nowrap">
              {dragHint}
            </div>
          )}
        </div>

        {/* Year markers */}
        <div className="absolute -bottom-6 left-0 text-xs 2xl:text-sm text-white/50 font-bebas">
          2026
        </div>
        <div className="absolute -bottom-6 right-0 text-xs 2xl:text-sm text-white/50 font-bebas">
          1989
        </div>
      </div>
    </motion.div>
  );
}
