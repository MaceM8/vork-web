import React, { useState } from "react"
import styled from "styled-components"
import { string } from "prop-types"
import Img from "gatsby-image"

import Link from "../Link"
import { BREAKPOINTS, GREY1 } from "../../constants"
import Icon from "../Icon"
import MenuLinks from "./MenuLinks"
import MobileMenu from "./MobileMenu"
import { graphql } from "gatsby"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 5rem;
  padding: 0 1rem;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`

const Logo = styled(Link)`
  margin: 0 2rem;
  letter-spacing: 7px;
  font-size: 24px;
  font-weight: bold;
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

const MobileMenuWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    display: none;
  }
`

const DesktopMenuWrapper = styled.div`
  display: none;
  height: 100%;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    display: flex;
  }
`

const Header = ({ data }) => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false)

  console.log("data", data)

  return (
    <HeaderWrapper id="header">
      <LogoWrapper>
        <Logo to="/">
          {/* <Img fixed={data ? data.file.childImageSharp.fixed : ""} /> */}
          {/* <Img fixed={data} /> */}
        </Logo>
        <Claim>Find your own way</Claim>
      </LogoWrapper>
      <MenuWrapper>
        <MobileMenuWrapper onClick={() => setMobileMenuVisible(true)}>
          <Icon icon="menu" />
        </MobileMenuWrapper>
        <DesktopMenuWrapper>
          <MenuLinks />
        </DesktopMenuWrapper>
      </MenuWrapper>
      <MobileMenu
        isOpened={isMobileMenuVisible}
        onClose={() => setMobileMenuVisible(false)}
      />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: string,
}

export default Header

export const pageQuery = graphql`
  query LogoQuery {
    strapiLogo {
      Alt
      image {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
