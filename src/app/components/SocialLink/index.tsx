"use client";
import { TSocialLink } from "./interface";
import Image from "next/image";

const SocialLink = (props: TSocialLink) => {
  const { href, image, alt } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/10"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-lg transition-all duration-300" />

      <Image
        className="relative opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
        src={image}
        alt={alt}
        width={28}
        height={28}
      />
    </a>
  );
};

export default SocialLink;
