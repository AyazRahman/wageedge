import React from "react";
import { Link } from "react-router-dom";

const imageURL = "img/header-bg.jpg";
const header = () => {
  return (
    <header
      className="masthead"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To Our Studio!</div>
          <div className="intro-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <Link
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            to="/about"
          >
            Tell Me More
          </Link>
        </div>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <div>
      {header()}
      <div>Home</div>
    </div>
  );
};

export default Home;
