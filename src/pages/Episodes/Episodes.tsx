import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import EpisodeItem from "../../components/EpisodeItem";
import List from "../../components/UI/List";
import storeApp from "../../store/storeApp";
import { IEpisode } from "../../types/types";
import PageTitle from "../../components/UI/PageTitle";
import Spin from "../../components/Spin";
import { EpisodesContainer, EpisodesList } from "./Episodes.styles";

const Episodes: FC = () => {
  const {episodes, setEpisodes, isLoading} = storeApp;

  useEffect(() => {
    if (episodes.length === 0) {
      setEpisodes();
    }
  }, [episodes, setEpisodes]);



  return (
    <EpisodesContainer>
      <PageTitle>Episodes</PageTitle>

      <Spin isLoading={isLoading} />

      <List
        as={EpisodesList}
        items={episodes}
        renderItem={(episode: IEpisode) => <EpisodeItem episode={episode} key={episode.episode_id}/>}
      />
    </EpisodesContainer>
  );
}

export default observer(Episodes);
