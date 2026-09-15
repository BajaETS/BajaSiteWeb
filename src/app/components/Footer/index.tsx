"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import SocialLink from "../SocialLink";
import { HOME_NAV_ITEM, NAV_ITEMS, SOCIAL_LINKS } from "@/content/navigation";

/**
 * The site footer.
 * Its link list and social icons come from src/content/navigation.ts, the same
 * file the header menu uses, so the two can never drift apart.
 */
export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const quickLinks = [HOME_NAV_ITEM, ...NAV_ITEMS];

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
            <h3 className="text-white font-bebas text-lg tracking-wide">{t("footer.title")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bebas text-lg tracking-wide">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors duration-300"
                  >
                    {t(link.labelKey as never)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white font-bebas text-lg tracking-wide">{t("footer.connect")}</h3>
            <div className="flex items-center justify-start md:justify-start gap-4">
              {SOCIAL_LINKS.map((icon) => (
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
            &copy; {currentYear} {t("footer.title")} {t("footer.copyright")}
          </p>
          <p className="text-gray-600 text-xs">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
