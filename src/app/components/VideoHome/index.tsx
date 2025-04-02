"use client";

import React, { ElementRef, useEffect, useRef } from 'react';

export function VideoHome() {
  const videoRef = useRef<ElementRef<'video'>>(null);

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        videoRef.current.style.width = `${width}px`;
        videoRef.current.style.height = `${height}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div className="w-full h-full -z-[1]">
        <div className='bg-gradient-to-t from-black from-10% absolute w-screen z-10 h-screen'></div>
        <video
          className='
            absolute
            top-[50%] 
            left-[50%] 
            min-w-full 
            min-h-full 
            object-cover 
            -translate-x-1/2 
            -translate-y-1/2
          '
          ref={videoRef}
          src='/videoReveal2025.mp4'
          autoPlay
          muted
          loop
          playsInline // Prevents fullscreen on iOS
          webkit-playsinline // Older iOS versions
          controls={false}
        />
      </div>
  );
};
