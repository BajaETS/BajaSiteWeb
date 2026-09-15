import { ReactNode } from "react";
import { MiniLogo } from "../../components/MiniLogo";
import { unstable_setRequestLocale } from "next-intl/server";

/**
 * The shell for the inner pages (team, results, partners, bajameister).
 * Everything else comes from the root layout one level up; this only swaps in the
 * small logo that links back home.
 */
export default function PagesLayout({
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
      {children}
    </>
  );
}
