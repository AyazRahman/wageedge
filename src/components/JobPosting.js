import React, { Component } from "react";

import Chart from "./Chart";
import api from "../API/api";

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

class JobPosting extends Component {
  constructor() {
    super();
    this.state = { data: null, labels: labels, selected: 0, options: null };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    /*const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(1000);*/
    let request = await api.get("/job_posting/industry");

    let response = request.data.data;

    let dataSets = [];
    let options = response.map((item, index) => {
      dataSets.push(item.detail.map(item => item.count));
      return { key: index, name: item.industry_name };
    });
    this.setState({ data: response, options: options, dataSets: dataSets });
  };

  renderSpinner = () => {
    return (
      <div className="text-center p-3 col-12">
        <div
          style={{ width: "10rem", height: "10rem" }}
          className="spinner-border text-warning"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  renderOptions = options => {
    return options.map(item => {
      return (
        <option key={item.key} value={item.key}>
          {item.name}
        </option>
      );
    });
  };
  render() {
    let { options, data, selected, dataSets, labels } = this.state;
    if (data)
      return (
        <>
          <div className="col-lg-12" style={{ maxWidth: "400px" }}>
            <select
              className="form-control"
              onChange={e => {
                data[e.target.value].occupation
                  ? this.props.handleChange(
                      data[e.target.value].occupation,
                      data[e.target.value].industry_name
                    )
                  : this.props.handleChange(null, null);
                this.setState({ selected: e.target.value });
              }}
            >
              {this.renderOptions(options)}
            </select>
          </div>
          <div className="col-lg-12">
            <Chart
              labels={labels}
              data={dataSets[selected]}
              title={options[selected].name}
            />
          </div>
        </>
      );
    return this.renderSpinner();
  }
}

export default JobPosting;
