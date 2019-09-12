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
      current: 0,
      showMessage: false,
      message: null
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
      question.answer = element.correct_answer;
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
    if (this.state.questions.length !== 0) {
      return (
        <div className="col-lg-12 text-muted">
          <Question
            handleChange={this.handleAnswer}
            question={this.state.questions[this.state.current - 1]}
          />
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
        active: active,
        showMessage: false
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
        active: active,
        showMessage: false
      });
    }
  };

  showPercentage = value => {
    if (value !== "NaN") {
      return value + "%";
    }
  };

  showAnswer = question => {
    let showMessage = this.state.showMessage;
    if (!showMessage) showMessage = true;
    if (question.answered !== null) {
      if (question.answer === question.answered) {
        this.setState({
          message: question.correct_explanation,
          showMessage: showMessage
        });
      } else {
        this.setState({
          message: question.correct_explanation,
          showMessage: showMessage
        });
      }
    } else {
      this.setState({
        message: "Please Select an answer first",
        showMessage: showMessage
      });
    }
  };
  renderButtons = () => {
    if (this.state.questions.length === 0) return;
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
        <button
          className="btn btn-primary mx-3"
          onClick={() =>
            this.showAnswer(this.state.questions[this.state.current - 1])
          }
        >
          Check Answer
        </button>
        <button className={next} onClick={this.nextQuestion}>
          Next
        </button>
      </div>
    );
  };

  renderMessage = message => {
    let question = this.state.questions[this.state.current - 1];

    if (this.state.showMessage) {
      if (question.answered === null) {
        return <div className="container col-12 text-muted">{message}</div>;
      } else if (question.answer === question.answered) {
        return (
          <React.Fragment>
            <div className="alert alert-success" role="alert">
              <strong>Well done!</strong>
            </div>
            <div className="container col-12 text-muted">{message}</div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className="alert alert-danger" role="alert">
              <strong>That's incorrect</strong>
            </div>
            <div className="container col-12 text-muted">{message}</div>
          </React.Fragment>
        );
      }
    }
  };

  handleAnswer = question => {
    let questions = this.state.questions;

    questions[this.state.current - 1] = question;

    this.setState({ questions: questions });
  };

  render() {
    let barStyle = `bg-warning progress-bar progress-bar-striped ${this.state.active}`;
    let currentValue = `${~~((this.state.current * 100) / this.state.total)}`;
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
              {this.renderMessage(this.state.message)}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Quiz;
