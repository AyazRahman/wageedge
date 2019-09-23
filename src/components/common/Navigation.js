import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.location.pathname, show: "" };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ active: this.props.location.pathname });
    }
  }

  toggleShow = () => {
    //debugger;
    let dropdown = document.getElementById("navbarResponsive");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.toggle("show");
    }
  };

  render() {
    let { active } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
        id="mainNav"
      >
        <div className="container">
          <Link
            onClick={() => this.toggleShow()}
            className="navbar-brand"
            to="/"
          >
            Wage Edge
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>Menu </span>
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  onClick={() => this.toggleShow()}
                  className={`nav-link  ${active === "/" ? "active-link" : ""}`}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={() => this.toggleShow()}
                  className={`nav-link ${
                    active === "/minwage" ? "active-link" : ""
                  }`}
                  to="/minwage"
                >
                  Minimum Wage
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  onClick={() => this.toggleShow()}
                  className={`nav-link dropdown-toggle ${
                    active === "/workrights" ? "active-link" : ""
                  }`}
                  to="/workrights"
                >
                  Workrights
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right mega-menu"
                  id="dropBar"
                  style={{ marginTop: 0 }}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="nav-item">
                        <Link
                          onClick={() => this.toggleShow()}
                          className={`nav-link ${
                            active === "/workrights/0" ? "active-link" : ""
                          }`}
                          to="/workrights/0"
                        >
                          Work Restrictions
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="nav-item">
                        <Link
                          onClick={() => this.toggleShow()}
                          className={`nav-link ${
                            active === "/workrights/1" ? "active-link" : ""
                          }`}
                          to="/workrights/1"
                        >
                          Volunteer Work
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="nav-item">
                        <Link
                          onClick={() => this.toggleShow()}
                          className={`nav-link ${
                            active === "/workrights/2" ? "active-link" : ""
                          }`}
                          to="/workrights/2"
                        >
                          Pay in Cash
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="nav-item">
                        <Link
                          onClick={() => this.toggleShow()}
                          className={`nav-link ${
                            active === "/workrights/3" ? "active-link" : ""
                          }`}
                          to="/workrights/3"
                        >
                          Deduct Money
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="nav-item">
                        <Link
                          onClick={() => this.toggleShow()}
                          className={`nav-link ${
                            active === "/workrights/4" ? "active-link" : ""
                          }`}
                          to="/workrights/4"
                        >
                          Tax File Number
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="nav-item">
                        <Link
                          onClick={() => this.toggleShow()}
                          className={`nav-link ${
                            active === "/workrights/5" ? "active-link" : ""
                          }`}
                          to="/workrights/5"
                        >
                          Employment Type
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="nav-item">
                        <Link
                          onClick={() => this.toggleShow()}
                          className={`nav-link ${
                            active === "/workrights/6" ? "active-link" : ""
                          }`}
                          to="/workrights/6"
                        >
                          Leaves and Entitlement
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="nav-item">
                        <Link
                          onClick={() => this.toggleShow()}
                          className={`nav-link ${
                            active === "/workrights/7" ? "active-link" : ""
                          }`}
                          to="/workrights/7"
                        >
                          Working Arrangements
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  onClick={() => this.toggleShow()}
                  className={`nav-link ${
                    active === "/interactive" ? "active-link" : ""
                  }`}
                  to="/interactive"
                >
                  Interactive Module
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.toggleShow()}
                  className={`nav-link ${
                    active === "/legaladvice" ? "active-link" : ""
                  }`}
                  to="/legaladvice"
                >
                  Legal Advice
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);

/*

<li className="nav-item">
              <Link className="nav-link" to="/quiz">
                Quiz
              </Link>
            </li>

<li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#contact">
                Contact
              </Link>
            </li>
*/

/*<li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#">
                Laws
              </Link>
              <div
                className="dropdown-menu"
                id="dropBar"
                style={{ marginTop: 0 }}
              >
                <div className="pl-3 nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/minwage">
                    Minimum Wage
                  </Link>
                </div>
                <div className="pl-3 nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/workrights">
                    Work Rights
                  </Link>
                </div>
              </div>
            </li>






                    
                    
                    
                    


                    
                    
                    
                    

            */
