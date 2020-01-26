import React from "react"
import styled, { css } from "styled-components"
import { BEIGE, BREAKPOINTS, GREY4, BLUE, WHITE } from "../constants"

const SectionWrapper = styled.section`
  background-color: ${BEIGE};
  display: flex;
  justify-content: center;

  ${({ dark }) =>
    !dark &&
    css`
      &:nth-child(even) {
        background-color: ${GREY4};
      }
    `}

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ dark }) =>
    dark &&
    css`
      background-color: ${BLUE};
      color: ${WHITE};
    `}
`

const ContentWrapper = styled.div`
  margin: 5rem 1.5rem;
  width: 100%;
  max-width: 910px;

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    margin: 5rem 3rem;
  }
`

const Section = ({ children, ...props }) => (
  <SectionWrapper {...props}>
    <ContentWrapper>{children}</ContentWrapper>
  </SectionWrapper>
)

export default Section
