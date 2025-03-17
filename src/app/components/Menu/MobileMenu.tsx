import { useState } from "react";
import { TMenu } from "./interface";
import clsx from "clsx";
import MenuItem from "./MenuItem";
import { useScrollLock } from "usehooks-ts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";

const MobileMenuOverlay = (props: TMenu & { onMenuItemClick: () => void }) => {

  useScrollLock()

  const { menuItems, onMenuItemClick } = props

    const t = useTranslations('nav')
  
    const donateLabel = t('donate')

  return (
    <nav className='fixed top-0 left-0 w-screen h-screen bg-black flex justify-center items-center'>
      <ul className="flex flex-col gap-8 text-white text-center text-6xl items-center">
        {menuItems.map((item) => <MenuItem key={item.href} onClick={onMenuItemClick} {...item} />)}
        <li>
          <Link
            target="_blank"
            className="bg-primary px-6 py-2 rounded-full font-bebas hover:bg-purple-950 transition-all"
            href="https://www.jedonneenligne.org/fdets/campagne/ets/challenges/view/832ba095-53f5-11ee-ac26-001dd8b75df7"
          >
            {donateLabel}
          </Link>
        </li>
        <LocaleSwitcher />
      </ul>
    </nav>
  )
}

const MobileMenu = (props: TMenu) => {

  const { menuItems } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {isMenuOpen && (
        <MobileMenuOverlay menuItems={menuItems} onMenuItemClick={() => setIsMenuOpen(false)} />
      )}
      <button className='md:hidden z-50 fixed top-5 right-5' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src="/hamburger.png" width="25" height="25"></img>
      </button>
    </div>
  )
}

export default MobileMenu

