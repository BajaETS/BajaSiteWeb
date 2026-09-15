import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { VideoHome } from "../../components/VideoHome";
import { HomePageScrollSection } from "../../components/HomePageScrollSection";

/**
 * The home page: the hero video, then the scrolling text sections.
 *
 * This one is a Server Component (the other pages are Client Components), so it has to
 * call unstable_setRequestLocale itself for the page to be built ahead of time.
 * See the root layout for why that matters.
 */
export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <VideoHome />
      <HomePageScrollSection />
    </>
  );
}
