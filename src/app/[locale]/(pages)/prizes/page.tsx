import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";

export default function Prizes() {
  const t = useTranslations('pages')

  return (
    <Page>
      <p>{t('prizes.title')}</p>
    </Page>
  );
}