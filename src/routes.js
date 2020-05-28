import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import GamesNews from "./pages/gamesNews";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gamesnews" component={GamesNews} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
