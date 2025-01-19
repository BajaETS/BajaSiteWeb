import React from "react";
import { Link } from "@/i18n/routing";

export function MiniLogo() {
  return (
    <div className='fixed top-0 left-0 p-4 z-20 w-auto'>
      <button>
        <Link href="/">
          <img src='/logo.png' alt='LogoBaja' height="78" width="174" />
        </Link>
      </button>
    </div>
  );
}
