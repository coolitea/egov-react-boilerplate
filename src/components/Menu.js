import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserFriends,
  faChartBar,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const activeStyle = {
    fontSize: '1.3rem'
  };

  return (
    <div className="container text-center">
      <div className="row-12 justify-content-around">
        <nav className="navbar navbar-expand-lg bg-light justify-content-around">
          <NavLink
            className="nav-item"
            exact
            to="/"
            style={{ textDecoration: 'none' }}
            activeStyle={activeStyle}>
            <FontAwesomeIcon icon={faHome} />
            <br />
            Home
          </NavLink>
          <NavLink
            className="nav-item"
            to="/about"
            style={{ textDecoration: 'none' }}
            activeStyle={activeStyle}>
            <FontAwesomeIcon icon={faUserFriends} />
            <br />
            소개
          </NavLink>
          <NavLink
            className="nav-item"
            to="/sample-page"
            style={{ textDecoration: 'none' }}
            activeStyle={activeStyle}>
            <FontAwesomeIcon icon={faChartBar} />
            <br />
            샘플페이지
          </NavLink>
          <NavLink
            className="nav-item"
            to="/support"
            style={{ textDecoration: 'none' }}
            activeStyle={activeStyle}>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <br />
            고객지원
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Menu);
