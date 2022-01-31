import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import EpisodeItem from "../../components/EpisodeItem";
import List from "../../components/UI/List";
import storeApp from "../../store/storeApp";
import { IEpisode } from "../../types/types";

const Episodes: FC = () => {
  const {episodes, setEpisodes, isLoading} = storeApp;

  useEffect(() => {
    if (episodes.length === 0) {
      setEpisodes();
    }
  }, [episodes, setEpisodes]);


  
  if (isLoading) {
    return <h2>Loading...</h2>
  }

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

export default observer(Episodes);