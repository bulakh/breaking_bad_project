import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import EpisodeItem from "../../components/EpisodeItem";
import List from "../../components/UI/List";
import storeApp from "../../store/storeApp";
import { IEpisode } from "../../types/types";
import Container from "../../components/UI/Container";
import PageTitle from "../../components/UI/PageTitle";
import Spin from "../../components/Spin";

const Episodes: FC = () => {
  const {episodes, setEpisodes, isLoading} = storeApp;

  useEffect(() => {
    if (episodes.length === 0) {
      setEpisodes();
    }
  }, [episodes, setEpisodes]);



  return (
    <Container>
      <PageTitle>Episodes</PageTitle>

      <Spin isLoading={isLoading} />

      <List
        items={episodes}
        renderItem={(episode: IEpisode) => <EpisodeItem episode={episode} key={episode.episode_id}/>}
      />
    </Container>
  );
}

export default observer(Episodes);
