import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';
import Characters from "../pages/Characters/Characters";
import NotFound from "../pages/NotFound/NotFound";
import Welcome from "../pages/Welcome/Welcome";


const AppRouter: FC<{}> = () => {
  return (
    <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='characters' element={<Characters />} />
        <Route path='*' element={<NotFound />} />
    </Routes>  
  );
}

export default AppRouter;