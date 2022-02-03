import { createGlobalStyle } from "styled-components";
import { Colors, Fonts } from "./variables";


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    margin: 0 auto;
  }

  html {
    background-color: ${Colors.background};
    font-family: ${Fonts.helvetica};
  }

  a {
    text-decoration: none;
  }

  li {
  list-style: none;
}
`

export default GlobalStyles;
