import styled, { css } from "styled-components"
import { Colors, Fonts } from "../../styles/variables"


const General = css`
  color: ${Colors.white};

  font-family: ${Fonts.cooper};
`

export const Title = styled.h1`
  ${General}

  font-size: 120px;
`

export const SubTitle = styled.p`
  ${General}

  margin-bottom: 152px;

  font-size: 55px;
  text-align: right;
`
