import React, { Component } from "react";
import logo from "../static/images/logo-large.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img src={logo} alt="Logo" />
          </div>
          {/* <div className="col">
            <button type="button" className="btn btn-light">
              한/Eng
            </button>
            <button type="button" className="btn btn-link" />
            <a
              href="https://www.facebook.com/pages/한국예탁결제원KSD-Korea-Securities-Depository/138898389462403"
              className="btn active"
              role="button"
              aria-pressed="true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <button type="button" className="btn btn-link" />
            <a
              href="https://www.youtube.com/channel/UCCkOHu8cifMUsfrlv2tBB_A"
              className="btn active"
              role="button"
              aria-pressed="true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
