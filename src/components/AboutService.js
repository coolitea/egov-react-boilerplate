import React from 'react';
import ServiceImage from '../static/images/cash-coins-currency_320.jpg';

const About = () => {
  return (
    <div className="AboutService">
      <h2>서비스 소개</h2>
      <div className="row align-items-center">
        <div className="col-sm-8">
          <h4 className="text-secondary">
            우리는 편리하고 안전한 금융투자 인프라를 제공하여 자본시장 발전에
            기여합니다.
          </h4>
        </div>
        <div className="col">
          <img
            className="card-img-top img-fluid"
            src={ServiceImage}
            alt="Service"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
