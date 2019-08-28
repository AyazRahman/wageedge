import React from "react";

import Header from "../Header";

const About = () => {
  return (
    <React.Fragment>
      <Header image="img/header-bg.jpg" />
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Team: Infinite5
              </h2>
              <h3 className="section-subheading text-muted">
                We are trying to solve a Victorian Economic Issue
              </h3>
            </div>
          </div>
          <div className="row " />
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
