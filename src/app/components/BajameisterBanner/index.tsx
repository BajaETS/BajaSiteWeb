"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { COLORS } from "@/theme/tokens.mjs";
import { BAJAMEISTER } from "@/content/bajameister";
import { parseLocalDate } from "@/content/dates";

/** Remembering a dismissal per event date, so a new edition shows the banner again. */
const DISMISS_KEY = `bajameister-dismissed-${BAJAMEISTER.date}`;

/**
 * The floating "Bajameister is happening" notification, shown on every page.
 *
 * It takes care of itself in two ways, so nobody has to remember to remove it:
 *   - it stops appearing the day after the event, based on the date in
 *     src/content/bajameister.ts
 *   - if a visitor closes it, it stays closed for them until the next edition
 *
 * To stop advertising the event before then, remove <BajameisterBanner /> from
 * src/app/[locale]/layout.tsx.
 */
export function BajameisterBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('pages.bajameister');
  const locale = useLocale();
  const pathname = usePathname();

  // Pointless on the page it links to, and on a phone it sits right on top of that
  // page's "buy tickets" button.
  const onEventPage = pathname === "/bajameister";

  // Decided in an effect rather than during render: this page is built ahead of time,
  // so "has the date passed" and "did you close this" are only knowable in the browser.
  // Deciding during render would make the server and client disagree.
  useEffect(() => {
    const dayAfter = parseLocalDate(BAJAMEISTER.date);
    dayAfter.setDate(dayAfter.getDate() + 1);
    if (Date.now() >= dayAfter.getTime()) return;

    try {
      if (window.localStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // Private browsing or blocked storage. Showing the banner is the safe default.
    }

    setIsVisible(true);
  }, []);

  if (!isVisible || onEventPage) return null;

  const eventDate = parseLocalDate(BAJAMEISTER.date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
  });

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Nothing to do: it will simply reappear on the next visit.
    }
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
                  `radial-gradient(circle at 0% 50%, ${COLORS.red} 0%, transparent 50%)`,
                  `radial-gradient(circle at 100% 50%, ${COLORS.red} 0%, transparent 50%)`,
                  `radial-gradient(circle at 0% 50%, ${COLORS.red} 0%, transparent 50%)`,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-4">
              {/* Emoji indicator */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center flex-shrink-0">
                <span className="text-2xl md:text-3xl">🎉</span>
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0 pr-4">
                <h4 className="font-bebas text-xl md:text-2xl text-brand-red leading-tight">
                  {t('title')}
                </h4>
                <p className="text-white/70 text-sm md:text-base truncate">
                  {eventDate}
                </p>
                <span className="inline-flex items-center text-brand-orange text-sm font-medium mt-1 group-hover:text-brand-orange-light transition-colors">
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
