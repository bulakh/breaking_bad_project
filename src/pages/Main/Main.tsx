import React, {FC} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { AppRoute } from "../../const";
import Characters from "../Characters/Characters";
import Character from "../Character/Character";
import Deaths from "../Deaths/Deaths";
import Episodes from "../Episodes/Episodes";
import Quotes from "../Quotes/Quotes";
import Container from "../../components/UI/Container";

const Main: FC = () => {
  return (
    <Container flex>
      <Navbar />

      <Routes>
        <Route path={AppRoute.CHARACTERS} element={<Characters />} />
        <Route path={AppRoute.CHARACTER} element={<Character />} />
        <Route path={AppRoute.EPISODES} element={<Episodes />} />
        <Route path={AppRoute.QUOTES} element={<Quotes />} />
        <Route path={AppRoute.DEATHS} element={<Deaths />} />
      </Routes>
    </Container>
  );
}

export default Main;
