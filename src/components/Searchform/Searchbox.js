import React, { Component } from "react";
import Select from "./Select";

class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.handleLaw = this.handleLaw.bind(this);
    this.handleSection = this.handleSection.bind(this);

    this.state = {
      law: null,
      section: "Minimum Working Hours"
    };
  }
  handleLaw(value) {
    this.setState({ law: value });
  }

  handleSection(value) {
    this.setState({ section: value });
  }
  render() {
    const laws = {
      "Australian Work Rights": ["Minimum wage", "Wrokplace security"],
      "International Student": ["Visa Rights", "Minimum working hours"]
    };
    return (
      <div className="card container">
        <div className="row">
          <div className="container col-md-6">
            <Select
              handleChange={this.handleLaw}
              options={["Australian Work Rights", "International Student"]}
            />
          </div>
          <div className="container col-md-6">
            <Select
              handleChange={this.handleSection}
              options={laws[this.state.law]}
            />
          </div>
        </div>
        {this.state.law}, {this.state.section}
      </div>
    );
  }
}

export default Searchbox;
