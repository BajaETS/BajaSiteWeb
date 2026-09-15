import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

/**
 * ROUTING: which languages the site speaks, and how the URLs look.
 *
 * URLs are the same in both languages: /team and /fr/team, not /fr/equipe.
 * English is the default, so English URLs have no prefix at all: /team, not /en/team.
 *
 * There used to be a `pathnames` map here declaring French URLs (/equipe, /histoire,
 * ...). It was wired to createSharedPathnamesNavigation, which is the helper for routes
 * whose path is the SAME in every language, so the map never had any effect and the
 * French URLs never worked. It was removed so this file says what actually happens.
 * If French URLs are wanted later, switch to createLocalizedPathnamesNavigation and
 * add redirects from the current URLs.
 */
export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

/**
 * Use THESE instead of next/link and next/navigation anywhere in the app, so links
 * keep the reader in the language they are already browsing in.
 */
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
