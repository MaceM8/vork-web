import React from "react"
import styled, { css } from "styled-components"
import { BEIGE, BREAKPOINTS, GREY3, BLUE, WHITE } from "../constants"

const SectionWrapper = styled.section`
  background-color: ${BEIGE};
  display: flex;
  justify-content: center;

  ${({ dark }) =>
    !dark &&
    css`
      &:nth-child(even) {
        background-color: ${GREY3};
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
    margin: 7rem 3rem;
  }
`

const Section = ({ children, ...props }) => (
  <SectionWrapper {...props}>
    <ContentWrapper>{children}</ContentWrapper>
  </SectionWrapper>
)

export default Section
