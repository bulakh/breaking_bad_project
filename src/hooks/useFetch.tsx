import axios from "axios";
import { Url } from "../const";
import { ICharacter } from "../types/types";


type idType = string | undefined;

export async function fetchCharacter(setState: Function, id: idType) {
  try {
    const response = await axios.get<ICharacter[]>(Url.CHARACTER + id);
    setState(response.data[0]);
  } catch (e) {
    alert(`Error: ${e}`);
  }
}