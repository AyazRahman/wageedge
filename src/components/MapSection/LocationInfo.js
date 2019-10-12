import React, { PureComponent } from "react";

export default class LocationInfo extends PureComponent {
  render() {
    let {
      tafe_name = "Your Location",
      street_address = "",
      suburb = "",
      postcode = "",
      tafe_url = "#"
    } = this.props.info;
    if (tafe_name === "Your Location") {
      return (
        <div className="mx-2">
          <h6>{tafe_name} </h6>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: "300px" }}>
        <h6>{tafe_name} </h6>
        <div>
          {street_address}, {suburb}, {postcode}
        </div>

        <div>
          <a href={tafe_url} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </div>
    );
  }
}
