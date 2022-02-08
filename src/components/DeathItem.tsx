import React, {FC} from "react";
import styled from "styled-components";
import { IDeath } from "../types/types";


interface DeathItemProps {
    death: IDeath;
}

const StyledItems = styled.li`
  margin-bottom: 40px;
`

const DeathTitle = styled.h2`
  font-size: 35px;
  margin-bottom: 20px;
`

const DeathText = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 300;
`



const DeathItem: FC<DeathItemProps> = ({death}) => {
  return (
    <StyledItems>
        <DeathTitle>{death.death} 💀</DeathTitle>
        <DeathText> 🪒 Responsible: {death.responsible}</DeathText>
        <DeathText> ❌ Cause: {death.cause}</DeathText>
        <DeathText> 💬 Last words: &#8220;{death.last_words}&#8221;</DeathText>
        🎥  Season: {death.season} 🎬 Episode: {death.episode}
    </StyledItems>
  );
}

export default DeathItem;
