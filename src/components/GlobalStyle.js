import { createGlobalStyle } from "styled-components"

import { PRIMARY, FONT_SIZE } from "../constants"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    height: 100%;
    font-size: ${FONT_SIZE.BASIC};
  }

  body {
    margin: 0;
    height: 100%;
    letter-spacing: 0.5px;
    font-family: 'Avenir', sans-serif;
    color: ${PRIMARY}
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

export default GlobalStyle
