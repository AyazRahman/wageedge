import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Navigation from "./Navigation";
import Home from "./Home";
import Footer from "./Footer";
import Laws from "./Laws";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navigation />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/laws" exact component={Laws} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
