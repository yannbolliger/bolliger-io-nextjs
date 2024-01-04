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
    font-size: ${baseFontSize}px;
    font-weight: 400;
    line-height: 1.3333;
    color: ${colors.textColor};

    background: ${colors.primary};
    overflow-x: hidden;

    scroll-behavior: smooth;
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

  a:hover {
    font-style: italic;
  }
`

export default GlobalStyle
