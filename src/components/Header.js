import React, { Component } from "react";
import "./Header.scss";
import Brand from "./Brand";
import SocialLink from "./SocialLink";
import Language from "./Language";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="col-md-auto brand">
          <Brand />
        </div>
        <div className="col-md row text-right links">
          <div>
            <Language />
          </div>
          <div>
            <SocialLink />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
