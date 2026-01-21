'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { useRouter, usePathname } from '@/i18n/routing';
import Image from 'next/image';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: 'en' | 'fr') {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((cur, index) => (
        <React.Fragment key={cur}>
            <button
            onClick={() => switchLocale(cur)}
            className={`p-2 rounded-md transition ${
              locale === cur ? 'bg-stone-700 dark:bg-stone-700 bg-opacity-70' : ''
            }`}
            >
            <Image
              height={50}
              width={50}
              src={`/flags/${cur === 'fr' ? 'quebec' : 'uk'}.svg`}
              alt={cur === 'fr' ? 'FR' : 'EN'}
              className="w-8 h-6"
            />
            </button>
          {index < routing.locales.length - 1 && (
            <span className="text-white">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
