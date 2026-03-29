"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
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
    image: "/Footer/youtubelogoWhite.png",
    alt: "Youtube"
  }
]

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: t("home") },
    { href: "/team", label: t("team") },
    { href: "/partners", label: t("partners") },
    { href: "/prizes", label: t("prizes") }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-t from-black via-black to-transparent border-t border-white/10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bebas text-lg tracking-wide">{t("title")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bebas text-lg tracking-wide">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#f79900] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white font-bebas text-lg tracking-wide">{t("connect")}</h3>
            <div className="flex items-center justify-start md:justify-start gap-4">
              {socialLinks.map((icon) => (
                <SocialLink key={icon.href} {...icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-hemi">
            &copy; {currentYear} {t("title")} {t("copyright")}
          </p>
          <p className="text-gray-600 text-xs">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
