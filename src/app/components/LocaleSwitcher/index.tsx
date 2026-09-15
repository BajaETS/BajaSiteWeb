'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { useRouter, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import { LOCALE_FLAGS } from '@/content/navigation';

/**
 * The language switcher. Which flag goes with which language is set in
 * src/content/navigation.ts.
 */
export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: 'en' | 'fr') {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((cur, index) => {
        const flag = LOCALE_FLAGS[cur];
        return (
          <React.Fragment key={cur}>
            <button
              onClick={() => switchLocale(cur)}
              className={`p-2 rounded-md transition ${
                locale === cur ? 'bg-stone-700 bg-opacity-70' : ''
              }`}
              aria-label={flag.alt}
            >
              <Image
                height={50}
                width={50}
                src={flag.image}
                alt={flag.alt}
                className="w-8 h-6"
              />
            </button>
            {index < routing.locales.length - 1 && (
              <span className="text-white">|</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
