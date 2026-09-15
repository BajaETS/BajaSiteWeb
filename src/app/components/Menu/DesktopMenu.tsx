import { Link } from "@/i18n/routing"
import { TMenu } from "./interface"
import MenuItem from "./MenuItem"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "../LocaleSwitcher"
import { DONATE_URL } from "@/content/navigation"

const DesktopMenu = (props: TMenu) => {

  const { menuItems } = props

  const t = useTranslations('nav')

  const donateLabel = t('donate')

  return (
    <nav className='hidden md:block text-white fixed top-5 right-5'>
      <ul className='flex gap-4 text-xl items-center'>
        <LocaleSwitcher />
        {menuItems.map((item) => <MenuItem key={item.href} {...item} />)}
        <li>
          <Link
            target="_blank"
            className="bg-primary px-4 py-2 rounded-full font-bebas hover:bg-brand-orange transition-all" 
            href={DONATE_URL}
          >
              {donateLabel}
          </Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default DesktopMenu
