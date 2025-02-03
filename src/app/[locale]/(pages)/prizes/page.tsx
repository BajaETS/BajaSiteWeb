"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import Image from "next/image";
import { motion } from "framer-motion";

interface Competition {
  title: string;
  date: string;
  results: string[];
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
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-neutral-900 shadow-lg rounded-2xl p-4 mb-6 flex flex-col justify-start"
    >
      <h3 className="text-2xl font-semibold mb-2 text-white text-center flex items-center justify-center">{competition.title}</h3>
      <div className="flex flex-col items-start">
        <p className="text-gray-300 mb-2">{competition.date}</p>
        {competition.image !== "" && (
          <Image
            src={competition.image || ""}
            alt={competition.title}
            width={600}
            height={400}
            className="rounded-lg w-full object-cover mb-3"
          />
        )}
        <ul className="list-disc list-inside text-gray-300">
          {competition.results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
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
