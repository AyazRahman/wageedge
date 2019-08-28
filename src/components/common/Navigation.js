import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
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
            <li className="nav-item dropdown">
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

            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
