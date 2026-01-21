"use client"
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Bajameister() {
  const t = useTranslations('pages.bajameister');

  const joinLink = "https://www.zeffy.com/fr-CA/ticketing/bajameister";

  return (
    <main className="h-full">
      {/* Hero Section with Jagermeister theme */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated gradient background - Jagermeister colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-black to-green-950">
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #FF6B00 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #1a472a 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, #FF6B00 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, #FF6B00 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Floating particles effect - Orange and Green */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? "#FF6B00" : "#2d5a3d",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
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
            className="text-7xl md:text-9xl font-bebas mb-4 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-bebas text-orange-100/90 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('subtitle')}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('intro')}
          </motion.p>

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
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600" />
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            />
            <span className="absolute inset-0 border-2 border-orange-400/50 rounded-full" />
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
              className="w-1.5 h-3 bg-orange-500 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Partners Section - Moved up */}
      <div className="py-20 px-4">
        <motion.h3
          className="text-4xl md:text-5xl font-bebas text-center mb-16 text-orange-100"
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
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-green-900 to-green-950 flex items-center justify-center shadow-lg shadow-green-900/30 group-hover:shadow-orange-500/30 transition-all duration-300 p-4">
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
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-green-900 to-green-950 flex items-center justify-center shadow-lg shadow-green-900/30 group-hover:shadow-orange-500/30 transition-all duration-300 p-4">
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
          className="text-5xl md:text-6xl font-bebas text-center mb-16 text-orange-100"
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
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600" />
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ backgroundSize: "200% 100%" }}
          />
          <span className="absolute inset-0 border-2 border-orange-400/50 rounded-full" />
          <span className="relative z-10">{t('cta')}</span>
        </motion.a>
      </motion.div>
    </main>
  );
}
