import React, {ChangeEvent, FC, useEffect, useState} from "react";
import { observer } from "mobx-react";
import CharacterItem from "../../components/CharacterItem";
import { findCharacter } from "../../hooks/useFilter";
import storeApp from "../../store/storeApp";
import { ICharacter } from "../../types/types";
import PageTitle from "../../components/UI/PageTitle";
import Spin from "../../components/Spin";
import { CharactersContainer, CharactersInput, CharactersList } from "./Characters.styles";
import List from "../../components/UI/List";


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

  const filteredCharacters = findCharacter<ICharacter>(find, characters);


  return (
    <CharactersContainer flex column>
      <PageTitle hide>Characters</PageTitle>

      {!isLoading &&
        <CharactersInput onChange={changeInputHandler} value={find} placeholder="Say my name..."/>
      }

      <Spin isLoading={isLoading} />


      <List
        as={CharactersList}
        items={find === '' ? characters : filteredCharacters}
        renderItem={(character: ICharacter) => <CharacterItem character={character} key={character.char_id} />}
      />


    </CharactersContainer>
  );
};

export default observer(Characters);
