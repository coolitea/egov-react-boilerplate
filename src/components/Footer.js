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
      <footer className="footer">
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div className="navbar-brand">&copy; 2019 coolitea</div>
          <NavLink
            className="nav-item"
            to="/policy"
            style={linkStyle}
            activeStyle={activeStyle}
            title="개인정보처리방침"
          >
            개인정보처리방침
          </NavLink>
          <NavLink
            className="nav-item"
            to="/terms"
            style={linkStyle}
            activeStyle={activeStyle}
            title="이용약관"
          >
            이용약관
          </NavLink>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <span className="text-muted"> </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
