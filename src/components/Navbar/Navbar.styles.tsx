import styled, { css } from "styled-components"
import { Colors, Fonts } from "../../styles/variables"


const General = css`
  color: ${Colors.white};

  font-family: ${Fonts.cooper};
`

export const NavList = styled.ul`
  margin: 200px 20px;
`

export const NavItem = styled.li`
  margin: 20px;

  & a {
    color: ${Colors.white};
  }
`

