import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from "../const";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Welcome from "../pages/Welcome/Welcome";


const AppRouter: FC<{}> = () => {
  return (
    <Routes>
      <Route path={AppRoute.WELCOME} element={<Welcome />} />
        <Route path={AppRoute.MAIN} element={<Main />}>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>  
  );
}

export default AppRouter;