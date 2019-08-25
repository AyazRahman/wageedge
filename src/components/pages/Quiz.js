import React, { Component } from "react";
import api from "../../API/api";
import Question from "../Question";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      total: 0,
      active: "progress-bar-animated",
      current: 0
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = async () => {
    const response = await api.get("/questionnaire");
    response.data.forEach(element => {
      let question = {};
      question.id = element.question_id;
      question.title = element.question_title;
      question.options = element.answer_options
        .split("||")
        .map(item => item.trim());
      question.answer = element.answer;
      question.correct_explanation = element.correct_explanation;
      question.wrong_explanation = element.wrong_explanation;
      question.answered = null;
      //related url
      this.state.questions.push(question);
    });

    this.setState({
      questions: this.state.questions,
      total: this.state.questions.length,
      current: 1
    });
  };

  renderQuestion = () => {
    console.log(this.state);
    if (this.state.questions.length !== 0) {
      //console.log(this.state.questions[this.state.current - 1]);
      return (
        <div className="p-3 col-lg-12 text-muted">
          <Question question={this.state.questions[this.state.current - 1]} />
        </div>
      );
    } else {
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
  };
  prevQuestion = () => {
    let current = this.state.current;
    //let total = this.state.total
    if (current > 1) {
      current--;
      let active = "progress-bar-animated";
      this.setState({
        current: current,
        active: active
      });
    }
  };
  nextQuestion = () => {
    let current = this.state.current;
    let total = this.state.total;
    if (current < total) {
      current++;
      let active = "progress-bar-animated";
      if (current === total) {
        active = "";
      }
      this.setState({
        current: current,
        active: active
      });
    }
  };

  showPercentage = value => {
    if (value !== "NaN") {
      return value + "%";
    }
  };
  renderButtons = () => {
    let prev = "btn btn-primary mx-3",
      next = "btn btn-primary mx-3";
    if (this.state.current === 1) {
      prev = `${prev} d-none`;
    }
    if (this.state.current === this.state.total) {
      next = `${next} d-none`;
    }
    return (
      <div className="container col-12 py-3 text-center">
        <button className={prev} onClick={this.prevQuestion}>
          Prev
        </button>
        <button className="btn btn-primary mx-3">Check Answer</button>
        <button className={next} onClick={this.nextQuestion}>
          Next
        </button>
      </div>
    );
  };

  render() {
    let barStyle = `bg-warning progress-bar progress-bar-striped ${
      this.state.active
    }`;
    let currentValue = `${(this.state.current * 100) / this.state.total}`;
    return (
      <React.Fragment>
        <section className="page-section">
          <div className="container">
            <div className="row">
              <div className="p-3 col-lg-12">
                <div className="progress">
                  <div
                    className={barStyle}
                    role="progressbar"
                    aria-valuenow={currentValue}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: currentValue + "%" }}
                  >
                    {this.showPercentage(currentValue)}
                  </div>
                </div>
              </div>

              {this.renderQuestion()}
              {this.renderButtons()}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Quiz;
