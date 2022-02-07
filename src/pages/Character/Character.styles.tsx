import styled from "styled-components"
import Container from "../../components/UI/Container"
import { Colors, Fonts } from "../../styles/variables"

export const CharacterContainer = styled(Container)`
  color: ${Colors.white};
  padding: 50px;
`

export const CharacterWrap = styled(Container)`
  gap: 50px;
`

export const CharacterTitle = styled.h1`
  margin-bottom: 20px;

  font-family: ${Fonts.cooper};
  font-size: 56px;
`
export const CharacterSubTitle = styled.h2`
  margin-bottom: 41px;

  font-size: 30px;
  font-weight: 300;
`

export const CharacterImg = styled.img`
  width: 400px;
  object-fit: cover;
`

export const CharacterCategories = styled.div`
  margin-bottom: 45px;
`

export const CharacterCategory = styled.span`
  margin-right: 10px;
  padding: 10px;

  font-weight: 550;
  font-size: 15px;

  border-radius: 13px;
  background: ${Colors.primary};
`
export const CharacterOccupation = styled.span`
  margin-left: 10px;
  font-size: 17px;
`

export const CharacterText = styled.p`
  font-size: 24px;

  margin-bottom: 60px;
`






