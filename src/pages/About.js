import React from "react";
import AboutService from "../components/AboutService";
import AboutTeam from "../components/AboutTeam";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1>소개</h1>
      <hr />
      <AboutService />
      <hr />
      <AboutTeam />
    </div>
  );
};

export default About;
