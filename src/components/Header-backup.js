import React, { Component } from 'react';
import logo from '../static/images/logo-large.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const twitterLink = 'https://twitter.com/ksd_hr';
const facebookLink =
  'https://www.facebook.com/pages/한국예탁결제원KSD-Korea-Securities-Depository/138898389462403';
const youTubeLink = 'https://www.youtube.com/channel/UCCkOHu8cifMUsfrlv2tBB_A';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-around">
          <div className="col align-self-center">
            <span>
              <img src={logo} alt="Logo" />
              <a href="https://ksd.or.kr" className="btn text-dark">
                <div className="title">전자정부서비스</div>
              </a>
            </span>
          </div>
          <div className="col col-auto align-self-center">
            <span className="icon">
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon color="#1DA1F1" icon={faTwitter} size="2x" />
              </a>
            </span>
            <span className="icon">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon size="2x" icon={faFacebook} color="#4267B2" />
              </a>
            </span>
            <span className="icon">
              <a href={youTubeLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon size="2x" icon={faYoutube} color="red" />
              </a>
            </span>
            <span className="icon">
              <FontAwesomeIcon
                size="2x"
                icon={faGlobeAmericas}
                color="#74b9ff"
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
