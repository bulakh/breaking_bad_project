import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Helvetica Neue Cyr";
    src:
      local("Helvetica"),
      url("../fonts/HelveticaNeueCyr-Light.woff2") format("woff2"),
      url("../fonts/HelveticaNeueCyr-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue Cyr";
    src:
      local("Helvetica"),
      url("../fonts/HelveticaNeueCyr-Medium.woff2") format("woff2"),
      url("../fonts/HelveticaNeueCyr-Medium.woff") format("woff");
    font-weight: 550;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Cooper Black";
    src:
      local("Cooper Black"),
      url("../fonts/Cooper Black.woff2") format("woff2"),
      url("../fonts/Cooper Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;

export default FontStyles;


