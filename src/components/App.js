import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Navigation from "./Navigation";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navigation />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
