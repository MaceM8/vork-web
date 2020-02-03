import React from "react"
import styled from "styled-components"
import { oneOf, string } from "prop-types"

import chevronRight from "./svgs/chevron-right.svg"
import facebook from "./svgs/facebook.svg"
import instagram from "./svgs/instagram.svg"
import linkedin from "./svgs/linkedin.svg"
import email from "./svgs/email.svg"
import medium from "./svgs/medium.svg"
import menu from "./svgs/menu.svg"
import phone from "./svgs/phone.svg"
import times from "./svgs/times.svg"

// Add new icons here, logic and proptypes works automatically
const icons = {
  chevronRight,
  facebook,
  instagram,
  linkedin,
  email,
  medium,
  menu,
  phone,
  times,
}

const renderIcon = (icon, color) => {
  const SelectedIcon = icons[icon] || icons.phone

  return <SelectedIcon color={color} />
}

const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0;
`

const Icon = ({ icon, color, ...props }) => (
  <IconWrapper {...props}>{renderIcon(icon, color)}</IconWrapper>
)

Icon.propTypes = {
  icon: oneOf(Object.keys(icons)).isRequired,
  color: string,
}

export default Icon
