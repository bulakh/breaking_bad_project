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
}

export interface IEpisode {
    episode_id: number;
    title: string;
    season: number;
    episode: number;
    air_date: number;
    characters: string[];
}