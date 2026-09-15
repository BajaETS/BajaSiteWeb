import { ReactNode } from "react";
import { Logo } from "../../components/Logo";
import { unstable_setRequestLocale } from "next-intl/server";

/**
 * The home page shell. Everything else (menu, footer, fonts) comes from the root
 * layout one level up; this only adds the big logo that shrinks as you scroll.
 */
export default function HomeLayout({
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
      <Logo />
      {children}
    </>
  );
}
