export type TMenuItem = {
  href: string
  label: string
  onClick?: () => void
}

export type TMenu = {
  menuItems: TMenuItem[]
}