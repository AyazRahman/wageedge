import React, { PureComponent } from "react";

export default class LocationInfo extends PureComponent {
  render() {
    let { tafe_name, street_address } = this.props.info;

    return (
      <div>
        <h6>{tafe_name} </h6>
        <div>{street_address}</div>
      </div>
    );
  }
}
