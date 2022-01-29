import React, {FC, useEffect, useState} from "react";
import { useParams } from "react-router";
import { fetchCharacter } from "../../hooks/useFetch";
import { ICharacter } from "../../types/types";



const Character: FC = () => {
  const {id} = useParams<string>();
  const [character, setCharacter] = useState<ICharacter | null>(null);

  useEffect(() => {
    fetchCharacter(setCharacter, id);
  }, [id]);
  

  return (
    <>
      <h1>Character</h1>

      Page of Character {id}

      {character && <div>
          <img style={{width: '500px'}} src={character.img} alt={character.name} />
          <h2>{character.name}</h2>
          <p>{character.char_id}</p>
          <p>{character.nickname}</p>
        </div>
      }
    </>
  );
}

export default Character;