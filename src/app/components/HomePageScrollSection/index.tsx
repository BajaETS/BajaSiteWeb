import React from "react";
import { useTranslations } from "next-intl";

export function HomePageScrollSection() {

  const t = useTranslations('pages')

  return (
    <div className="p-5 text-white bg-black text-center">
      <h2>{t('home.content.who-we-are.title')}</h2>
      <p>{t('home.content.who-we-are.text')}</p>
      <h2>{t('home.content.research-and-innovation.title')}</h2>
      <p>{t('home.content.research-and-innovation.text')}</p>
    </div>
  );
};
