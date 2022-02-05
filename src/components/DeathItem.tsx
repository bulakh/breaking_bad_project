import React, {FC} from "react";
import { IDeath } from "../types/types";


interface DeathItemProps {
    death: IDeath;
}

const DeathItem: FC<DeathItemProps> = ({death}) => {
  return (
    <li>
        <h3>{death.death_id}. {death.death}</h3>
        <p>Responsible: {death.responsible}</p>
        <p>Cause: {death.cause}</p>
        <p>Episode: {death.episode}</p>
    </li>
  );
}

export default DeathItem;
