import React, {ChangeEvent, FC, useEffect, useState} from "react";
import CharacterItem from "../../components/CharacterItem";
import List from "../../components/UI/List";
import { fetchCharacters } from "../../hooks/useFetch";
import { findCharacter } from "../../hooks/useFilter";
import { ICharacter } from "../../types/types";



const Characters: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [find, setFind] = useState<string>('');
  
  useEffect(() => {
    fetchCharacters(setCharacters);
  }, []);

 

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFind(e.target.value);
  };

  const filteredCharacters = findCharacter(find, characters);
  

  return (
    <>
      <h1>Characters</h1>

      <input onChange={changeInputHandler} type="text" value={find} placeholder="Search character..."/>
      {/* <Input onChange={(e: ChangeEvent<HTMLInputElement>) => changeInputHandler} value={find} placeholder="Search character..." /> */}

      <List 
        flex
        items={find === '' ? characters : filteredCharacters} 
        renderItem={(character: ICharacter) => <CharacterItem character={character} key={character.char_id} />}
      />
    </>
  );
};

export default Characters;