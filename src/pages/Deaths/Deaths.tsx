import React, {FC, useEffect, useState} from "react";
import DeathItem from "../../components/DeathItem";
import List from "../../components/UI/List";
import { fetchDeaths } from "../../hooks/useFetch";
import { IDeath } from "../../types/types";

const Deaths: FC = () => {

  const [deaths, setDeathes] = useState<IDeath[]>([]);

  useEffect(() => {
    fetchDeaths(setDeathes);
  }, [])

  return (
    <>
      <h1>Deathes</h1>

      <List
        items={deaths} 
        renderItem={(death: IDeath) => <DeathItem death={death} key={death.death_id}/>}
      />
    </>
  );
}

export default Deaths;