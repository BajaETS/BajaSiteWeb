"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SEASON } from '@/content/season';

export function Logo() {
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
      <Image
        src={SEASON.logo}
        alt='Baja ÉTS'
        width={SEASON.logoWidth / divisor}
        height={SEASON.logoHeight / divisor}
        priority
      />
    </div>
  );
}
