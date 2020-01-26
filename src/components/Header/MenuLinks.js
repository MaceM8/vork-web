import React from "react"

import MenuLink from "./MenuLink"
import { MENU_LINKS } from "../../constants"

const MenuLinks = () =>
  MENU_LINKS.map(({ to, children }) => <MenuLink to={to}>{children}</MenuLink>)

export default MenuLinks
