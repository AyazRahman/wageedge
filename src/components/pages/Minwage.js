import React from "react";

import Header from "../Header";
import Chart from "../../components/Chart";

const Minwage = () => {
  return (
    <React.Fragment>
      <Header image="img/header-bg.jpg" />
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading text-center text-uppercase">
                Min Wage in Australia
              </h2>
              <div className="text-muted">
                <h3 className="section-subheading">
                  The Australian Government wants international students to have
                  a rewarding and enjoyable experience when they come to
                  Australia to study. Australia offers high quality education
                  services and protects the rights of international students to
                  ensure you make the most of your time here.
                </h3>
                <h3 className="section-heading text-center">Minimum Wage</h3>
                <p>
                  The national minimum wage is currently $19.49 per hour or
                  $740.80 per 38 hour week (before tax). Casual employees
                  covered by the national minimum wage also get at least a 25%
                  casual loading. A minimum wage is an employee’s base rate of
                  pay for ordinary hours worked. It is generally dependent on
                  the industrial instrument that applies to their employment.
                  For example, a modern award or registered agreement. Employers
                  and employees cannot be paid less than their applicable
                  minimum wage, even if they agree to it.
                </p>
                <p>
                  Under Commonwealth workplace laws, no employee over the age of
                  21 in the national workplace relations system can be paid less
                  than the minimum wage. The national minimum wage order is
                  determined by the Minimum Wages Panel within the Fair Work
                  Commission, and is intended as a safety net.
                </p>
                <p>
                  An employee's minimum wage will generally be contained within
                  an award or agreement, establishing a basic rate of pay for
                  ordinary hours. It may also contain additional rates for
                  overtime hours, or penalty rates for certain shifts outside
                  ordinary working hours. Employers must pay the correct rate of
                  pay (according to the appropriate award or agreement) for all
                  hours that the worker is required to attend work, including
                  for work meetings and training.
                </p>
                <p>
                  Employees have to be paid the right pay rate for all time
                  worked, including time spent:
                </p>

                <ul>
                  <li>training</li>
                  <li>in team meetings</li>
                  <li>openning and closing the business</li>
                  <li>working unreasonable trial shifts</li>
                </ul>
              </div>
            </div>
            <Chart />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Minwage;
