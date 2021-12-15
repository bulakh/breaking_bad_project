import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from "../const";
import Characters from "../pages/Characters/Characters";
import NotFound from "../pages/NotFound/NotFound";
import Welcome from "../pages/Welcome/Welcome";


const AppRouter: FC<{}> = () => {
  return (
    <Routes>
      <Route path={AppRoute.WELCOME} element={<Welcome />} />
      <Route path={AppRoute.CHARACTERS} element={<Characters />} />
      <Route path='*' element={<NotFound />} />
    </Routes>  
  );
}

export default AppRouter;