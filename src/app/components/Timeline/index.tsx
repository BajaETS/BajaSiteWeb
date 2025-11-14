"use client"
import React from 'react';
import Image from 'next/image';

interface TimelineProps {
  position: number;
}

export default function Timeline({ position }: TimelineProps) {

  return (
    <div className="flex justify-center items-center fixed bottom-0 w-full mb-10 mt-20">
      <div className="relative w-[90%] h-0.5 bg-gray-300">

        <Image
          src="/History/RightSide.png"
          alt="Timeline"
          height={200}
          width={200}
          className="absolute top-[-75px] w-auto h-20"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        />
      </div>
    </div>
  );
}
