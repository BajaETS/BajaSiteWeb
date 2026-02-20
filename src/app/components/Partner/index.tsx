"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type PartnerProps = {
  name: string;
  image: string;
  link: string;
  height: string;
  width: string;
  index?: number;
  accentColor?: string;
  message?: string;
};

export default function Partner(props: PartnerProps) {
  const { name, image, link, height, width, index = 0, accentColor = "rgba(8, 156, 228, 0.4)", message } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.6),
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-xl
                 bg-neutral-900/60 backdrop-blur-sm border border-white/5
                 hover:border-white/15 transition-all duration-300 cursor-pointer"
      style={{
        boxShadow: `0 0 0px ${accentColor}`,
      }}
      onHoverStart={(e) => {
        const el = e.target as HTMLElement;
        if (el) el.style.boxShadow = `0 0 25px ${accentColor}`;
      }}
      onHoverEnd={(e) => {
        const el = e.target as HTMLElement;
        if (el) el.style.boxShadow = `0 0 0px ${accentColor}`;
      }}
      onClick={() => link && window.open(link, "_blank")}
    >
      <div
        className="flex items-center justify-center overflow-hidden"
        style={{ width, height }}
      >
        <Image
          src={image}
          alt={name}
          height={300}
          width={300}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
        />
      </div>
      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 text-center leading-tight">
        {name}
      </span>
      {message && (
        <p className="text-sm text-gray-400 text-center group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          {message}
        </p>
      )}
    </motion.div>
  );
}