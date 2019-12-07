import React from "react";
import { Route } from "react-router-dom";
import Home from "../home/Home";
import Races from "../races/Races";
import Spells from "../spells/Spells";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Races" component={Races} />
    </div>
  );
};

export default Routes;
