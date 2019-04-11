import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
const homeLink = "https://coolitea.github.io/egov-react-boilerplate";

class Brand extends Component {
  render() {
    return (
      <a href={homeLink} className="btn text-dark" title="전자정부서비스">
        <span className="icon">
          <FontAwesomeIcon icon={faLeaf} color="#2ecc71" />{" "}
        </span>
        <span className="title">전자정부서비스</span>
      </a>
    );
  }
}

export default Brand;
