import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Navigation from "./common/Navigation";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import Laws from "./pages/Laws";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navigation />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/laws" exact component={Laws} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
