import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/team': {
      en: '/team',
      fr: '/equipe'
    },
    '/history': {
      en: '/history',
      fr: '/histoire'
    },
    '/partners': {
      en: '/partners',
      fr: '/partenaires'
    },
    '/prizes': {
      en: '/prizes',
      fr: '/prix'
    },
    '/whatwedo': {
      en: '/what-we-do',
      fr: '/notre-savoir-faire',
    },
    '/bajameister': {
      en: '/bajameister',
      fr: '/bajameister',
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);