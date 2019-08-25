import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.props.handleChange(e.target.value);
  };

  renderOptions = options => {
    if (options) {
      return options.map(option => {
        return (
          <option className="text-muted" value={option} key={option}>
            {option}
          </option>
        );
      });
    }
  };

  render() {
    return (
      <select
        className="text-muted col-md-12 form-control-lg"
        onChange={this.handleChange}
      >
        <option className="text-muted" value="">
          Select combo
        </option>
        {this.renderOptions(this.props.options)}
      </select>
    );
  }
}

export default Select;
