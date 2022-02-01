import { makeAutoObservable } from "mobx";
import { fetchData } from "../api/api";
import { Url } from "../const";
import { ICharacter, IDeath, IEpisode, IQuote } from "../types/types"


class Store {
    constructor() {
      makeAutoObservable(this)
    }
  
    isLoading:boolean = false;
    characters: ICharacter[] = [];
    episodes: IEpisode[] = [];
    quotes: IQuote[] = [];
    deaths: IDeath[] = [];

    private setData = async <T>(url: string):Promise<T | []> => {
      try {
        this.isLoading = true;
        const result = await fetchData<T>(url);
        if (result) {
          return result;
        } else {
          return [];
        }
      } finally {
        this.isLoading = false;
      }
    }

    setCharacters = async () => {
      this.characters = await this.setData<ICharacter[]>(Url.CHARACTERS).then(data => data);
    }

    setEpisodes = async () => {
      this.episodes = await this.setData<IEpisode[]>(Url.EPISODES).then(data => data);
    }

    setQuotes = async () => {
      this.quotes = await this.setData<IQuote[]>(Url.QUOTES).then(data => data);
    }

    setDeaths = async () => {
      this.deaths = await this.setData<IDeath[]>(Url.DEATHS).then(data => data);
    }
}

const storeApp = new Store();
export default storeApp;