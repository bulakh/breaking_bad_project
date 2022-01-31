import { makeAutoObservable } from "mobx";
import { fetchCharacters, fetchDeaths, fetchEpisodes, fetchQuotes } from "../hooks/useFetch";
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

    setEpisodes = async () => {
      try {
        this.isLoading = true;
        const result = await fetchEpisodes<IEpisode[]>();
        if (result) {
          this.episodes = result;
        }
      } finally {
        this.isLoading = false;
      }
    }

    setQuotes = async () => {
      try {
        this.isLoading = true;
        const result = await fetchQuotes<IQuote[]>();
        if (result) {
          this.quotes = result;
        }
      } finally {
        this.isLoading = false;
      }
    }

    setDeaths = async () => {
      try {
        this.isLoading = true;
        const result = await fetchDeaths<IDeath[]>();
        if (result) {
          this.deaths = result;
        }
      } finally {
        this.isLoading = false;
      }
    }
}

const storeApp = new Store();
export default storeApp;