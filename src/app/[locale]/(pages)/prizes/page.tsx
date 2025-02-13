"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import Image from "next/image";
import { motion } from "framer-motion";
import { TRankingProps } from "@/app/components/Ranking/interface";
import Ranking from "@/app/components/Ranking";
import clsx from "clsx";

interface Competition {
  title: string;
  date: string;
  results: TRankingProps[];
  image?: string;
}

interface YearData {
  year: string;
  competitions: Competition[];
}

interface PrizesData {
  "competition-years": YearData[];
}

const CompetitionCard: React.FC<{ competition: Competition }> = ({ competition }) => {
  const locale = useLocale()
  const localizedDate = (new Date(Date.parse(competition.date))).toLocaleDateString(locale, {day: "numeric", year: "numeric", month: "long"})
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-neutral-900 shadow-lg rounded-2xl flex flex-col justify-start"
    >
      <div className="relative">
        <div className="absolute top-0 right-0 left-0 h-full w-full bg-gradient-to-t from-neutral-900 from-10% to-transparent" />
        {competition.image !== "" && (
          <Image
            src={competition.image || ""}
            alt={competition.title}
            width={600}
            height={400}
            className="rounded-t-lg w-full object-cover mb-3"
          />
        )}
      </div>
      <div className={clsx(competition.image && "-translate-y-20 -mb-12", "m-6")}>
        <p className="text-gray-300 mb-2">{localizedDate}</p>
        <h3 className="text-2xl font-semibold mb-2 text-white">{competition.title}</h3>
        <ul className="flex flex-wrap gap-2">
          {
            competition.results.map((result) => <Ranking {...result} />)
          }
        </ul>
      </div>
    </motion.div>
  );
};

const YearSection: React.FC<{ yearData: YearData }> = ({ yearData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <h3 className="text-4xl font-bebas mb-6 text-center text-white">{yearData.year}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {yearData.competitions.map((competition, index) => (
          <CompetitionCard key={index} competition={competition} />
        ))}
      </div>
    </motion.div>
  );
};

const PrizesSection: React.FC = () => {
  const t = useTranslations('pages');
  const prizesData: PrizesData = t.raw('prizes');

  return (
    <section className="container mx-auto px-4 py-10">
      {prizesData["competition-years"].map((yearData, index) => (
        <YearSection key={index} yearData={yearData} />
      ))}
    </section>
  );
};

const PrizesPage: React.FC = () => {
  const t = useTranslations('pages');

  return (
    <Page>
      <h2 className="text-5xl font-bebas text-center mb-8 text-white">{t('prizes.title')}</h2>
      <PrizesSection />
    </Page>
  );
};

export default PrizesPage;
