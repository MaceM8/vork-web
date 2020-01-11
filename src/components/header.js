import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Link from "./Link"
import { BREAKPOINTS, GREY1 } from "../constants"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 5rem;
  margin: 0 1rem;
`

const Logo = styled.div`
  margin-right: 2rem;
  letter-spacing: 5px;
  font-size: 18px;
`

const Claim = styled.div`
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${GREY1};
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const MenuWrapper = styled.div``

const MobileMenu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    display: none;
  }
`

const DesktopMenu = styled.div`
  display: none;
  height: 100%;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    display: flex;
  }
`

const Header = () => (
  <HeaderWrapper id="header">
    <LogoWrapper>
      <Logo>VORK</Logo>
      <Claim>Find your own way</Claim>
    </LogoWrapper>
    <MenuWrapper>
      <MobileMenu>=</MobileMenu>
      <DesktopMenu>
        <Link to="/">Domů</Link>
        <Link to="/pomahame">S čím pomáháme</Link>
        <Link to="/o-nas">O nás</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/kontakt">Kontakt</Link>
      </DesktopMenu>
    </MenuWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
