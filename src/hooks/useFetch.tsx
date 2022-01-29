import axios from "axios";
import { URL_CHARACTER, URL_CHARACTERS, URL_EPISODES } from "../const";
import { ICharacter, IEpisode } from "../types/types";

export async function fetchCharacters<T>():Promise<T | null> {
    try {
      const response = await axios.get(URL_CHARACTERS);
      return response.data;
    } catch (e) {
      alert(`Error: ${e}`);
      return null;
    }
}

type idType = string | undefined;

export async function fetchCharacter(setState: Function, id: idType) {
  try {
    const response = await axios.get<ICharacter[]>(URL_CHARACTER + id);
    setState(response.data[0]);
  } catch (e) {
    alert(`Error: ${e}`);
  }
}

export async function fetchEpisodes(setState: Function) {
    try {
      const response = await axios.get<IEpisode[]>(URL_EPISODES);
      setState(response.data);
    } catch (e) {
      alert(`Error: ${e}`);
    }
}