import React, {ChangeEvent, FC, useEffect, useState} from "react";
import { observer } from "mobx-react";
import CharacterItem from "../../components/CharacterItem";
import List from "../../components/UI/List";
import { findCharacter } from "../../hooks/useFilter";
import storeApp from "../../store/storeApp";
import { ICharacter } from "../../types/types";


const Characters: FC = () => {
  const [find, setFind] = useState<string>('');
  const {characters, setCharacters, isLoading} = storeApp;
  
  useEffect(() => {
    if (characters.length === 0) {
      setCharacters();
    }
  }, [characters, setCharacters]);


  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFind(e.target.value);
  };

  const filteredCharacters = findCharacter(find, characters);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h1>Characters</h1>

      <input onChange={changeInputHandler} type="text" value={find} placeholder="Search character..."/>

      <List 
        flex
        items={find === '' ? characters : filteredCharacters} 
        renderItem={(character: ICharacter) => <CharacterItem character={character} key={character.char_id} />}
      />
    </>
  );
};

export default observer(Characters);