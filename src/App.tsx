import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import GlobalStyles from "./styles/global";
import FontStyles from "./styles/fonts";


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <FontStyles />
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);
