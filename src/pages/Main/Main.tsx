import React, {FC} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { AppRoute } from "../../const";
import Characters from "../Characters/Characters";
import Character from "../Character/Character";
import Deathes from "../Deathes/Deathes";
import Episodes from "../Episodes/Episodes";
import Quotes from "../Quotes/Quotes";

const Main: FC = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path={AppRoute.CHARACTERS} element={<Characters />} />
        <Route path={AppRoute.CHARACTER} element={<Character />} />
        <Route path={AppRoute.EPISODES} element={<Episodes />} />
        <Route path={AppRoute.QUOTES} element={<Quotes />} />
        <Route path={AppRoute.DEATHES} element={<Deathes />} />
      </Routes>
    </>
  );
}

export default Main;