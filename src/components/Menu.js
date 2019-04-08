import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const activeStyle = {
    fontSize: '1.2rem'
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <NavLink
          className="nav-item"
          exact
          to="/"
          style={{ textDecoration: 'none' }}
          activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink
          className="nav-item"
          to="/about"
          style={{ textDecoration: 'none' }}
          activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default withRouter(Menu);
