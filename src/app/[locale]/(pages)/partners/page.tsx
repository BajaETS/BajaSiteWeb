"use client"
import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import Partner from "@/app/components/Partner";
import { motion } from "framer-motion";
import { SPONSORS, SPONSOR_TIERS, TIER_ORDER } from "@/content/sponsors";
import type { SponsorTierId } from "@/content/types";

/**
 * The sponsors page.
 *
 * There is no sponsor data in this file. Every name, logo and link lives in
 * src/content/sponsors.ts. This file only decides how they are laid out.
 */

/**
 * Tailwind classes per tier. Typed as a full Record, so adding a tier to
 * SponsorTierId without adding its styling here fails the build instead of
 * silently rendering the new tier as bronze.
 */
const tierAccents: Record<SponsorTierId, { color: string; glow: string; badge: string }> = {
  platinum: {
    color: "text-gray-200",
    glow: "rgba(229, 231, 235, 0.35)",
    badge: "bg-gray-300/20 text-gray-200 border-gray-300/30",
  },
  gold: {
    color: "text-amber-400",
    glow: "rgba(251, 191, 36, 0.35)",
    badge: "bg-amber-400/20 text-amber-400 border-amber-400/30",
  },
  silver: {
    color: "text-gray-400",
    glow: "rgba(156, 163, 175, 0.3)",
    badge: "bg-gray-400/20 text-gray-300 border-gray-400/30",
  },
  bronze: {
    color: "text-brand-orange",
    glow: "rgba(247, 153, 0, 0.3)",
    badge: "bg-brand-orange/20 text-brand-orange border-brand-orange/30",
  },
};

/** Pick a column count that avoids a lonely logo on the last row. */
function getBalancedColumns(count: number, maxCols: number): number {
  if (count <= maxCols) return count;
  for (let cols = maxCols; cols >= 2; cols--) {
    const remainder = count % cols;
    if (remainder === 0 || remainder >= Math.ceil(cols / 2)) return cols;
  }
  return maxCols;
}

export default function Partners() {
  const t = useTranslations()

  const openPDF = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <Page>
      <div>
      {/* Hero section with animated title */}
      <motion.div
        className="text-center pt-8 pb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bebas mb-4 bg-gradient-to-r from-primary to-brand-red-light bg-clip-text text-transparent [-webkit-background-clip:text]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('partners.title')}
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t('partners.message')}
        </motion.p>

        {/* Animated decorative line */}
        <motion.div
          className="mt-6 mx-auto h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {/* Portfolio CTA button */}
      <motion.div
        className="flex justify-center pb-12 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.button
          onClick={openPDF.bind(null, t('partners.portfolio'))}
          className="relative bg-primary/90 px-10 py-3 rounded-full font-bebas text-2xl text-white
                     hover:bg-brand-orange transition-all duration-300 shadow-lg shadow-primary/20
                     hover:shadow-brand-orange/40 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {t('partners.portfolio-button-text')}
        </motion.button>
      </motion.div>

      {/* Partner sections, one per tier */}
      {TIER_ORDER.map((tierId, sectionIndex) => {
        const tierConfig = SPONSOR_TIERS[tierId];
        const accent = tierAccents[tierId];
        const partners = SPONSORS.filter((s) => s.active && s.tier === tierId);
        if (partners.length === 0) return null;

        const boxWidth = `${tierConfig.logoWidth}px`;
        const boxHeight = tierConfig.logoHeight ? `${tierConfig.logoHeight}px` : "auto";

        const itemWidth = tierConfig.logoWidth + 60;
        const gap = 20;
        const estimatedMaxCols = Math.floor((1300 + gap) / (itemWidth + gap));
        const balancedCols = getBalancedColumns(partners.length, estimatedMaxCols);
        const gridMaxWidth = balancedCols * itemWidth + (balancedCols - 1) * gap;

        return (
          <section key={tierId} className="mb-12">
            {/* Animated Section Header */}
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[80px] blur-3xl rounded-full"
                style={{ backgroundColor: accent.glow }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              <h2 className="relative text-5xl md:text-6xl font-bebas text-center text-white">
                {/* Decorative brackets */}
                <motion.span
                  className={`${accent.color} mr-4`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {"["}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {t(tierConfig.labelKey as never)}
                </motion.span>
                <motion.span
                  className={`${accent.color} ml-4`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {"]"}
                </motion.span>
              </h2>

              {/* Partner count badge */}
              <motion.div
                className="flex justify-center mt-3"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span className={`px-4 py-1 text-sm rounded-full border ${accent.badge}`}>
                  {t('partners.partner-count', { count: partners.length })}
                </span>
              </motion.div>
            </motion.div>

            {/* Partners Grid */}
            <div className="flex justify-center">
              <div
                className="pt-4 pb-8 px-5 md:px-12 lg:px-24 flex flex-wrap justify-center gap-5 w-full"
                style={{
                  maxWidth: `${gridMaxWidth}px`,
                }}
              >
                {partners.map((partner, pIndex) => (
                  <div key={partner.name} style={{ width: `${itemWidth}px`, maxWidth: '100%' }}>
                    <Partner
                      name={partner.name}
                      image={partner.logo}
                      link={partner.link}
                      height={boxHeight}
                      width={boxWidth}
                      index={pIndex}
                      accentColor={accent.glow}
                      message={partner.messageKey ? t(partner.messageKey as never) : undefined}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section divider (except for last) */}
            {sectionIndex < TIER_ORDER.length - 1 && (
              <motion.div
                className="flex justify-center items-center gap-3 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
                <div className="w-2 h-2 rounded-full bg-primary/50" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
              </motion.div>
            )}
          </section>
        );
      })}

      {/* Footer decoration */}
      <motion.div
        className="text-center pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 text-sm italic">
          {t('partners.message-short')}
        </p>
      </motion.div>
      </div>
    </Page>
  );
}
