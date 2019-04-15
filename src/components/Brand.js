import React, { Component } from 'react';
import './Brand.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const homeLink = 'https://coolitea.github.io/egov-react-boilerplate';

class Brand extends Component {
  render() {
    return (
      <div className="Brand">
        <div className="icon">
          <a href={homeLink} className="btn text-dark" title="전자정부서비스">
            <FontAwesomeIcon icon={faLeaf} color="#2ecc71" />
          </a>
        </div>
        <a
          href={homeLink}
          className="title text-decoration-none"
          title="전자정부서비스">
          전자정부서비스
        </a>
      </div>
    );
  }
}

export default Brand;
