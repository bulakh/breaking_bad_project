import React, {FC} from "react";
import { IEpisode } from "../types/types";

interface EpisodeItemProps {
    episode: IEpisode;
}

const EpisodeItem: FC<EpisodeItemProps> = ({episode}) => {
  return (
    <div>
        
        <h1>{episode.episode_id}. {episode.title}</h1>
        Season: {episode.season}, episode {episode.episode}
    </div>
  );
}

export default EpisodeItem;