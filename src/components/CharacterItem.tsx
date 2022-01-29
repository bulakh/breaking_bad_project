import React, {FC} from "react";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../types/types";

interface CharacterItemProps {
    character: ICharacter;
}

const CharacterItem: FC<CharacterItemProps> = ({character}) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${character.char_id}`);
  };

  return (
    <div onClick={clickHandler} style={{width: '100px', border: '1px solid black', margin: '10px'}}>
      <img style={{width: '100px'}} src={character.img} alt={character.name} />

      <p>{character.char_id}. {character.name}</p>
    </div>
    
  );
}

export default CharacterItem;