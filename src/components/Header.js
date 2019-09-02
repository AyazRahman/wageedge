import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header
        className="masthead"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">Welcome To Wage Edge</div>
            <div className=" intro-lead-in">
              Do you know your work rights as an international student in
              Australia?
            </div>
            <Link
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              to="/workrights"
            >
              Test your knowledge
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
