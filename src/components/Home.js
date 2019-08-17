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
          <div className="intro-heading">Welcome To Wedge Edge</div>
          <div className=" intro-lead-in">
            The one place to find out your rights as an Australian Internation
            student
          </div>
          <Link
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            to="/services"
          >
            Tell Me More
          </Link>
        </div>
      </div>
    </header>
  );
};

const section = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Legal Rights</h2>
            <h3 className="section-subheading text-muted">
              The Legal Rights that you should be aware of.
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-gavel fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Australian minimum wage</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-landmark fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">International visa rights</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-balance-scale fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Australian work rights</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">
              Copyright © Wedge Edge {new Date().getFullYear()}
            </span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      {header()}
      {section()}
      {footer()}
    </div>
  );
};

export default Home;
