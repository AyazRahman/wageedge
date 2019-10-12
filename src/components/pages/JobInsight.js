import React, { Component } from "react";

import JobPosting from "../JobPosting";
import JobDetails from "../JobDetails";

class JobInsight extends Component {
  constructor() {
    super();
    this.state = { occupation: null, indsutry_name: null };
  }

  handleOccupation = (occupation, industry_name) => {
    this.setState({ occupation: occupation, industry_name: industry_name });
  };

  render() {
    return (
      <>
        <section className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div className="col-lg-12 text-center">
                  <h3>TBD</h3>
                </div>
                <p>
                  If you are getting unfair treatment at work, another option
                  after taking a legal action would be to switch jobs. You can
                  find a job either in the same industry or a different
                  industry. The information below would assist you to find which
                  month of the year is the best time to find a job in that
                  industry. If you have no experience in that specific field,
                  you can also consider taking some short courses that will
                  improve your skillsets. Before enrolling yourself in any
                  course, make sure you are not violation any visa restrictions.
                  More information on student visa restrictions can be found{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500#About"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
              <div className="col-lg-12 text-center">
                <h5 className="section-heading">Job Posting Trends</h5>
                <p>Part time job postings in 2018, Victoria</p>
              </div>
              <JobPosting handleChange={this.handleOccupation} />
            </div>
            <div className="row mt-5">
              {this.state.occupation ? (
                <JobDetails
                  occupation={this.state.occupation}
                  industry_name={this.state.industry_name}
                />
              ) : (
                <div className="col-lg-12 text-center">
                  <h6>
                    Select an industry form the above menu to get more
                    information
                  </h6>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default JobInsight;
