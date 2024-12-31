import React from "react";
import LocaleSwitcher from "../LocaleSwitcher";
import { TSocialLink } from "../SocialLink/interface";
import SocialLink from "../SocialLink";

const socialLinks: TSocialLink[] = [
  {
    href: "https://www.facebook.com/BajaETS",
    image: "/Footer/facebookLogoWhite.png",
    alt: "Facebook"
  },
  {
    href: "https://www.instagram.com/baja_ets/",
    image: "/Footer/instagramLogoWhite.png",
    alt: "Instagram"
  },
  {
    href: "https://www.linkedin.com/company/baja-ets/",
    image: "/Footer/linkedInLogoWhite.png",
    alt: "LinkedIn"
  },
  {
    href: "https://www.youtube.com/user/TheBajaETS",
    image: "/Footer/youtubeLogoWhite.png",
    alt: "Youtube"
  }
]

export default function Footer() {
  return (
    <footer className="border-t  border-[#ffffff25] text-center relative px-2 w-[90%] font-bebas text-base my-0 mx-auto">
      <div className="flex items-center justify-center gap-12 m-3">
        {socialLinks.map((icon) => <SocialLink key={icon.href} {...icon} />)}
      </div>
      <LocaleSwitcher />
      <p className="text-white text-sm font-hemi m-0 p-2 opacity-50">
        &copy; BajaÉTS - 2024
      </p>
    </footer>
  );
}
