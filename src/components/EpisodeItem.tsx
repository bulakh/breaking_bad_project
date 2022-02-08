import React, {FC} from "react";
import styled from "styled-components";
import { getData } from "../hooks/useData";
import { Colors } from "../styles/variables";
import { IEpisode } from "../types/types";

interface EpisodeItemProps {
    episode: IEpisode;
}

const EpisodeTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 32px;
`

const EpisodeCategory = styled.span`
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 10px;

  font-weight: 550;
  font-size: 15px;

  border-radius: 13px;
  background: ${Colors.primary};
`

const EpisodeItem: FC<EpisodeItemProps> = ({episode}) => {
  return (
    <li>
        <EpisodeTitle>{episode.episode_id}. {episode.title}</EpisodeTitle>
        <EpisodeCategory>#{episode.series}</EpisodeCategory> <br /><br />
        🎥  Season: {episode.season} 🎬 Episode: {episode.episode} <br /><br />
        📺 Air date: {getData(episode.air_date)}
    </li>
  );
}

export default EpisodeItem;
