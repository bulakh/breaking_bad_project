import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from "../const";
import Characters from "../pages/Characters/Characters";
import Deathes from "../pages/Deathes/Deathes";
import Episodes from "../pages/Episodes/Episodes";
import NotFound from "../pages/NotFound/NotFound";
import Quotes from "../pages/Quotes/Quotes";
import Welcome from "../pages/Welcome/Welcome";


const AppRouter: FC<{}> = () => {
  return (
    <Routes>
      <Route path={AppRoute.WELCOME} element={<Welcome />} />
      <Route path={AppRoute.CHARACTERS} element={<Characters />} />
      <Route path={AppRoute.EPISODES} element={<Episodes />} />
      <Route path={AppRoute.QUOTES} element={<Quotes />} />
      <Route path={AppRoute.DEATHES} element={<Deathes />} />
      <Route path='*' element={<NotFound />} />
    </Routes>  
  );
}

export default AppRouter;