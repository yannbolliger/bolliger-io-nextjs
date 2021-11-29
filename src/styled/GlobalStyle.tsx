import { createGlobalStyle } from "styled-components"

import { baseFontSize, colors } from "."

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
    font-size: ${baseFontSize}px;
    font-weight: 400;
    line-height: 1.3333;
    color: ${colors.textColor};

    background: ${colors.primary};
    overflow-x: hidden;
  }
  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var", "Inter", "Helvetica Neue", Arial, sans-serif;
    }
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    outline: none;
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
