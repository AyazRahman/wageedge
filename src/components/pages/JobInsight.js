import React, { Component } from "react";

import Map from "../MapSection/Map";

class JobInsight extends Component {
  render() {
    return (
      <div className="page-section">
        <div className="container">
          <div className="row">
            <h1>Job posting</h1>
          </div>
          <div className="row">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default JobInsight;
