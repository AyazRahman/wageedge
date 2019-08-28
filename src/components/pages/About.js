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
              <h2 className="section-heading">Team: Infinite5</h2>
              <h3 className="section-subheading text-muted">
                We are trying to solve a Victorian Economic Issue
              </h3>
            </div>
          </div>
          <div className="row " />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <h2 className="section-heading text-center">Overview</h2>
              <div className="text-muted">
                <p>
                  People working in Australia are protected by the Australian
                  Fair work legislation. Even for those people who are not
                  citizens, but legally work in Australia are also protected by
                  this legislation. However, there are lots of news and articles
                  have shown that many international students are underpaid and
                  overworked.
                </p>
                <p>
                  The education industry is growing significantly and this
                  brings in many international students to Australia. Their visa
                  allows them to find a part-time job but they are allowed to
                  work only 20 hours per week. International students often lack
                  the knowledge of Australian work rights. As a result, when
                  they finally manage to find a part-time job, they often become
                  victims of underpayment and unfair treatment at workplace.
                  Businesses often offer them to pay in cash to avoid paying the
                  fair share of tax and would ask them to work in long shifts
                  without any break. Most of the time, they don’t complain when
                  they are under those situations. this is mainly because of the
                  lack of awareness of minimum wages rule and they are often
                  happy with the lower payments. Nearly 40% international
                  students paid up to $17 or less in Australia. A large number
                  of international students’ wages is lower than the minimum
                  wage.
                </p>
                <p>
                  Our project aims to help international students to figure out
                  the minimum wages they should get, improve their awareness of
                  fair work rights, and also make them aware of the legal rights
                  they have as an international student in Australia. This
                  project would use an interactive web application to provide
                  information about their work rights in Australia and use
                  visualisation to show information about different industries
                  which help them to get a better understanding of the average
                  wages and average earnings.
                </p>
              </div>
            </div>
          </div>
          <div className="row " />
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
