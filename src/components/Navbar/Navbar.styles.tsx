import styled from "styled-components"
import { Colors } from "../../styles/variables"
import Container from "../UI/Container"


export const NavContainer = styled(Container)`
  background: ${Colors.bgTransparent};
`

export const NavList = styled.ul`
  margin: 200px 100px;

`

export const NavItem = styled.li`
  margin-bottom: 30px;
`
