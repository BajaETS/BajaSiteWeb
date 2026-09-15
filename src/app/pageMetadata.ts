import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

/**
 * Builds the browser-tab title for one page, translated.
 *
 * The site name is appended automatically by the template in the root layout, so
 * pass just the page's own title key: "Team" becomes "Team | Baja ÉTS".
 *
 * Pages are Client Components and cannot export metadata themselves, so each route
 * has a small layout.tsx next to it that calls this. See docs/DEVELOPERS.md.
 */
export async function pageMetadata(locale: string, titleKey: string): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return { title: t(titleKey as never) };
}
