import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";


const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);
