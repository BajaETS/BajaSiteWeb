import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { SEASON } from "@/content/season";

/**
 * The small logo in the top-left of every page except the home page, linking home.
 *
 * Sized by WIDTH, with the height worked out from the logo's real proportions in
 * src/content/season.ts. Setting both by hand is how the logo ended up stretched:
 * it was pinned to 174x174 while the image itself is 2160x822.
 *
 * 220px matches the size the home page logo shrinks to once you scroll.
 */
const WIDTH = 220;

export function MiniLogo() {
  const height = Math.round((SEASON.logoHeight / SEASON.logoWidth) * WIDTH);

  return (
    <div className='fixed top-0 left-0 p-4 z-20 w-auto'>
      <Link href="/" aria-label="Baja ÉTS">
        <Image src={SEASON.logo} alt='Baja ÉTS' width={WIDTH} height={height} priority />
      </Link>
    </div>
  );
}
