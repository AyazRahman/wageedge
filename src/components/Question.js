import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { question: this.props.question };
  }

  componentDidUpdate(prevProps) {
    if (this.props.question !== prevProps.question) {
      this.setState({ question: this.props.question });
    }
  }

  renderOption = items => {
    return items.map(item => {
      return (
        <div key={item} className="p-1 col-md-6">
          <label
            className={`card btn ${
              item === this.state.question.answered ? "btn-primary" : "btn-quiz"
            }`}
          >
            <input
              className="mr-2"
              type="radio"
              value={item}
              name="option"
              autoComplete="off"
            />
            {item}
          </label>
        </div>
      );
    });
  };

  handleChange = event => {
    let question = this.state.question;
    question.answered = event.target.value;
    this.setState({ question: question });
    this.props.handleChange(question);
  };

  render() {
    return (
      <div className="row p-3">
        <p>{this.state.question.title}</p>

        <div className="row col-lg-12 text-center" onChange={this.handleChange}>
          {this.renderOption(this.state.question.options)}
        </div>
      </div>
    );
  }
}

export default Question;
/**
 */
