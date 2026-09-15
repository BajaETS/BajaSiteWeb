"use client"
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS } from "@/theme/tokens.mjs";

/**
 * Oktoberfest greens, used only on this page's decorative background.
 * They are not brand colours, so they are not in src/theme/tokens.mjs.
 */
const EVENT_GREEN = "#1a472a";
const EVENT_GREEN_LIGHT = "#2d5a3d";

/**
 * Positions and timings for the 20 decorative floating particles.
 *
 * These are fixed values rather than Math.random(). The page is rendered once on the
 * server and again in the browser; random values differ between the two, so React
 * reported a hydration mismatch in the console on every visit. Fixed numbers look the
 * same and render identically in both places.
 */
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  left: ((i * 37) % 100) + (i % 3),
  top: ((i * 61) % 100) + (i % 5),
  duration: 3 + ((i * 7) % 20) / 10,
  delay: ((i * 13) % 20) / 10,
}));

export default function Bajameister() {
  const t = useTranslations('pages.bajameister');

  const joinLink = "https://www.zeffy.com/fr-CA/ticketing/bajameister";
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=530+rue+Peel,+Montreal,+QC";

  return (
    <main className="h-full overflow-x-hidden">
      {/* Hero Section with Jagermeister theme */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated gradient background - Jagermeister colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-black to-green-950">
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                `radial-gradient(circle at 20% 50%, ${COLORS.red} 0%, transparent 50%)`,
                `radial-gradient(circle at 80% 50%, ${EVENT_GREEN} 0%, transparent 50%)`,
                `radial-gradient(circle at 50% 80%, ${COLORS.red} 0%, transparent 50%)`,
                `radial-gradient(circle at 20% 50%, ${COLORS.red} 0%, transparent 50%)`,
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Floating particles effect - Orange and Green */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? COLORS.red : EVENT_GREEN_LIGHT,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bebas mb-4 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-bebas text-red-100/90 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('subtitle')}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('intro')}
          </motion.p>

          {/* Event Details */}
          <motion.div
            className="flex flex-col items-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-red-100/90 text-lg md:text-xl font-bebas">
              <span>{t('event-date')}</span>
              <span className="hidden sm:inline text-brand-red">|</span>
              <span>{t('event-time')}</span>
            </div>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-red hover:text-brand-orange transition-colors text-lg md:text-xl font-bebas"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {t('event-location')}
            </a>
          </motion.div>

          {/* CTA Button - Now in Hero */}
          <motion.a
            href={joinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-12 py-4 text-2xl font-bebas text-white rounded-full overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-red-dark via-brand-red to-brand-red-dark" />
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-brand-red-dark via-brand-red-light to-brand-red-dark"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            />
            <span className="absolute inset-0 border-2 border-brand-red/50 rounded-full" />
            <span className="relative z-10">{t('cta')}</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-brand-red rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Partners Section - Moved up */}
      <div className="py-20 px-4">
        <motion.h3
          className="text-4xl md:text-5xl font-bebas text-center mb-16 text-red-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('partners-title')}
        </motion.h3>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 max-w-4xl mx-auto">
          {/* Jagermeister Logo */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-green-900 to-green-950 flex items-center justify-center shadow-lg shadow-green-900/30 group-hover:shadow-brand-orange/30 transition-all duration-300 p-4">
              <Image
                src="/bajameister/jager_logo.png"
                alt="Jagermeister"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Red Bull Logo */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-green-900 to-green-950 flex items-center justify-center shadow-lg shadow-green-900/30 group-hover:shadow-brand-orange/30 transition-all duration-300 p-4">
              <Image
                src="/bajameister/redbull_logo.png"
                alt="Red Bull"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="py-20 px-4 md:px-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bebas text-center mb-16 text-red-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('event-highlight')}
        </motion.h2>

        {/* Bento Grid Gallery */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Large landscape image */}
          <motion.div
            className="md:col-span-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group border border-green-800/30"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/bajameister/bajameister2.png"
              alt="Bajameister event"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
          </motion.div>

          {/* Portrait image */}
          <motion.div
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group border border-green-800/30"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/bajameister/bajameister1.jpg"
              alt="Bajameister party"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
          </motion.div>

          {/* Portrait image 2 */}
          <motion.div
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group border border-green-800/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/bajameister/bajameister3.jpg"
              alt="Baja vehicle showcase"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
          </motion.div>

          {/* Large landscape image 2 */}
          <motion.div
            className="md:col-span-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group border border-green-800/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/bajameister/bajameister4.jpg"
              alt="Bajameister celebration"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
          </motion.div>

          {/* Full width landscape image */}
          <motion.div
            className="md:col-span-3 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden group border border-green-800/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              src="/bajameister/bajameister6.png"
              alt="Bajameister event highlights"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Description Section */}
      <motion.div
        className="py-20 px-4 md:px-10 relative bg-gradient-to-b from-transparent via-green-950/30 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-xl md:text-2xl text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('description')}
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        className="py-20 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href={joinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block px-16 py-5 text-3xl font-bebas text-white rounded-full overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-brand-red-dark via-brand-red to-brand-red-dark" />
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-brand-red-dark via-brand-red-light to-brand-red-dark"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ backgroundSize: "200% 100%" }}
          />
          <span className="absolute inset-0 border-2 border-brand-red/50 rounded-full" />
          <span className="relative z-10">{t('cta')}</span>
        </motion.a>
      </motion.div>
    </main>
  );
}
