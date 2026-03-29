"use client";

import React, { useState } from "react";
import Image from "next/image";
import MemberPopup from "../MemberPopup";
import { useTranslations } from "next-intl";
import { TMemberProps } from "./inteface";
import { motion } from "framer-motion";

interface MemberWithAnimationProps extends TMemberProps {
  index?: number;
}

export default function Member(props: MemberWithAnimationProps) {
  const { image, program, roles, nickname, name, linkedin, index = 0 } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("team");

  return (
    <>
      {/* Member Card with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="flex flex-col items-center"
      >
        {/* Image Container - NO scale on container, only on image inside */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
        >
          {/* Glow Ring Effect - separate from the clipping container */}
          <div
            className={`absolute -inset-3 rounded-full bg-gradient-to-r from-[#f79900] via-[#ffb340] to-[#f79900] blur-md transition-opacity duration-300 pointer-events-none ${
              isHovered ? "opacity-60" : "opacity-0"
            }`}
          />

          {/* Circular Image Container - NO transforms on this element */}
          <div
            className={`relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden transition-shadow duration-300 ${
              isHovered ? "ring-4 ring-[#f79900]/80" : ""
            }`}
          >
            {/* Image - scale happens ONLY here */}
            <Image
              src={image}
              alt={name}
              fill
              className={`object-cover transition-all duration-300 ${
                isHovered ? "brightness-[0.6] scale-110" : "brightness-100 scale-100"
              }`}
              sizes="(max-width: 768px) 200px, 250px"
              quality={85}
              priority={false}
            />

            {/* Name Overlay on Hover */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className={`text-white font-bebas text-2xl md:text-3xl text-center px-4 transition-transform duration-300 ${
                  isHovered ? "translate-y-0" : "translate-y-4"
                }`}
              >
                {name}
              </p>
              <p
                className={`text-primary text-sm md:text-base text-center px-4 mt-1 transition-all duration-300 delay-75 ${
                  isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {roles}
              </p>
              <div
                className={`mt-3 text-white/80 text-sm transition-all duration-200 delay-100 ${
                  isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                {t("click-to-learn-more")}
              </div>
            </div>
          </div>
        </div>

        {/* Name below the image */}
        <div
          className={`mt-4 text-center transition-opacity duration-300 ${
            isHovered ? "opacity-50" : "opacity-100"
          }`}
        >
          <p className="text-white font-bebas text-xl md:text-2xl">{name}</p>
          <p className="text-gray-400 text-sm">{roles}</p>
        </div>
      </motion.div>

      {/* Popup Modal */}
      {isOpen && (
        <MemberPopup onClose={() => setIsOpen(false)} image={image}>
          <h1 className="text-2xl font-bebas mb-2 text-primary">{name}</h1>
          <div className="space-y-2 text-gray-300">
            <p className="text-lg">{program}</p>
            <p>
              <span className="text-primary">{t("role")}:</span> {roles}
            </p>
            {nickname && (
              <p>
                <span className="text-primary">{t("nickname")}:</span> {nickname}
              </p>
            )}
          </div>

          {/* LinkedIn Logo */}
          {linkedin && (
            <a
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full hover:bg-[#f79900]/40 transition-all"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Footer/linkedInLogoWhite.png"
                alt="LinkedIn"
                width={24}
                height={24}
                priority={false}
              />
              <span className="text-white text-sm">{t("connect-linkedin")}</span>
            </a>
          )}
        </MemberPopup>
      )}
    </>
  );
}
