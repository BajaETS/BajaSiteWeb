import { useState } from "react";
import { TMenu } from "./interface";
import clsx from "clsx";
import MenuItem from "./MenuItem";
import { useScrollLock } from "usehooks-ts";

const MobileMenuOverlay = (props: TMenu & { onMenuItemClick: () => void }) => {

  useScrollLock()

  const { menuItems, onMenuItemClick } = props

  return (
    <nav className='fixed top-0 left-0 w-screen h-screen bg-black flex justify-center items-center'>
      <ul className='flex gap-8 text-white flex-col text-center text-6xl'>
        {menuItems.map((item) => <MenuItem key={item.href} onClick={onMenuItemClick} {...item} />)}
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

