import { createGlobalStyle } from "styled-components"

// TODO import fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'); 

  html {
    scroll-behavior: smooth;
    height: 100%;
    font-size: 13px;
  }

  body {
    margin: 0;
    height: 100%;
    letter-spacing: 0.5px;
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyle
