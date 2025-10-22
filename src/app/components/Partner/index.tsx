"use client";
import Image from "next/image";

import React from "react";
import { useTranslations } from "next-intl";

export default function Partner(props: { name: any; image: any; link: any; height: any, width: any }) {

  const { name, image, link, height, width } = props

  const t = useTranslations('team')

  return (
    <>
      <div
      className="my-0 mx-auto overflow-hidden flex justify-center items-center cursor-pointer"
      style={{ width: width, height: height }}        
      onClick={() => window.open(link, 'mywindow')}
      >
        <Image
          src={image} 
          alt={name} 
          height={300}
          width={300}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
    </>
  );
}