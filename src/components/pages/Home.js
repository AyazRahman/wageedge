import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

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
          <div className="col-md-6">
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
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-landmark fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Work Rights</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
        <div className="text-center pt-5">
          <Link className="btn btn-primary btn-lg " to="/quiz">
            Test Your Knowledge
          </Link>
        </div>
      </div>
    </section>
  );
};

const educationModule = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Educational Module</h2>
          <h3 className="section-subheading text-muted">Coming Soon ...</h3>
        </div>
      </div>
    </section>
  );
};

const visualization = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">
            Visualization Tools
          </h2>
          <h3 className="section-subheading text-muted">Coming Soon ...</h3>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const imageURL = "img/header-bg.jpg";
  return (
    <div>
      <Header image={imageURL} />
      {section()}
      {educationModule()}
      {visualization()}
    </div>
  );
};

export default Home;
