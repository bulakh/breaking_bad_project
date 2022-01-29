import { makeAutoObservable } from "mobx";
import { fetchCharacters } from "../hooks/useFetch";
import { ICharacter } from "../types/types"


class Store {
    constructor() {
      makeAutoObservable(this)
    }
  
    isLoading:boolean = false;
    characters: ICharacter[] = [];
  
    setCharacters = async () => {
      try {
        this.isLoading = true;
        const result = await fetchCharacters<ICharacter[]>();
        if (result) {
          this.characters = result;
        }
      } finally {
        this.isLoading = false;
      }
    }
}

const storeApp = new Store();
export default storeApp;