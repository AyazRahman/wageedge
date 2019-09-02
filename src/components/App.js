import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "../history";
import Navigation from "./common/Navigation";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import Workrights from "./pages/Workrights";
import Minwage from "./pages/Minwage";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navigation />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/workrights/:id" exact component={Workrights} />
            <Route path="/workights">
              <Redirect to="/workrights/1"></Redirect>
            </Route>
            <Route path="/quiz" exact component={Quiz} />
            <Route path="/minwage" exact component={Minwage} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
