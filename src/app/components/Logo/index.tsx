"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function Logo() {
  const nativeWidth = 1740;
  const nativeHeight = 779;

  const [scrollAmount, setScrollAmount] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollAmount(Math.min(window.scrollY / 500, 1))
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const divisor = 1.5 + 8.5 * scrollAmount;

  return (
    <div className='p-4 fixed top-0 left-0 flex items-start justify-start h-auto w-auto transition-all z-20'>
      <Image src='/logo2025.png' alt='LogoBaja' width={nativeWidth / divisor} height={nativeHeight / divisor} />
    </div>
  );
}
