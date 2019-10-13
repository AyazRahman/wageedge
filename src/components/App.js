import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//import history from "../history";
import Navigation from "./common/Navigation";
import Footer from "./common/Footer";
import Home from "./pages/Home";

import Workrights from "./pages/Workrights";
//import Workrightsn from "./pages/Workrights";
import Minwage from "./pages/Minwage";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import LegalAdvice from "./pages/LegalAdvice";
import Interactive from "./pages/Interactive";
import Workright from "./pages/Workright";
import JobInsight from "./pages/JobInsight";

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
              <Route path="/workrights" exact component={Workright} />
              <Route path="/workrights/:id" exact component={Workrights} />
              <Route path="/careerassist" exact component={JobInsight} />
              <Route path="/quiz" exact component={Quiz} />
              <Route path="/minwage" exact component={Minwage} />
              <Route path="/legaladvice" exact component={LegalAdvice} />
              <Route path="/about" exact component={About} />
              <Route path="/interactive" exact component={Interactive} />
            </Switch>
          </Scroll>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
