import React, {FC, useEffect, useState} from "react";
import { useParams } from "react-router";
import { fetchData } from "../../api/api";
import Container from "../../components/UI/Container";
import { Url } from "../../const";
import { ICharacter } from "../../types/types";



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
    <Container>
      <h1>Character</h1>

      Page of Character {id}

      {character && <div>
          <img style={{width: '500px'}} src={character.img} alt={character.name} />
          <h2>{character.name}</h2>
          <p>{character.char_id}</p>
          <p>{character.nickname}</p>
        </div>
      }
    </Container>
  );
}

export default Character;
