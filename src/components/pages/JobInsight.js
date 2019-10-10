import React, { Component } from "react";

import Map from "../MapSection/Map";
import JobPosting from "../JobPosting";

class JobInsight extends Component {
  render() {
    return (
      <>
        <section className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Job Posting Trends</h2>
                <p>Part time postings in 2018, Victoria</p>
              </div>
              <JobPosting />
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Tafe Locations</h2>
              </div>
              <Map />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default JobInsight;
