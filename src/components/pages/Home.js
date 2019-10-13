import React from "react";
import Header from "../Header";
import {
  section,
  minwage,
  educationModule,
  legalAdvice,
  jobPosting,
  about
} from "./homeContent";

const Home = () => {
  const imageURL = "img/header-bg.jpg";
  return (
    <div>
      <Header image={imageURL} />
      {section()}
      {minwage()}
      {educationModule()}
      {legalAdvice()}
      {jobPosting()}
      {about()}
    </div>
  );
};

export default Home;
