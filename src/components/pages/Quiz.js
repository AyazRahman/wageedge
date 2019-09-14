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
      question.mark = false;
      //related url
      this.state.questions.push(question);
    });

    this.setState({
      questions: this.state.questions,
      total: this.state.questions.length
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
    if (current < total + 1) {
      current++;
      let active = "progress-bar-animated";
      if (current === total + 1) {
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
    let next = "btn btn-primary mx-3";
    /*prev = "btn btn-primary mx-3",
    if (this.state.current === 1) {
      prev = `${prev} d-none`;
    }*/

    let question = this.state.questions[this.state.current - 1];
    return (
      <React.Fragment>
        <div className="container col-12 py-3 text-center">
          <button
            className={next}
            onClick={() => {
              question.mark = !question.mark;
              let questions = this.state.questions;
              questions[this.state.current - 1] = question;
              this.setState({ questions: questions });
            }}
          >
            {question.mark ? "Marked" : "Mark"}{" "}
            <i className="fas fa-thumbtack" />
          </button>
          <button className={next} onClick={this.nextQuestion}>
            {this.state.current === this.state.total ? "Finish" : "Next"}
            <i className="fas fa-chevron-right" />
          </button>
        </div>
        <div className="container col-12 py-3 text-center">
          {this.state.questions.map(question =>
            this.renderSelectButton(question)
          )}
        </div>
      </React.Fragment>
    );
  };

  renderSelectButton = question => {
    let button = "";
    if (question.mark) {
      button = "btn-danger";
    } else {
      if (question.id < this.state.current) {
        button = "btn-primary";
      } else {
        button = "btn-secondary";
      }
    }
    return (
      <button
        className={`btn ${button} m-3`}
        key={question.id}
        onClick={() => {
          this.setState({ current: question.id });
        }}
      >
        {question.id}
      </button>
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

  renderContent = id => {
    let barStyle = `bg-warning progress-bar progress-bar-striped ${this.state.active}`;
    let currentValue = `${~~(
      ((this.state.current - 1) * 100) /
      this.state.total
    )}`;

    switch (id) {
      case 0:
        return this.renderWelcome();

      default:
        return (
          <React.Fragment>
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

            {this.renderBody(this.state.current)}
          </React.Fragment>
        );
    }
  };

  renderBody = id => {
    if (id === this.state.total + 1) {
      return <React.Fragment>{this.renderReview()}</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          {this.renderQuestion()}
          {this.renderButtons()}
          {this.renderMessage(this.state.message)}
        </React.Fragment>
      );
    }
  };

  renderReview = () => {
    let {
      yourScore,
      totalScore,
      correctQuestions,
      totalQuestions
    } = this.calculateInfo();
    setTimeout(() => {
      var addthisScript = document.createElement("script");
      addthisScript.setAttribute(
        "src",
        "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d765179055d2125"
      );
      if (document.body) document.body.appendChild(addthisScript);
    });
    return (
      <React.Fragment>
        <div className="col-lg-12 text-center">
          <h2>Congratulations</h2>
        </div>
        <div className="row col-lg-12 my-3">
          <div className="col-md-6">
            <h4>Quiz Review:</h4>
            <p>Your Score: {yourScore}</p>
            <p>Total Score: {totalScore}</p>
            <p>Correct Questions: {correctQuestions}</p>
            <p>Total Questions: {totalQuestions}</p>
            <p>Accuracy: {yourScore}%</p>
          </div>
          <div className="col-md-6 text-center">
            <p>Share with your friends</p>

            <div
              className="addthis_inline_share_toolbox"
              data-url="https://www.wageedge.tk/#/quiz"
            ></div>
          </div>
        </div>
        <div className="col-lg-12">
          <h4>Question review section</h4>
          {this.state.questions.map(question => {
            return (
              <div key={question.id} className="my-4">
                <p>{question.title}</p>
                <p>Your answer: {question.answered}</p>
                <p>Correct answer: {question.answer}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  };
  calculateInfo = () => {
    const totalScore = 100;
    const totalQuestions = this.state.total;
    let correctQuestions = 0;
    this.state.questions.forEach(question => {
      if (question.answer === question.answered) correctQuestions++;
    });
    const yourScore = ~~((correctQuestions / totalQuestions) * 100);
    return {
      yourScore: yourScore,
      totalScore: totalScore,
      correctQuestions: correctQuestions,
      totalQuestions: totalQuestions
    };
  };
  renderWelcome = () => {
    return (
      <div className="col-lg-12">
        <div className="col-lg-12 text-center">
          <h2>Test Your Knowledge</h2>

          <p className="my-5">
            This section contains multiple choice and yes or no questions
          </p>

          <button className="btn btn-primary mx-3" onClick={this.nextQuestion}>
            Continue
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <section className="page-section">
          <div className="container">
            <div className="row">{this.renderContent(this.state.current)}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Quiz;

/*
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
*/
