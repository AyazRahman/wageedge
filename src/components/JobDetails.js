import React, { Component } from "react";

import Loader from "react-loader-advanced";
import api from "../API/api";
import Map from "./MapSection/Map";

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupation: this.props.occupation,
      industry_name: this.props.industry_name,
      loader: true,
      occupation_id: this.props.occupation[0].occupation_id,
      courses: null,
      course_selected: 0,
      locations: []
    };
  }

  componentDidMount() {
    this.getCourses(this.state.occupation_id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.occupation !== prevProps.occupation) {
      let { occupation_id } = this.props.occupation[0];
      this.setState({
        occupation: this.props.occupation,
        occupation_id: occupation_id,
        industry_name: this.props.industry_name
      });
      this.getCourses(occupation_id);
    }
  }

  getCourses = async id => {
    this.setState({ loader: true });
    let response = await api.get(`/occupation_course/?occupation_id=${id}`);
    this.getLocations(response.data.data[0].course_id);
    this.setState({
      loader: false,
      courses: response.data.data,
      course_selected: 0
    });
  };

  getLocations = async id => {
    this.setState({ loader: true });
    let response = await api.get(`/course_provider/?course_id=${id}`);

    this.setState({
      loader: false,
      locations: response.data.data
    });
  };

  renderOptions = items => {
    return items.map(item => {
      return (
        <option key={item.occupation_id} value={item.occupation_id}>
          {item.job_name}
        </option>
      );
    });
  };
  renderCourses = items => {
    return items.map((item, index) => {
      return (
        <option key={item.course_id} value={index}>
          {item.course_title}
        </option>
      );
    });
  };
  renderMap = () => {
    if (this.state.locations.length > 0) {
      return (
        <div className="col-lg-12 border rounded pb-3 mt-2">
          <div className="row rounded" style={{ backgroundColor: "#3794A4" }}>
            <div className="col-lg-12 text-center pt-2">
              <h5>Location:</h5>
            </div>
          </div>
          <p>
            The map shows locations of of registered training organizations that
            provide the selected course. You can filter the list by suburb.
          </p>
          <Map data={this.state.locations} />
          <p className="mt-3">
            <span className="text-danger">**Disclaimer: </span>Student visa does
            not allow students to be registered under multiple instutions.
            Please check your visa restrictions before enrolling in a course
            under a different institution.
          </p>
        </div>
      );
    }
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
  render() {
    return (
      <Loader
        show={this.state.loader}
        message={this.renderSpinner()}
        style={{ width: "100%" }}
      >
        <div className="col-lg-12 border rounded pb-3">
          <div className="row rounded" style={{ backgroundColor: "#8BC34A" }}>
            <div className="col-lg-12 text-center pt-2">
              <h5>Occupations:</h5>
            </div>
          </div>
          <p>For {this.state.industry_name}, select a relevant occupation: </p>
          <select
            style={{ maxWidth: "440px" }}
            className="form-control"
            onChange={e => {
              this.setState({ occupation_id: e.target.value });
              this.getCourses(e.target.value);
            }}
          >
            {this.renderOptions(this.state.occupation)}
          </select>
        </div>
        <div className="col-lg-12 border rounded pb-3 mt-2">
          <div className="row rounded" style={{ backgroundColor: "#FCD559" }}>
            <div className="col-lg-12 text-center pt-2">
              <h5>Courses Available:</h5>
            </div>
          </div>
          {this.state.courses && (
            <div className="row">
              <div className="col-md-5">
                <p>Select a course that you are interested in:</p>
                <select
                  className="form-control"
                  onChange={e => {
                    this.getLocations(
                      this.state.courses[e.target.value].course_id
                    );
                    this.setState({ course_selected: e.target.value });
                  }}
                >
                  {this.renderCourses(this.state.courses)}
                </select>
              </div>
              <div className="col-md-7">
                <p>Course Description:</p>
                {this.state.courses[this.state.course_selected].description}
              </div>
            </div>
          )}
        </div>
        {this.renderMap()}
      </Loader>
    );
  }
}

export default JobDetails;
