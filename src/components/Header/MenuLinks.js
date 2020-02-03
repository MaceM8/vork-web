import React from "react"

import MenuLink from "./MenuLink"
import { MENU_LINKS } from "../../constants"

const MenuLinks = () =>
  MENU_LINKS.map(({ to, children }) => (
    <MenuLink key={to} to={to}>
      {children}
    </MenuLink>
  ))

export default MenuLinks
