'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { TLocaleSwitcherSelect } from './interface';

export default function LocaleSwitcherSelect(props: TLocaleSwitcherSelect) {
  const { children } = props;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onButtonClick(event: any) {
    const nextLocale = event.target.value;
    if (!nextLocale) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex gap-2">
      {Array.isArray(children) && children.map((child) => (
        <button
          key={child.key}
          value={child.props.value}
          onClick={onButtonClick}
          disabled={isPending}
          className="p-2 text-lg rounded-md transition hover:bg-[#f79900]/20 dark:hover:bg-[#f79900]/30"
        >
          {child.props.children}
        </button>
      ))}
    </div>
  );
}
