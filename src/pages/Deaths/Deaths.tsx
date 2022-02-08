import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import DeathItem from "../../components/DeathItem";
import List from "../../components/UI/List";
import storeApp from "../../store/storeApp";
import { IDeath } from "../../types/types";
import PageTitle from "../../components/UI/PageTitle";
import Spin from "../../components/Spin";
import { DeathsContainer } from "./Deaths.styles";

const Deaths: FC = () => {

  const {deaths, setDeaths, isLoading} = storeApp;

  useEffect(() => {
    if (deaths.length === 0) {
      setDeaths();
    }
  }, [deaths, setDeaths]);

  const sortedDeaths = deaths.slice().sort((a: IDeath, b: IDeath ) => (a.death_id - b.death_id));

  return (
    <DeathsContainer>
      <PageTitle>Deathes</PageTitle>

      <Spin isLoading={isLoading} />

      <List
        items={sortedDeaths}
        renderItem={(death: IDeath) => <DeathItem death={death} key={death.death_id}/>}
      />
    </DeathsContainer>
  );
}

export default observer(Deaths);
