import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export function MiniLogo() {
  return (
    <div className='fixed top-0 left-0 p-4 z-20 w-auto'>
      <button>
        <Link href="/">
          <Image src='/logo2025.png' alt='LogoBaja' height="174" width="174" />
        </Link>
      </button>
    </div>
  );
}
