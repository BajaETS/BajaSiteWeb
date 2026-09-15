import { ReactNode } from "react";
import { MiniLogo } from "../../components/MiniLogo";
import ScrollLock from "../../components/ScrollLock";
import { pageMetadata } from "@/app/pageMetadata";
import { unstable_setRequestLocale } from "next-intl/server";

/**
 * The history page shell.
 *
 * It sits outside the (pages) group for one reason: the timeline scrolls sideways
 * and is pinned to the bottom of the screen, so this page must not scroll vertically.
 * ScrollLock handles that. Everything else comes from the root layout.
 *
 * Because the page does not scroll, the site footer is below the fold here. That is
 * deliberate: it has always behaved this way.
 */
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return pageMetadata(locale, "pages.history.title");
}

export default function HistoryLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Needed in every layout for the pages to be built ahead of time. See the root layout.
  unstable_setRequestLocale(locale);

  return (
    <>
      <MiniLogo />
      <ScrollLock />
      {children}
    </>
  );
}
