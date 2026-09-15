import type { NavItem, SocialLink } from './types'

/**
 * THE SITE MENU. One list, used by both the header menu and the footer.
 *
 * ── Adding a page to the menu ──────────────────────────────────────────────────
 *   Add a line below. `href` must match a folder under src/app/[locale]/ and
 *   `labelKey` must be a key that exists in BOTH messages/en.json and
 *   messages/fr.json. `npm run check` verifies both for you.
 *
 * ── Reordering the menu ────────────────────────────────────────────────────────
 *   Move the lines. The header and footer follow automatically.
 */
export const NAV_ITEMS: NavItem[] = [
  { href: '/team', labelKey: 'pages.team.title' },
  { href: '/prizes', labelKey: 'pages.prizes.title' },
  { href: '/partners', labelKey: 'pages.partners.title' },
  { href: '/history', labelKey: 'pages.history.title' },
]

/**
 * The extra "Home" entry the footer shows above the pages.
 * The header does not show it because the logo already links home.
 */
export const HOME_NAV_ITEM: NavItem = { href: '/', labelKey: 'footer.home' }

/**
 * Social media accounts shown in the footer.
 * Icons live in public/Footer/. To add a network, drop a white PNG icon there
 * and add a line here.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.facebook.com/BajaETS',
    image: '/Footer/facebookLogoWhite.png',
    alt: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/baja_ets/',
    image: '/Footer/instagramLogoWhite.png',
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/baja-ets/',
    image: '/Footer/linkedInLogoWhite.png',
    alt: 'LinkedIn',
  },
  {
    href: 'https://www.youtube.com/user/TheBajaETS',
    image: '/Footer/youtubelogoWhite.png',
    alt: 'Youtube',
  },
]

/**
 * The "Donate" button target: the team's page on the ETS online donation portal.
 *
 * This used to be a 588-character Microsoft "safelinks" wrapper, created when someone
 * pasted the real link into an email. It redirected here anyway, and its tracking
 * parameters carried a specific student's personal ETS address, so the wrapper was
 * removed. This is the real destination, verified working.
 *
 * If the donation page ever moves, get the new link from the ETS Fondation rather than
 * from an email, so no personal address ends up in the URL again.
 */
export const DONATE_URL =
  'https://www.jedonneenligne.org/fdets/CLUBSDONSCIEN/?PersonalKey=1&FrmTrxType=Da%2FoFePL19ORosiL8yj7yA%3D%3D&FrmActUID4585=7k%2F2gfptO29%2BsQaCmkqTGg%3D%3D'

/**
 * The flag shown for each language in the language switcher.
 *
 * These are written out in full rather than built from the language code, so that
 * `npm run check` can verify the files exist, and so nobody has to guess that "fr"
 * maps to the Québec flag rather than the French one.
 */
export const LOCALE_FLAGS: Record<'en' | 'fr', { image: string; alt: string }> = {
  en: { image: '/flags/uk.svg', alt: 'EN' },
  fr: { image: '/flags/quebec.svg', alt: 'FR' },
}
