'use client'

import React from 'react';
import { useTranslations } from 'next-intl';
import { TMenuItem } from './interface';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS } from '@/content/navigation';

/**
 * The site header menu.
 * To add, remove or reorder links, edit src/content/navigation.ts, not this file.
 */
export function Menu() {
  const t = useTranslations()

  const menuItems: TMenuItem[] = NAV_ITEMS.map((item) => ({
    href: item.href,
    label: t(item.labelKey as never),
  }))

  return (
    <div className='p-5 text-right w-auto flex justify-end items-end z-30 fixed'>
      <DesktopMenu menuItems={menuItems} />
      <MobileMenu menuItems={menuItems} />
    </div>
  )
}
