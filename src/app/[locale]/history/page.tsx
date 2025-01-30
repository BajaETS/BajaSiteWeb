"use client"
import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";
import HistorySection from "@/app/components/HistorySection";

export default function History() {

  const t = useTranslations('pages')

  return (
    <Page>
      <div className="h-full">
        <p className="text-5xl font-bebas m-4 text-center bg-transparent">{t('history.title')}</p>
        <HistorySection />
      </div>
    </Page>
  );
}