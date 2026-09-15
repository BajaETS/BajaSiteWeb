import { ReactNode } from "react";
import { pageMetadata } from "@/app/pageMetadata";

/** Gives this route its own browser-tab title. Everything else comes from the layouts above. */
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return pageMetadata(locale, "pages.bajameister.title");
}

export default function BajameisterLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
