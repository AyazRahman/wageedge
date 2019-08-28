import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";
import api from "../API/api";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: null,
        datasets: [
          {
            label: "Wage in AUD",
            data: [19.71, 20, 20.12, 22.24, 20, 25, 23.3, 22.1, 21, 20],
            backgroundColor: "rgba(254,209,54, 0.8)"
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Minimum Wages by Industry",
          fontSize: 20
        },
        legend: { display: true, position: "top" }
      }
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await api.get("/industry_wage");
    let responseData = response.data.data;
    let labels = [],
      data = [];
    responseData.forEach(element => {
      labels.push(element.industry);
      data.push(element.hour_per_rate);
    });
    let chart = this.state.chartData;
    chart.labels = labels;
    chart.datasets[0].data = data;
    this.setState({ chartData: chart });
  };
  renderChart(type) {
    if (this.state.chartData.labels === null) {
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
    switch (type) {
      case "bar":
        return <Bar data={this.state.chartData} options={this.state.options} />;

      case "line":
        return <Line data={this.state.chartData} options={{}} />;

      case "pie":
        return <Pie data={this.state.chartData} options={{}} />;
      default:
        return <div>Not a valid chart</div>;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="chart col">{this.renderChart("bar")}</div>
        </div>
      </div>
    );
  }
}

export default Chart;
