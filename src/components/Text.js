import styled from "styled-components"
import { FONT_SIZE } from "../constants"

const Text = styled.p`
  margin-bottom: 6rem;
  font-size: ${({ small }) => (small ? FONT_SIZE.BASIC : FONT_SIZE.TEXT)};
`

export default Text
