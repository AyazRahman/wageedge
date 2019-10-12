import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    let { labels, data, title } = this.props;
    this.state = {
      chartData: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: "rgba(254,209,54, 0.8)"
          }
        ]
      },
      options: {
        legend: { display: false },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Months in 2018"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Number of job posts"
              }
            }
          ]
        },
        title: {
          display: true,
          text: title,
          fontSize: 20
        }
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      let { chartData, options } = this.state;
      chartData.datasets[0].data = this.props.data;
      options.title.text = this.props.title;
      this.setState({ chartData: chartData, options: options });
    }
  }

  renderChart(type) {
    switch (type) {
      case "bar":
        return <Bar data={this.state.chartData} options={this.state.options} />;

      case "line":
        return (
          <Line data={this.state.chartData} options={this.state.options} />
        );

      case "pie":
        return <Pie data={this.state.chartData} options={this.state.options} />;
      default:
        return <div>Not a valid chart</div>;
    }
  }
  render() {
    return (
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="row">
          <div className="chart col">{this.renderChart("bar")}</div>
        </div>
      </div>
    );
  }
}

export default Chart;
