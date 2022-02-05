import React, {FC} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ICharacter } from "../types/types";

interface CharacterItemProps {
    character: ICharacter;
}

const StyledItem = styled.li`
  width: 214px;
  height: 315px;

  cursor: pointer;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CharacterItem: FC<CharacterItemProps> = ({character}) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${character.char_id}`);
  };

  return (
    <StyledItem onClick={clickHandler}>
      <StyledImg src={character.img} alt={character.name} />

      {/* <p>{character.char_id}. {character.name}</p> */}
    </StyledItem>

  );
}

export default CharacterItem;
