import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Opening from "./content/Opening";
import PageBee from "./content/BeePath";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/opening">
        <Opening />
      </Route>
      <Route exact path="/PageBee">
        <PageBee />
      </Route>
      <Route exact path="/PageFlower">
        <PageBee />
      </Route>
      <Route exact path="/PageFood">
        <PageBee />
      </Route>
    </Switch>
  );
}
