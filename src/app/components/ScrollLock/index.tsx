"use client";

import { useEffect } from "react";

/**
 * Stops the page itself from scrolling, for pages that manage their own scrolling.
 *
 * Only the history page uses this: its timeline scrolls sideways and is pinned to the
 * bottom of the screen, so letting the page scroll vertically would drag the timeline
 * out of view.
 *
 * Renders nothing. Drop it into a layout and it applies while that section is open,
 * then cleans up when you navigate away.
 */
export default function ScrollLock() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const classes = ["h-full", "overflow-hidden"];

    html.classList.add(...classes, "no-scrollbar");
    body.classList.add(...classes);

    return () => {
      html.classList.remove(...classes, "no-scrollbar");
      body.classList.remove(...classes);
    };
  }, []);

  return null;
}
