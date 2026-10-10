"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { BAJAMEISTER } from "@/content/bajameister";

/**
 * Darken the ticket widget to match the rest of the site.
 *
 * Lepointdevente has no dark mode: their stylesheet contains no prefers-color-scheme
 * rules and they ignore every theme parameter. Their widget is a cross-origin iframe,
 * so our CSS cannot reach inside it either.
 *
 * The only lever left is a CSS filter on the whole frame. It looks good on the text,
 * but it inverts EVERYTHING, including the Baja ETS logo the widget displays, which
 * comes out washed-out and wrong. There is no way to exempt it: we cannot target
 * elements inside a cross-origin frame.
 *
 * Set this to false to go back to the vendor's own light panel.
 */
const INVERT_TO_DARK = false;

/**
 * The Lepointdevente ticket-sales widget, embedded in the page.
 *
 * WHY THIS IS NOT JUST A <script> TAG
 *
 * Lepointdevente's embed code is a script that calls `document.write()` to place its
 * iframe. That works on a plain HTML page, where the script runs while the document is
 * still being parsed. On this site it would destroy the page: after loading, a
 * `document.write()` call wipes everything already rendered.
 *
 * So the script is loaded manually with `document.write` temporarily swapped for a
 * function that captures the HTML instead of writing it. The captured iframe is then
 * put inside this component's own container.
 *
 * It is a shim around a legacy widget, but it is deliberately preferred over
 * hand-building the iframe ourselves: the real script also sets up two postMessage
 * listeners that the checkout depends on.
 *
 *   resize   the iframe reports its own height so the page has no inner scrollbar
 *   session  the iframe asks the page for a session id, which the script answers with
 *            an id the seller generated when the script was fetched
 *
 * That session handshake is how the seller works around Safari and iOS blocking
 * cookies inside a third-party iframe. Skipping it risks breaking checkout for those
 * visitors, which on a page whose only job is selling tickets is not a trade worth
 * making.
 *
 * If ticket sales ever move to another provider, delete this component and point the
 * buttons at the new `ticketUrl` in src/content/bajameister.ts.
 */
export default function TicketWidget() {
  const locale = useLocale();
  const t = useTranslations("pages.bajameister");
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    // The seller serves the widget per language. `lang` is theirs, not ours, and they
    // accept the same two codes this site uses.
    const src = `https://lepointdevente.com/plugins/widget.js?event=${BAJAMEISTER.ticketEventId}&lang=${locale}`;

    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    // Capture whatever the script tries to write, instead of letting it blank the page.
    const realWrite = document.write;
    const realWriteln = document.writeln;
    let captured = "";
    const capture = (...chunks: string[]) => {
      captured += chunks.join("");
    };

    const restore = () => {
      document.write = realWrite;
      document.writeln = realWriteln;
    };

    script.onload = () => {
      restore();
      if (cancelled) return;
      if (!captured) {
        setFailed(true);
        return;
      }
      container.innerHTML = captured;
      // innerHTML does not run scripts, but the widget only writes an iframe, so there
      // is nothing to run. The listeners the script registered are already live.
    };

    script.onerror = () => {
      restore();
      if (!cancelled) setFailed(true);
    };

    document.write = capture as typeof document.write;
    document.writeln = capture as typeof document.writeln;
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      restore();
      script.remove();
      if (container) container.innerHTML = "";
    };
  }, [locale]);

  // If the seller's script is blocked (an ad blocker, or their site being down), fall
  // back to a plain link rather than showing an empty box.
  if (failed) {
    return (
      <a
        href={BAJAMEISTER.ticketUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 text-xl font-bebas text-white rounded-full bg-brand-red hover:bg-brand-red-dark transition-colors"
      >
        {locale === "fr" ? "Acheter des billets" : "Buy tickets"}
      </a>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
    <div
      className={
        INVERT_TO_DARK
          ? "mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-neutral-900 p-2 shadow-2xl ring-1 ring-white/10 md:p-4"
          : "mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-white/95 p-2 shadow-2xl md:p-4"
      }
    >
      <div
        ref={containerRef}
        className="w-full min-h-[500px]"
        style={INVERT_TO_DARK ? { filter: "invert(1) hue-rotate(180deg)" } : undefined}
      />
    </div>

      {/* Some people would rather buy on the seller's own site, and if the embedded
          widget misbehaves in their browser this is their way out. */}
      <p className="mt-4 text-center text-sm text-white/60">
        <a
          href={BAJAMEISTER.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-brand-orange"
        >
          {t("tickets-external")}
        </a>
      </p>
    </div>
  );
}
