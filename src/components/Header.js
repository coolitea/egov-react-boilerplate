import React, { Component } from 'react';
import './Header.scss';
import Brand from './Brand';
// import SocialLink from './SocialLink';
import Language from './Language';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="row">
          <div className="col-12 col-md-9 brand">
            <Brand />
          </div>
          <div className="col-12 col-md-3 links">
            <Language />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
