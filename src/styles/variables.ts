import { css } from "styled-components";

export const enum Colors {
  background = '#44954C',
  backgroundDark = `linear-gradient(180deg, #44954C 12.5%, #000000 78.65%)`,
  backgroundLight = `linear-gradient(180deg, #FCFCFC 32.29%, #39DB49 87.5%)`,
  white = '#FFFFFF',
  bgTransparent = 'rgba(151, 215, 157, 0.25)',
  primary = '#EB3670',
}

export const enum Fonts {
  helvetica = `"Helvetica Neue Cyr", "Arial", sans-serif`,
  cooper = `"Cooper Black","Palatino", serif;`
}

export const Hidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`
