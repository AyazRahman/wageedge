import React, { Component } from "react";

import Details from "./Details";
import api from "../API/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      active: ""
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await api.get("/industry_wage");
    let responseData = response.data.data;
    this.setState({ data: responseData, active: responseData[0] });
  };

  renderSideIcons = data => {
    let { active } = this.state;
    return data.map((item, i) => {
      return (
        <a
          href="/#"
          key={i}
          className={`col-sm-4 text-center my-4${
            active.id === item.id ? "" : " min-deactive"
          }`}
          onClick={event => {
            this.selectOption(event, item);
          }}
        >
          <i className={`fas fa-${item.icon} fa-2x text-primary`} />
        </a>
      );
    });
  };

  selectOption = (event, item) => {
    event.preventDefault();
    this.setState({ active: item });
  };

  render() {
    let { data, active } = this.state;

    if (data.length === 0) {
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
    }

    return (
      <>
        <div
          className="col-md-4 rounded"
          style={{ backgroundColor: "#f2f2f2" }}
        >
          <div className="row py-5">{this.renderSideIcons(data)}</div>
        </div>
        <div className="col-md-8">
          <Details item={active} />
        </div>
      </>
    );
  }
}

export default Dashboard;
