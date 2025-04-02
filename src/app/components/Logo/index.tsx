"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMotionValueEvent, useScroll } from "motion/react"

export function Logo() {
  const nativeWidth = 1740;
  const nativeHeight = 779;

  const [scrollY, setScrollY] = useState<number>(0)

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest)
  })

  return (
    <div className='p-4 fixed top-0 left-0 flex items-start justify-start h-auto w-auto transition-all z-20'>
      <Image src='/logo2025.png' alt='LogoBaja' width={nativeWidth / (1.5 + 8.5 *scrollY) } height={nativeHeight / (1.5 + 8.5 *scrollY) } />
    </div>
  );
}
