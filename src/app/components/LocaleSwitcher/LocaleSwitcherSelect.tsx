'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { TLocaleSwitcherSelect } from './interface';

export default function LocaleSwitcherSelect(props: TLocaleSwitcherSelect) {

  const { children, defaultValue, label } = props

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: any) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        pathname,
        { locale: nextLocale }
      );
    });
  }

  return (
    <label>
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex bg-transparent text-white py-3 pr-2 cursor-pointer"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}
