import React from "react"
import styled from "styled-components"

import Icon from "./Icon"
import {
  GREY3,
  BLUE,
  BREAKPOINTS,
  WHITE,
  TRANSITION_TIME,
  PRIMARY,
} from "../constants"

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${GREY3};
  padding: 2rem;
  justify-content: space-between;

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    flex-direction: row;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem;

  & a {
    margin-right: 1.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`

const RulesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    order: -1;
  }
`

const FooterIcon = styled(Icon)`
  padding: 0.5rem;
  border: 1px solid ${BLUE};
  border-radius: 50%;
  transition: all ${TRANSITION_TIME};
  cursor: pointer;

  svg {
    path {
      fill: ${BLUE};
    }
  }

  @media (hover: hover) {
    &:hover {
      background: ${BLUE};

      svg {
        path {
          fill: ${WHITE};
        }
      }
    }
  }
`

const MenuLink = styled.a`
  position: relative;
  text-align: center;
  text-decoration: none;
  padding-top: 0.7rem;
  color: ${PRIMARY};

  ::after {
    position: absolute;
    content: " ";
    width: 0px;
    height: 0px;
    border: 1px solid black;
    border-right: transparent;
    border-bottom: transparent;
    padding: 0.5rem;
    transform: translate(-50%, 0) rotate(45deg);
    top: 0px;
    left: 50%;
  }
`

const Footer = () => (
  <FooterWrapper>
    <MenuLink href="#header">menu</MenuLink>
    <IconsWrapper>
      <a href="https://medium.com/">
        <FooterIcon icon="medium" />
      </a>
      <a href="https://www.linkedin.com/company/vork-consulting">
        <FooterIcon icon="linkedin" />
      </a>
      <a href="https://instagram.com/vork_cz?igshid=elrmleoleau9">
        <FooterIcon icon="instagram" />
      </a>
      <a href="https://www.facebook.com/1320192124779301/">
        <FooterIcon icon="facebook" />
      </a>
    </IconsWrapper>
    <RulesWrapper>Naše zásady ochrany osobních údajů</RulesWrapper>
  </FooterWrapper>
)

export default Footer
