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
            className="bg-primary px-4 py-2 rounded-full font-bebas hover:bg-[#f79900] transition-all" 
            href="https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.jedonneenligne.org%2Ffdets%2FCLUBSDONSCIEN%2F%3FPersonalKey%3D1%26FrmTrxType%3DDa%252FoFePL19ORosiL8yj7yA%253D%253D%26FrmActUID4585%3D7k%252F2gfptO29%252BsQaCmkqTGg%253D%253D&data=05%7C02%7Ccharles.grenier.2%40ens.etsmtl.ca%7C840a3564b7c64da4dbea08ddf0945c43%7C70aae3b79f3b484d8f9549e8fbb783c0%7C0%7C0%7C638931242186055880%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=eI9LJ3nwImVSpNaBEAbIKIp%2BQ074ClVbcfBWo7BKfEo%3D&reserved=0"
          >
              {donateLabel}
          </Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default DesktopMenu
