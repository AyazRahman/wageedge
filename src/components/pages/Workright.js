import React, { Component } from "react";
import Header from "../Header";
import { Element, scroller } from "react-scroll";

import {
  section,
  minwage,
  educationModule,
  legalAdvice,
  jobPosting,
  about
} from "./homeContent";

class Workright extends Component {
  componentDidMount() {
    scroller.scrollTo("workright", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: 0
    });
  }

  render() {
    const imageURL = "img/header-bg.jpg";
    return (
      <div>
        <Header image={imageURL} />
        <Element name="workright">{section()}</Element>
        {minwage()}
        {educationModule()}
        {legalAdvice()}
        {jobPosting()}
        {about()}
      </div>
    );
  }
}

export default Workright;
