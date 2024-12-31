"use client"
import React from 'react';

export default function Timeline({ position }) {

  return (
    <div className="flex justify-center items-center fixed bottom-0 w-full mb-10 mt-20">
      <div className="relative w-[90%] h-0.5 bg-gray-300">

        <img
          src="/History/RightSide.png"
          alt="Timeline"
          className="absolute top-[-75px] w-auto h-20"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        />
      </div>
    </div>
  );
}
