import React from "react"
import styled, { css } from "styled-components"
import { BEIGE, BLUE, BREAKPOINTS, WHITE } from "../constants"

const SectionWrapper = styled.section`
  background-color: ${BEIGE};
  display: flex;
  justify-content: center;

  &:nth-child(even) {
    background-color: ${BLUE};
    color: ${WHITE};
  }

  ${({ center }) =>
    center &&
    css`
      text-align: center;
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
