import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        datasets: [
          {
            label: "Wage in AUD",
            data: [19.71, 20, 20.12, 22.24, 20, 25, 23.3, 22.1, 21, 20],
            backgroundColor: "rgba(54, 162, 235, 0.6)"
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Minimum Wages by Industry",
          fontSize: 20
        },
        legend: { display: true, position: "right" }
      }
    };
  }
  renderChart(type) {
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
