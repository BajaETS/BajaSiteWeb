import { useState } from "react";
import { TMenu } from "./interface";
import MenuItem from "./MenuItem";
import { useScrollLock } from "usehooks-ts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { DONATE_URL } from "@/content/navigation";

const MobileMenuOverlay = (props: TMenu & { onMenuItemClick: () => void }) => {

  useScrollLock()

  const { menuItems, onMenuItemClick } = props

  const t = useTranslations('nav')
  const donateLabel = t('donate')

  return (
    <motion.nav
      className='fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-40'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul className="flex flex-col gap-8 text-white text-center text-6xl items-center">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
          >
            <MenuItem onClick={onMenuItemClick} {...item} />
          </motion.div>
        ))}
        <motion.li
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3, delay: menuItems.length * 0.08 }}
        >
          <Link
            target="_blank"
            className="bg-primary px-6 py-2 rounded-full font-bebas hover:bg-brand-orange transition-all"
            href={DONATE_URL}
          >
            {donateLabel}
          </Link>
        </motion.li>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3, delay: (menuItems.length + 1) * 0.08 }}
        >
          <LocaleSwitcher />
        </motion.div>
      </ul>
    </motion.nav>
  )
}

const HamburgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      className='md:hidden z-50 fixed top-5 right-4 w-8 h-8 flex flex-col justify-center items-center gap-[6px] group'
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <motion.span
        className="block w-7 h-[2px] bg-white rounded-full origin-center"
        animate={isOpen
          ? { rotate: 45, y: 8 }
          : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="block w-7 h-[2px] bg-white rounded-full"
        animate={isOpen
          ? { opacity: 0, scaleX: 0 }
          : { opacity: 1, scaleX: 1 }
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className="block w-7 h-[2px] bg-white rounded-full origin-center"
        animate={isOpen
          ? { rotate: -45, y: -8 }
          : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  )
}

const MobileMenu = (props: TMenu) => {

  const { menuItems } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenuOverlay menuItems={menuItems} onMenuItemClick={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
      <HamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </div>
  )
}

export default MobileMenu
