import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

// const linkStyle = { textDecoration: "none", color: "#2d3436" };
// const activeStyle = {
//   textDecoration: "none",
//   color: "#1C5A82",
//   fontSize: "1.3rem"
// };

const homeLink = "https://coolitea.github.io/egov-react-boilerplate";
const twitterLink = "https://twitter.com/ksd_hr";
const facebookLink =
  "https://www.facebook.com/pages/한국예탁결제원KSD-Korea-Securities-Depository/138898389462403";
const youTubeLink = "https://www.youtube.com/channel/UCCkOHu8cifMUsfrlv2tBB_A";
const gitHubLink = "https://github.com/coolitea/egov-react-boilerplate";

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="col-auto brand">
          <a href={homeLink} className="btn text-dark" title="전자정부서비스">
            <span className="icon">
              <FontAwesomeIcon icon={faLeaf} color="#2ecc71" />{" "}
            </span>
            <span className="title">전자정부서비스</span>
          </a>
        </div>
        <div className="col text-right align-items-center">
          <span className="icon">
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              title="트위터"
            >
              <FontAwesomeIcon color="#1DA1F1" icon={faTwitter} size="2x" />
            </a>
          </span>
          <span className="icon">
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              title="페이스북"
            >
              <FontAwesomeIcon size="2x" icon={faFacebook} color="#4267B2" />
            </a>
          </span>
          <span className="icon">
            <a
              href={youTubeLink}
              target="_blank"
              rel="noopener noreferrer"
              title="유투브"
            >
              <FontAwesomeIcon size="2x" icon={faYoutube} color="red" />
            </a>
          </span>
          <span className="icon">
            <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                size="2x"
                icon={faGithub}
                color="#24292E"
                title="깃허브"
              />
            </a>
          </span>
          <span className="icon">
            <FontAwesomeIcon
              size="2x"
              icon={faGlobeAmericas}
              color="#74b9ff"
              title="한/영"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
