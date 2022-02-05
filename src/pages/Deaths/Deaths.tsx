import React, {FC, useEffect} from "react";
import { observer } from "mobx-react";
import DeathItem from "../../components/DeathItem";
import List from "../../components/UI/List";
import storeApp from "../../store/storeApp";
import { IDeath } from "../../types/types";
import Container from "../../components/UI/Container";
import PageTitle from "../../components/UI/PageTitle";
import Spin from "../../components/Spin";

const Deaths: FC = () => {

  const {deaths, setDeaths, isLoading} = storeApp;

  useEffect(() => {
    if (deaths.length === 0) {
      setDeaths();
    }
  }, [deaths, setDeaths]);


  return (
    <Container>
      <PageTitle>Deathes</PageTitle>

      <Spin isLoading={isLoading} />

      <List
        items={deaths}
        renderItem={(death: IDeath) => <DeathItem death={death} key={death.death_id}/>}
      />
    </Container>
  );
}

export default observer(Deaths);
