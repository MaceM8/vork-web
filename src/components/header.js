import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
`

const Claim = styled.div`
  text-transform: uppercase;
`

const MenuWrapper = styled.div``
const MobileMenu = styled.div``
const DesktopMenu = styled.div``

const Header = ({ siteTitle = "title" }) => (
  <HeaderWrapper id="header">
    <div>LOGO</div>
    <Claim>Find your own way</Claim>
    <MenuWrapper>
      <MobileMenu></MobileMenu>
      <DesktopMenu></DesktopMenu>
    </MenuWrapper>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
