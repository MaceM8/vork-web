import React from "react"
import styled from "styled-components"

import Text from "./Text"
import Icon from "./Icon"
import Image from "./RoundImage"
import { PRIMARY, BREAKPOINTS } from "../constants"

const Wrapper = styled.div`
  display: grid;
  display: -ms-grid;
  grid-template-columns: 2fr 1fr;
  -ms-grid-columns: 2fr 1fr;
  grid-gap: 0.5rem;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`

const OutsideLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  color: ${PRIMARY};
  text-decoration: none;

  div {
    margin-right: 1rem;
  }
`

const UserClaim = styled.div`
  display: flex;
  flex-direction: column;
`

const UserClaimTitle = styled.h3`
  margin: 0;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ConnectMedailon = ({
  user: { linkedin, email, name, phone, Picture, text, title },
}) => (
  <Wrapper>
    <UserClaim>
      <UserClaimTitle>{title}</UserClaimTitle>
      <Text small>{text}</Text>
    </UserClaim>
    {console.log("Picture", Picture)}
    {/* <Image fixed={Picture.childImageSharp.fixed} alt={name} /> */}
    <LinksWrapper>
      <OutsideLink href={linkedin}>
        <Icon icon="linkedin" /> LinkedIn
      </OutsideLink>
      <OutsideLink href={`mailto:${email}`}>
        <Icon icon="email" />
        {email}
      </OutsideLink>
      <OutsideLink href={`tel:${phone}`}>
        <Icon icon="phone" />
        {phone}
      </OutsideLink>
    </LinksWrapper>
  </Wrapper>
)

export default ConnectMedailon
