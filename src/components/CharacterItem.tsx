import React, {FC} from "react";
import { ICharacter } from "../types/types";

interface CharacterItemProps {
    character: ICharacter;
}

const CharacterItem: FC<CharacterItemProps> = ({character}) => {
  return (
    <div>
        {character.char_id}. {character.name}

        <img style={{width: '100px'}} src={character.img} alt={character.name} />
    </div>
  );
}

export default CharacterItem;