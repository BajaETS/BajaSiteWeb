import { useState } from "react";
import { TMenu } from "./interface";
import MenuItem from "./MenuItem";
import { useScrollLock } from "usehooks-ts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import { motion, AnimatePresence } from "framer-motion";

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
            className="bg-primary px-6 py-2 rounded-full font-bebas hover:bg-purple-950 transition-all"
            href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.jedonneenligne.org%2Ffdets%2FCLUBSDONSCIEN%2F%3FPersonalKey%3D1%26FrmTrxType%3DDa%252FoFePL19ORosiL8yj7yA%253D%253D%26FrmActUID4585%3D7k%252F2gfptO29%252BsQaCmkqTGg%253D%253D&data=05%7C02%7Ccharles.grenier.2%40ens.etsmtl.ca%7C840a3564b7c64da4dbea08ddf0945c43%7C70aae3b79f3b484d8f9549e8fbb783c0%7C0%7C0%7C638931242186055880%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=eI9LJ3nwImVSpNaBEAbIKIp%2BQ074ClVbcfBWo7BKfEo%3D&reserved=0"
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
