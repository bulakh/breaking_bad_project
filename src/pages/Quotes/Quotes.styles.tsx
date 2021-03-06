import styled from "styled-components"
import Container from "../../components/UI/Container"
import { Colors } from "../../styles/variables"

export const QuotesContainer = styled(Container)`
  color: ${Colors.white};
  padding: 50px;
`

export const QuotesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;

`
