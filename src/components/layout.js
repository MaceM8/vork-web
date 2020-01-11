import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyle"
import Section from "./Section"
import { BLUE, WHITE } from "../constants"

const ContentWrapper = styled.main`
  width: 100%;

  ${Section}:nth-child(even) {
    background-color: ${BLUE};
    color: ${WHITE};
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
