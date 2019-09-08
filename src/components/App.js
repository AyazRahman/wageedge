import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

//import history from "../history";
import Navigation from "./common/Navigation";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import Workrights from "./pages/Workrights";
//import Workrightsn from "./pages/Workrights";
import Minwage from "./pages/Minwage";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

import { withRouter } from "react-router";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const Scroll = withRouter(ScrollToTop);

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navigation />
        <div>
          <Scroll>
            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/workrights/:id" exact component={Workrights} />
              <Route path="/workights" exact>
                <Redirect to="/workrights/1"></Redirect>
              </Route>

              <Route path="/quiz" exact component={Quiz} />
              <Route path="/minwage" exact component={Minwage} />
              <Route path="/about" exact component={About} />
            </Switch>
          </Scroll>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
