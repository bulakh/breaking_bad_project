export interface ICharacter {
    char_id: number;
    name: string;
    birthday: string;
    occupation: string[];
    img: string;
    status: string;
    appearance: number[];
    nickname: string;
    portrayed: string;
    category: string;
};

export interface IEpisode {
    episode_id: number;
    title: string;
    season: number;
    episode: number;
    air_date: number;
    characters: string[];
    series: string;
};

export interface IQuote {
    quote_id: number,
    quote: string,
    author: string,
    series: string,
};

export interface IDeath {
    death_id: number,
    death: string,
    cause: string,
    responsible: string,
    episode: number,
    last_words: string,
    number_of_deaths: number,
    season: number,
};
