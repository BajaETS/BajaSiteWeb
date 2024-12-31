"use client"
import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import HistorySection from "@/app/components/HistorySection";

export default function History() {

  const t = useTranslations('pages')

  return (
    <Page>
      <div className="min-h-full">
        <p className="text-2xl font-bold mb-2 text-center">{t('history.title')}</p>
        <HistorySection />
      </div>
    </Page>
  );
}