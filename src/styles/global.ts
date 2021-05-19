import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

// Style Reset
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 // Setting font size to 10px
  html {
    font-size: 62.5%
  }

  html, body, #__next {
    height: 100%;

  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
