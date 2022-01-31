import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import DeathItem from "../../components/DeathItem";
import List from "../../components/UI/List";
import storeApp from "../../store/storeApp";
import { IDeath } from "../../types/types";

const Deaths: FC = () => {

  const {deaths, setDeaths, isLoading} = storeApp;

  useEffect(() => {
    if (deaths.length === 0) {
      setDeaths();
    }
  }, [deaths, setDeaths]);



  if (isLoading) {
    return <h2>Loading...</h2>
  }

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

export default observer(Deaths);