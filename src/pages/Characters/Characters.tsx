import React, {FC, useEffect, useState} from "react";
import CharacterItem from "../../components/CharacterItem";
import Navbar from "../../components/Navbar";
import Block, { BlockVariant } from "../../components/UI/block";
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
      <Navbar />
      <h1>Characters</h1>



      <Block 
        width="200px" 
        height="200px" 
        variant={BlockVariant.primary} 
      >
        <button>Push me!!!!</button>
      </Block>
      

      <List 
        items={characters} 
        renderItem={(character: ICharacter) => <CharacterItem character={character} key={character.char_id} />}
      />
    </>
  );
}

export default Characters;