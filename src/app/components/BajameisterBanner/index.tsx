"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function BajameisterBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations('pages.bajameister');

  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 z-50 md:max-w-sm"
      >
        {/* Close button - Outside the Link for better click handling */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 md:top-0 md:right-0 w-8 h-8 bg-black/80 hover:bg-black rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all z-20 border border-green-800/50 shadow-lg"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Link href="/bajameister">
          <motion.div
            className="relative bg-gradient-to-r from-green-950 to-green-900 rounded-2xl p-4 md:p-5 shadow-2xl border border-green-800/50 cursor-pointer overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 50%, #FF6B00 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 50%, #FF6B00 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 50%, #FF6B00 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-4">
              {/* Pulsing indicator */}
              <div className="relative flex-shrink-0">
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl md:text-3xl">🎉</span>
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-orange-500"
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0 pr-4">
                <h4 className="font-bebas text-xl md:text-2xl text-orange-400 leading-tight">
                  {t('title')}
                </h4>
                <p className="text-white/70 text-sm md:text-base truncate">
                  {t('subtitle')}
                </p>
                <span className="inline-flex items-center text-orange-400 text-sm font-medium mt-1 group-hover:text-orange-300 transition-colors">
                  {t('cta')}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </motion.svg>
                </span>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
