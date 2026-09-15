import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx";
import "./globals.css";
import { Menu } from "../components/Menu";
import Footer from "../components/Footer";
import { routing } from "@/i18n/routing";

/**
 * THE ROOT LAYOUT: the page shell every page on the site sits inside.
 *
 * This is the only file in the project that renders <html> and <body>. It loads the
 * fonts, sets up translations, and puts the menu and footer around every page.
 *
 * There used to be three near-identical copies of this file, which meant a change to
 * the menu or the footer had to be made three times, and one of them always got missed.
 * (The history page had no footer for exactly that reason.)
 *
 * The small differences between sections live in the smaller layout.tsx files next to
 * the pages: (home)/layout.tsx shows the big logo, (pages)/layout.tsx shows the small one.
 */

const inter = Inter({ subsets: ["latin"] });

/**
 * Tells Next.js to build a copy of every page in both languages ahead of time.
 *
 * This matters more than it looks: without it the pages are only built when someone
 * visits them, so a mistake in the content files is discovered by a visitor rather
 * than by `npm run build`. With it, a bad translation key or a broken image path
 * fails the build on your machine.
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: {
    default: "Baja ÉTS",
    template: "%s | Baja ÉTS",
  },
  description:
    "Baja ÉTS is the École de technologie supérieure student team that designs, builds and races an off-road vehicle in the Baja SAE series.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Baja ÉTS",
    description: "Engineering excellence in off-road competition.",
    type: "website",
  },
};

type TRootLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout(props: TRootLayoutProps) {
  const { children, params } = props;
  const { locale } = params;

  // A URL like /de/team should 404 rather than render an empty site.
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Required for the pages to be built ahead of time rather than on each request.
  // Without it next-intl falls back to rendering on demand, and the build stops
  // checking the content files, which is the whole reason for building them early.
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="bg-black m-0 p-0 text-white">
      <body className={clsx(inter.className, "bg-black m-0 p-0 text-white")}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Menu />
          {children}
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
