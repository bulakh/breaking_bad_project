import React, {FC, useEffect, useState} from "react";
import CharacterItem from "../../components/CharacterItem";
import List from "../../components/UI/List";
import { fetchCharacters } from "../../hooks/useFetch";
import { ICharacter } from "../../types/types";



const Characters: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  
  useEffect(() => {
    fetchCharacters(setCharacters);
  }, []);

  return (
    <>
      <h1>Characters</h1>

      <List 
        flex
        items={characters} 
        renderItem={(character: ICharacter) => <CharacterItem character={character} key={character.char_id} />}
      />
    </>
  );
}

export default Characters;