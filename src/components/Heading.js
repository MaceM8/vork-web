import styled, { css } from "styled-components"
import { FONT_SIZE } from "../constants"

const Heading = styled.h2`
  font-weight: bold;
  margin: 1rem 0 2rem;

  ${({ small }) =>
    !small &&
    css`
      margin-bottom: 4rem;
      font-size: ${FONT_SIZE.HEADING};
    `};

  text-align: ${({ center }) => center && ` center`};
`

export default Heading
