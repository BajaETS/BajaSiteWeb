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
      <div className="relative w-full h-screen z-0 overflow-hidden">
        <div className='bg-gradient-to-t from-black from-10% absolute bottom-0 w-screen z-10 h-[105%]'></div>
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
          src='/videoReveal2026.mp4'
          autoPlay
          muted
          loop
          playsInline
          // @ts-ignore - webkit-playsinline for older iOS versions
          webkitPlaysInline=""
          controls={false}
        />
      </div>
  );
};
