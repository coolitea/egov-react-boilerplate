import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const activeStyle = {};

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">&copy; coolitea 2019</span>
        <NavLink
          className="nav-item"
          to="/policy"
          style={{ textDecoration: 'none' }}
          activeStyle={activeStyle}>
          개인정보처리방침
        </NavLink>
        <NavLink
          className="nav-item"
          to="/terms"
          style={{ textDecoration: 'none' }}
          activeStyle={activeStyle}>
          이용약관
        </NavLink>
      </footer>
    );
  }
}

export default withRouter(Footer);
