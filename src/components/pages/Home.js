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
          <div className="col-md-3 col-sm-6 my-2">
            <Link to="/workrights/0">
              <div className="p-2 bg-white rounded h-100 border hCard">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-clock fa-stack-1x fa-inverse" />
                </span>
                <h6 className="service-heading text-dark">Work Restrictions</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 my-2">
            <Link to="/workrights/1">
              <div className="p-2 bg-white rounded h-100 border hCard">
                <span className="fa-stack fa-2x ">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-user-friends fa-stack-1x fa-inverse" />
                </span>
                <h6 className="service-heading text-dark">Volunteer Work</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 my-2">
            <Link to="/workrights/2">
              <div className="p-2 bg-white rounded h-100 border hCard">
                <span className="fa-stack fa-2x ">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-dollar-sign fa-stack-1x fa-inverse" />
                </span>
                <h6 className="service-heading text-dark">Pay in Cash</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 my-2">
            <Link to="/workrights/3">
              <div className="p-2 bg-white rounded h-100 border hCard">
                <span className="fa-stack fa-2x ">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-minus fa-stack-1x fa-inverse" />
                </span>
                <h6 className="service-heading text-dark">
                  Deduct money from wage
                </h6>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 my-2">
            <Link to="/workrights/4">
              <div className="p-2 bg-white rounded h-100 border hCard">
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-gavel fa-stack-1x fa-inverse" />
                </span>
                <h6 className="service-heading text-dark">Tax File Number</h6>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 my-2">
            <Link to="/workrights/6">
              <div className="p-2 bg-white rounded h-100 border hCard">
                <span className="fa-stack fa-2x ">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-book-open fa-stack-1x fa-inverse" />
                </span>
                <h6 className="service-heading text-dark">Employment Type</h6>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-6 my-2">
            <Link to="/workrights/6">
              <div className="p-2 bg-white rounded h-100 border hCard">
                <span className="fa-stack fa-2x ">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-running fa-stack-1x fa-inverse" />
                </span>
                <h6 className="service-heading text-dark">
                  Leaves and Entitlement
                </h6>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 my-2">
            <Link to="/workrights/7">
              <div className="p-2 bg-white rounded h-100 border hCard">
                <span className="fa-stack fa-2x ">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-infinity fa-stack-1x fa-inverse" />
                </span>
                <h6 className="service-heading text-dark">
                  Working Arrangements
                </h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const minwage = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Australian Part-time Minimum Wage</h3>
            <p style={{ fontSize: 20 }} className="mt-5">
              The national minimum wage is currently <b>$19.49</b> per hour or
              $740.80 per 38 hour week (before tax).
            </p>
            <Link to="/minwage">
              <button className="btn btn-primary btn-lg mt-3">
                Learn More
              </button>
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="img/minimum-wage.jpg"
              alt="minimum-wage"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const about = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src="img/about-us.jpg" alt="about us" />
          </div>
          <div className="col-md-6">
            <h2>About us</h2>
            <p className="mt-3">
              We aim to help international students to figure out the minimum
              wages they should get, improve their awareness of fair work
              rights, and also make them aware of the legal rights they have as
              an international student in Australia.
            </p>
          </div>
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
      {minwage()}
      {about()}
    </div>
  );
};

export default Home;
