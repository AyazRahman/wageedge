import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item };
  }

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({ item: this.props.item });
    }
  }

  render() {
    let { item } = this.state;
    let { hour_per_rate, week_per_rate, public_holiday } = item;
    let hour_percentage = ~~((hour_per_rate / 30) * 80);
    let week_percentage = ~~((week_per_rate / 1200) * 80);
    let public_percentage = ~~((public_holiday / 100) * 80);
    return (
      <>
        <h3 className="text-primary">{item.industry}</h3>
        <hr />
        <div className="row mb-2" style={{ fontSize: 20 }}>
          <div className="col-2">
            <strong className="text-primary">${hour_per_rate}</strong>
          </div>
          <div className="col-5">Hourly Pay Rate</div>
          <div className="col-5">
            <div className="progress h-100" style={{ fontSize: 20 }}>
              <div className="px-2" style={{ width: "10%" }}>
                1
              </div>
              <div
                className="bg-warning progress-bar"
                role="progressbar"
                aria-valuenow="15"
                aria-valuemin="1"
                aria-valuemax="30"
                style={{ width: hour_percentage + "%" }}
              ></div>
              <div
                className="text-right px-2"
                style={{ width: 100 - hour_percentage - 10 + "%" }}
              >
                30
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2" style={{ fontSize: 20 }}>
          <div className="col-2">
            <strong className="text-primary">${week_per_rate}</strong>
          </div>
          <div className="col-5">Weekly Pay Rate</div>
          <div className="col-5">
            <div className="progress h-100" style={{ fontSize: 20 }}>
              <div className="px-2" style={{ width: "10%" }}>
                1
              </div>
              <div
                className="bg-warning progress-bar"
                role="progressbar"
                aria-valuenow="15"
                aria-valuemin="1"
                aria-valuemax="30"
                style={{ width: week_percentage + "%" }}
              ></div>
              <div
                className="text-right px-2"
                style={{ width: 100 - 10 - week_percentage + "%" }}
              >
                1000
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2" style={{ fontSize: 20 }}>
          <div className="col-2">
            <strong className="text-primary">${public_holiday}</strong>
          </div>
          <div className="col-5">Holiday Pay Rate</div>
          <div className="col-5">
            <div className="progress h-100" style={{ fontSize: 20 }}>
              <div className="px-2" style={{ width: "10%" }}>
                1
              </div>
              <div
                className="bg-warning progress-bar"
                role="progressbar"
                aria-valuenow="15"
                aria-valuemin="1"
                aria-valuemax="30"
                style={{ width: public_percentage + "%" }}
              ></div>
              <div
                className="text-right px-2"
                style={{ width: 100 - 10 - public_percentage + "%" }}
              >
                100
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-primary">Job Description</h3>
        <hr />
        {item.job_description.map(i => (
          <div key={i}>
            <span>{i}</span>
            <br />
          </div>
        ))}
      </>
    );
  }
}

export default Details;
