import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    fontSize: '1.5rem'
  };

  return (
    <div className="container">
      <NavLink
        exact
        to="/"
        style={{ textDecoration: 'none', color: 'green' }}
        activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink
        exact
        to="/about"
        style={{ textDecoration: 'none', color: 'green' }}
        activeStyle={activeStyle}>
        About
      </NavLink>
    </div>
  );
};

export default withRouter(Menu);
