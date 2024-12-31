import React from "react";
import { useTranslations } from "next-intl";
import Page from "@/app/components/Page";


export default function WhatWeDo() {
  const t = useTranslations('pages')

  return (
    <Page>
      <p>{t('whatwedo.title')}</p>
    </Page>
  );
}
