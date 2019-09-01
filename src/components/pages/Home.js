import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const section = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Work Rights</h2>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-md-3 col-sm-6 p-3">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-clock fa-stack-1x fa-inverse" />
            </span>
            <h6 className="service-heading">Work Restrictions</h6>
          </div>
          <div className="col-md-3 col-sm-6 p-3">
            <div>
              <span className="fa-stack fa-2x ">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-user-friends fa-stack-1x fa-inverse" />
              </span>
              <h6 className="service-heading">Volunteer Work</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 p-3">
            <div>
              <span className="fa-stack fa-2x ">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-dollar-sign fa-stack-1x fa-inverse" />
              </span>
              <h6 className="service-heading">Pay in Cash</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 p-3">
            <div>
              <span className="fa-stack fa-2x ">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-minus fa-stack-1x fa-inverse" />
              </span>
              <h6 className="service-heading">Deduct money from wage</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 p-3">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-gavel fa-stack-1x fa-inverse" />
            </span>
            <h6 className="service-heading">Workplace descrimination</h6>
          </div>
          <div className="col-md-3 col-sm-6 p-3">
            <div>
              <span className="fa-stack fa-2x ">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-book-open fa-stack-1x fa-inverse" />
              </span>
              <h6 className="service-heading">Employment Type</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 p-3">
            <div>
              <span className="fa-stack fa-2x ">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-running fa-stack-1x fa-inverse" />
              </span>
              <h6 className="service-heading">Leaves and Entitlement</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 p-3">
            <div>
              <span className="fa-stack fa-2x ">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-infinity fa-stack-1x fa-inverse" />
              </span>
              <h6 className="service-heading">Flexible Working Arrangements</h6>
            </div>
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

/*const educationModule = () => {
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
};*/

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
