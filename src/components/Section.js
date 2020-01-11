import styled, { css } from "styled-components"
import { BEIGE } from "../constants"

const Section = styled.section`
  padding: 10rem 1rem;
  background-color: ${BEIGE};

  ${({ narrow }) =>
    narrow &&
    css`
      max-width: 40rem;
    `}
`

export default Section
