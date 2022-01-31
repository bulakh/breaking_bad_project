import axios from "axios";
import { URL_CHARACTER, URL_CHARACTERS, URL_DEATHS, URL_EPISODES, URL_QUOTES } from "../const";
import { ICharacter } from "../types/types";


type idType = string | undefined;

export async function fetchCharacters<T>():Promise<T | null> {
    try {
      const response = await axios.get(URL_CHARACTERS);
      return response.data;
    } catch (e) {
      alert(`Error: ${e}`);
      return null;
    }
}

export async function fetchEpisodes<T>():Promise<T | null> {
    try {
      const response = await axios.get(URL_EPISODES);
      return response.data;
    } catch (e) {
      alert(`Error: ${e}`);
      return null;
    }
}

export async function fetchQuotes<T>():Promise<T | null> {
  try {
    const response = await axios.get(URL_QUOTES);
    return response.data;
  } catch (e) {
    alert(`Error: ${e}`);
    return null;
  }
}

export async function fetchDeaths<T>():Promise<T | null>  {
  try {
    const response = await axios.get(URL_DEATHS);
    return response.data;
  } catch (e) {
    alert(`Error: ${e}`);
    return null;
  }
}

export async function fetchCharacter(setState: Function, id: idType) {
  try {
    const response = await axios.get<ICharacter[]>(URL_CHARACTER + id);
    setState(response.data[0]);
  } catch (e) {
    alert(`Error: ${e}`);
  }
}