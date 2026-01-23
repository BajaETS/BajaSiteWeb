"use client";

import React from "react";
import { TMemberPopup } from "./interface";
import { useScrollLock } from "usehooks-ts";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MemberPopup(props: TMemberPopup) {
  const { onClose, image, children } = props;

  useScrollLock();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-[90%] md:w-auto text-white p-6 md:p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl relative max-w-[750px] shadow-2xl border border-white/10"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative gradient orbs */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="/x-white.png" width={20} height={20} alt="Close" />
          </motion.button>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Member Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl scale-90" />
              <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden ring-4 ring-primary/50">
                <Image
                  src={image}
                  alt="Member"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 280px"
                  quality={90}
                />
              </div>
            </motion.div>

            {/* Member Details */}
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
