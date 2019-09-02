import React, { Component } from "react";

import Header from "../Header";

class Workrights extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    const input = id ? id : 0;
    this.state = {
      id: input
    };
    console.log(input);
  }
  render() {
    return (
      <section className="page-section">
        <div className="container">
          <div className="row">Workrights {this.state.id}</div>
        </div>
      </section>
    );
  }
}

export default Workrights;
