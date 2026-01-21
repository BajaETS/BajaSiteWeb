'use client'

import React from 'react';
import { useTranslations } from 'next-intl';
import { TMenuItem } from './interface';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';


export function Menu() {

  const t = useTranslations("pages")

  const menuItems: TMenuItem[] = [
    {
      href: "/team",
      label: t('team.title')
    },
    {
      href: "/prizes",
      label: t('prizes.title')
    },
    {
      href: "/partners",
      label: t('partners.title')
    },
    {
      href: "/history",
      label: t('history.title')
    },
    {
      href: "/bajameister",
      label: t('bajameister.title')
    }
  ]

  return (
    <div className='p-5 text-right w-auto flex justify-end items-end z-30 fixed'>
      <DesktopMenu menuItems={menuItems} />
      <MobileMenu menuItems={menuItems} />
    </div>
  )
}