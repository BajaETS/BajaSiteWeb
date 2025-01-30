import React from 'react';
import { TMemberPopup } from './interface';
import { useScrollLock } from 'usehooks-ts';
import Image from "next/image";


export default function MemberPopup(props: TMemberPopup) {

  const { onClose, image, children } = props

  useScrollLock()

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="w-[60%] md:w-full text-white p-5 bg-neutral-900 rounded-2xl relative max-w-[700px] h-auto text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 bg-none border-none text-base cursor-pointer text-white"
          onClick={onClose}
        >
          <img src='/x-white.png' width='25' height='25'></img>
        </button>
        <div className="flex flex-col md:flex-row items-center h-full ">
          <Image
            src={image}
            alt="Member"
            width={300}
            height={300}
            className="mb-5 w-full h-auto md:w-[300px] md:h-[300px] m-8 object-cover rounded-full"
            sizes="(max-width: 768px) 150px, 250px"
            quality={90}
          />
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}