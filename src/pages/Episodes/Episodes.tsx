import React, {FC, useEffect, useState} from "react";
import EpisodeItem from "../../components/EpisodeItem";
import List from "../../components/UI/List";
import { fetchEpisodes } from "../../hooks/useFetch";
import { IEpisode } from "../../types/types";

const Episodes: FC = () => {

  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    fetchEpisodes(setEpisodes);
  }, [])

  return (
    <>
      <h1>Episodes</h1>

      <List
        items={episodes} 
        renderItem={(episode: IEpisode) => <EpisodeItem episode={episode} key={episode.episode_id}/>}
      />
    </>
  );
}

export default Episodes;