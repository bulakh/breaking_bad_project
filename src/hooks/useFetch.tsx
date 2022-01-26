import axios from "axios";
import { URL_CHARACTER, URL_CHARACTERS, URL_EPISODES } from "../const";
import { ICharacter, IEpisode } from "../types/types";

export async function fetchCharacters(setState: Function) {
    try {
      const response = await axios.get<ICharacter[]>(URL_CHARACTERS);
      setState(response.data);
    } catch (e) {
      alert(`Error:${e}`);
    }
}

type idType = string | undefined;

export async function fetchCharacter(setState: Function, id: idType) {
  try {
    const response = await axios.get<ICharacter[]>(URL_CHARACTER + id);
    setState(response.data[0]);
  } catch (e) {
    alert(`Error:${e}`);
  }
}

export async function fetchEpisodes(setState: Function) {
    try {
      const response = await axios.get<IEpisode[]>(URL_EPISODES);
      setState(response.data);
    } catch (e) {
      alert(`Error:${e}`);
    }
}