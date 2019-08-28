import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const section = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Legal Rights</h2>
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
              The Australian Government wants international students to have a
              rewarding and enjoyable experience when they come to Australia to
              study. Australia offers high quality education services and
              protects the rights of international students to ensure you make
              the most of your time here...<Link to="/minwage">Learn More</Link>
            </p>
          </div>
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-landmark fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Work Rights</h4>
            <p className="text-muted">
              Every employee has minimum rights and conditions at work that may
              be set by a legal document like an award, an agreement, or a
              contract of employment. Ask your employer which one applies to you
              to find out how you are affected. If an award or agreement does
              not apply, all employees in the...{" "}
              <Link to="/workrights">Learn More</Link>
            </p>
          </div>
        </div>
        <div className="text-center pt-5">
          <Link className="btn btn-primary btn-lg " to="/quiz">
            Test Your Knowledge About Work Rights
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
          <h2 className="section-heading">Educational Module</h2>
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
          <h2 className="section-heading">Visualization Tools</h2>
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
    </div>
  );
};

export default Home;
