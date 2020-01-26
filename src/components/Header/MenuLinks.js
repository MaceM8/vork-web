import React from "react"
import Link from "../Link"
import styled from "styled-components"

const LinkWrapper = styled.div`
  margin: 1.5rem 2rem;
`

const MenuLinks = () => (
  <>
    <LinkWrapper>
      <Link withUnderline to="/">
        Domů
      </Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link withUnderline to="/pomahame">
        S čím pomáháme
      </Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link withUnderline to="/o-nas">
        O nás
      </Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link withUnderline to="/blog">
        Blog
      </Link>
    </LinkWrapper>
    <LinkWrapper>
      <Link withUnderline to="/kontakt">
        Kontakt
      </Link>
    </LinkWrapper>
  </>
)

export default MenuLinks
