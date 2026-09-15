"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import Image from "next/image";
import { motion } from "framer-motion";
import Ranking from "@/app/components/Ranking";
import { COMPETITION_YEARS } from "@/content/results";
import type { Competition, CompetitionYear } from "@/content/types";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/**
 * Parse a YYYY-MM-DD date as a LOCAL date.
 * `new Date("2026-05-07")` is parsed as UTC midnight, which displays as the previous
 * day for anyone west of Greenwich, including Montreal. Building it from parts avoids that.
 */
function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

const CompetitionCard: React.FC<{ competition: Competition; index: number }> = ({
  competition,
  index,
}) => {
  const locale = useLocale();
  const t = useTranslations();
  const localizedDate = parseLocalDate(competition.date).toLocaleDateString(locale, {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
  const hasImage = !!competition.image && competition.image !== "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: EASE }}
      whileHover={{ y: -6 }}
      className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-white/5
                 bg-neutral-900 shadow-lg transition-colors duration-300 [will-change:transform]
                 hover:border-brand-orange/40 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Top accent bar that sweeps in on hover */}
      <div className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-brand-orange transition-transform duration-500 group-hover:scale-x-100" />

      {hasImage && (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl sm:h-52">
          <Image
            src={competition.image || ""}
            alt={competition.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Soft fade so the photo blends into the solid card body below.
             Extends past the bottom edge (-bottom-6) so the solid end always
             covers the seam even while the image scales during hover. */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-3/4 bg-gradient-to-t from-neutral-900 to-transparent" />
        </div>
      )}

      {/* Title + results always sit on the solid card body, never over the photo */}
      <div className="p-5 sm:p-6">
        <p className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">{localizedDate}</p>
        <h3 className="mb-4 font-bebas text-4xl leading-none text-white transition-colors duration-300 group-hover:text-brand-orange-pale sm:text-5xl">
          {competition.title}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {competition.results.map((result, i) => (
            <li key={i} className="transition-transform duration-200 hover:-translate-y-0.5">
              <Ranking
                place={result.place}
                placeLabel={t("pages.prizes.ordinal", { place: result.place })}
                category={t(`pages.prizes.categories.${result.category}` as never)}
                medal={result.medal}
                points={result.points}
                details={result.detailsKey ? t(result.detailsKey as never) : undefined}
              />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const YearSection: React.FC<{ yearData: CompetitionYear; index: number }> = ({ yearData, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      viewport={{ once: true, margin: "-80px" }}
      className="mb-14"
    >
      {/* Year divider */}
      <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary/60 sm:w-24" />
        <h3 className="px-1 font-bebas text-4xl text-white sm:text-5xl">{yearData.year}</h3>
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/60 sm:w-24" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {yearData.competitions.map((competition, i) => (
          <CompetitionCard key={i} competition={competition} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

const PrizesSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pb-16">
      {COMPETITION_YEARS.map((yearData, index) => (
        <YearSection key={yearData.year} yearData={yearData} index={index} />
      ))}
    </section>
  );
};

const PrizesPage: React.FC = () => {
  const t = useTranslations("pages");

  return (
    <Page>
      {/* Animated hero title */}
      <motion.div
        className="px-4 pb-10 pt-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="relative inline-block font-bebas text-6xl text-white md:text-8xl"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="absolute inset-0 rounded-full bg-primary/25 blur-3xl" />
          <span className="relative">{t("prizes.title")}</span>
        </motion.h1>
        <motion.div
          className="mx-auto mt-3 h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-brand-orange"
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
      </motion.div>

      <PrizesSection />
    </Page>
  );
};

export default PrizesPage;
