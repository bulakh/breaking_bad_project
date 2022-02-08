import React, {FC, useEffect, useState} from "react";
import { useParams } from "react-router";
import { fetchData } from "../../api/api";
import Container from "../../components/UI/Container";
import { Url } from "../../const";
import { ICharacter } from "../../types/types";
import { CharacterCategories, CharacterCategory, CharacterContainer, CharacterImg, CharacterOccupation, CharacterSubTitle, CharacterText, CharacterTitle, CharacterWrap } from "./Character.styles";



const Character: FC = () => {
  const {id} = useParams<string>();
  const [character, setCharacter] = useState<ICharacter | null>(null);

  useEffect(() => {
    async function fetchCharacter() {
      const result = await fetchData<ICharacter[]>(`${Url.CHARACTERS}/${id}`);
      if (result) {
        setCharacter(result[0]);
      }
    }
    fetchCharacter();
  }, [id]);


  return (
    <CharacterContainer heightAll>

      {character && <CharacterWrap flex>
          <CharacterImg src={character.img} alt={character.name} />

          <Container>
            <CharacterTitle>{character.name}</CharacterTitle>
            <CharacterSubTitle>{character.nickname}</CharacterSubTitle>
            <CharacterCategories>{character.category.split(', ').map(category => <CharacterCategory>#{category}</CharacterCategory>)}</CharacterCategories>
            <CharacterText>Occupation: {character.occupation.map(deal => <CharacterOccupation><br /> 🧪 {deal}</CharacterOccupation>)}</CharacterText>
            <CharacterText>actor: {character.portrayed}</CharacterText>
          </Container>

        </CharacterWrap>
      }
    </CharacterContainer>
  );
}

export default Character;
