import React, { Component } from "react";
import "./Header.css";
import Brand from "./Brand";
import SocialLink from "./SocialLink";
import Language from "./Language";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Brand />
          </div>
          <div className="col-md-2 text-right">
            <Language />
          </div>
          <div className="col-md-auto text-right">
            <SocialLink />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
