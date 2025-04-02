import { Link } from "@/i18n/routing"
import { TMenu } from "./interface"
import MenuItem from "./MenuItem"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "../LocaleSwitcher"

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
            className="bg-primary px-4 py-2 rounded-full font-bebas hover:bg-sky-700 transition-all" 
            href="https://www.jedonneenligne.org/fdets/campagne/ets/challenges/view/832ba095-53f5-11ee-ac26-001dd8b75df7"
          >
              {donateLabel}
          </Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default DesktopMenu