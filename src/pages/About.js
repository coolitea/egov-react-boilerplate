import React, { Fragment } from "react";
import AboutService from "../components/AboutService";
import AboutTeam from "../components/AboutTeam";

const About = () => {
  return (
    <Fragment>
      <h1>소개</h1>
      <hr />
      <AboutService />
      <hr />
      <AboutTeam />
    </Fragment>
  );
};

export default About;
