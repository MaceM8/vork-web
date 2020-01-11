import { css } from "styled-components"

const hoverMedia = (...styles) => css`
  @media (hover: hover) {
    &:hover {
      ${css(...styles)}
    }
  }
`

export default hoverMedia
