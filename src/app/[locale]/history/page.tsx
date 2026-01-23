"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import HistorySection from "@/app/components/HistorySection";
import { motion } from "framer-motion";

export default function History() {
  const t = useTranslations("pages");

  return (
    <Page>
      <div className="h-full flex flex-col">
        {/* Animated Title */}
        <motion.div
          className="text-center py-4 flex-shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl 2xl:text-8xl font-bebas text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("history.title")}
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="mt-2 2xl:mt-4 mx-auto h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* History Section */}
        <div className="flex-1 overflow-hidden">
          <HistorySection />
        </div>
      </div>
    </Page>
  );
}
