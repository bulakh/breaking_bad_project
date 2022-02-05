import React, {FC} from "react";
import { IEpisode } from "../types/types";

interface EpisodeItemProps {
    episode: IEpisode;
}

const EpisodeItem: FC<EpisodeItemProps> = ({episode}) => {
  return (
    <li>
        <h2>{episode.episode_id}. {episode.title}</h2>
        Season: {episode.season}, episode {episode.episode}
    </li>
  );
}

export default EpisodeItem;
