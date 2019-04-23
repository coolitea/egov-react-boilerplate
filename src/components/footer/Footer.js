import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "#2d3436" };
const activeStyle = {
  textDecoration: "none",
  color: "#1C5A82",
  fontSize: "1.3rem"
};

class Footer extends Component {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="navbar-brand">&copy; 2019 coolitea</div>
        <span className="nav-link">
          <NavLink
            className="nav-item"
            to="/policy"
            style={linkStyle}
            activeStyle={activeStyle}
            title="개인정보처리방침"
          >
            개인정보처리방침
          </NavLink>
        </span>
        <span className="nav-link">
          <NavLink
            className="nav-item"
            to="/terms"
            style={linkStyle}
            activeStyle={activeStyle}
            title="이용약관"
          >
            이용약관
          </NavLink>
        </span>
      </nav>
    );
  }
}

export default withRouter(Footer);
