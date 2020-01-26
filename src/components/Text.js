import styled, { css } from "styled-components"
import { FONT_SIZE } from "../constants"

const Text = styled.p`
  margin-bottom: 6rem;
  font-size: ${FONT_SIZE.TEXT};

  ${({ small }) =>
    small &&
    css`
      margin: 0;
      font-size: ${FONT_SIZE.BASIC};
    `}
`

export default Text
