import styled from "styled-components"
import Container from "../../components/UI/Container"
import Input from "../../components/UI/Input"

export const CharactersContainer = styled(Container)`
  margin-bottom: 20px;
  padding: 50px;
  flex-grow: 1;
`

export const CharactersInput = styled(Input)`
  margin-bottom: 47px;

  align-self: end;
`

export const CharactersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 2.48%;
  row-gap: 33px;

  min-height: 100vh;

  &::after {
    content: "";
    flex: auto;
  }
`


