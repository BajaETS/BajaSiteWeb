import { TMenu } from "./interface"
import MenuItem from "./MenuItem"

const DesktopMenu = (props: TMenu) => {

  const { menuItems } = props

  return (
    <nav className='hidden md:block text-white fixed top-5 right-5'>
      <ul className='flex gap-4 text-xl'>
        {menuItems.map((item) => <MenuItem key={item.href} {...item} />)}
      </ul>
    </nav>
  )
}

export default DesktopMenu