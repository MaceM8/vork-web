import styled, { css } from "styled-components"
import { FONT_SIZE } from "../constants"

const Heading = styled.h2`
  font-weight: bold;
  margin: 0;

  ${({ small }) =>
    !small &&
    css`
      margin-bottom: 4rem;
      font-size: ${FONT_SIZE.HEADING};
    `}
`

export default Heading
