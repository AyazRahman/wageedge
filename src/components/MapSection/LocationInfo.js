import React, { PureComponent } from "react";

export default class LocationInfo extends PureComponent {
  render() {
    let {
      tafe_name = "Your Location",
      street_address = "",
      suburb = "",
      postcode = "",
      occupation = ""
    } = this.props.info;
    if (tafe_name === "Your Location") {
      return (
        <div>
          <h6>{tafe_name} </h6>
        </div>
      );
    }

    return (
      <div>
        <h6>{tafe_name} </h6>
        <div>
          {street_address}, {suburb}, {postcode}
        </div>
        <br />
        <div>Courses in: {occupation}</div>
      </div>
    );
  }
}
