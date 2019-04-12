import React, { Component } from "react";
import "./SocialLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const twitterLink = "https://twitter.com/ksd_hr";
const facebookLink =
  "https://www.facebook.com/pages/한국예탁결제원KSD-Korea-Securities-Depository/138898389462403";
const youTubeLink = "https://www.youtube.com/channel/UCCkOHu8cifMUsfrlv2tBB_A";
const gitHubLink = "https://github.com/coolitea/egov-react-boilerplate";

class SocialLink extends Component {
  render() {
    return (
      <div className="SocialLink">
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
      </div>
    );
  }
}

export default SocialLink;
