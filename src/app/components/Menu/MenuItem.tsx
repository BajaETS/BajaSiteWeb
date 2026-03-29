import { Link } from "@/i18n/routing"
import { TMenuItem } from "./interface"

const MenuItem = (props: TMenuItem) => {

  const { href, label, onClick } = props

  return (
    <li className='font-bebas hover:text-[#f79900] transition-all'>
      <Link href={href} onClick={onClick}>{label}</Link>
    </li>
  )
}

export default MenuItem