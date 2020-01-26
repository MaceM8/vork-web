import React from "react"
import styled from "styled-components"

import Link from "../Link"

const LinkBlock = styled.div`
  display: flex;
  justify-content: center;
`

const LinkWrapper = styled.div`
  margin: 1.5rem 2rem;
`

const MenuLink = ({ to, children }) => (
  <LinkBlock>
    <LinkWrapper>
      <Link withUnderline to={to}>
        {children}
      </Link>
    </LinkWrapper>
  </LinkBlock>
)

export default MenuLink
