import React from 'react';
import './AboutTeam.scss';
import bizMagager from '../static/images/team/biz-manager_320.jpg';
import itMagager from '../static/images/team/it-manager_320.jpg';
import bizStaff from '../static/images/team/biz-staff_320.jpg';
import itStaff from '../static/images/team/it-staff_320.jpg';

const About = () => {
  return (
    <div className="AboutTeam">
      <h2>팀 소개</h2>
      <h4 className="text-secondary">
        세계 일류 종합증권서비스를 제공하는 전문가 그룹을 소개합니다.
      </h4>

      <div className="row justify-content-center">
        <div className="col-sm-3 text-center">
          <img
            src={bizMagager}
            alt="Business Manager"
            className="avatar size-4"
          />
          <h2>김신뢰</h2>
          <h4 className="text-secondary">비즈니스 팀장</h4>
        </div>
        <div className="col-sm-3 text-center">
          <img
            src={itMagager}
            alt="Business Manager"
            className="avatar size-4"
          />
          <h2>이따뜻</h2>
          <h4 className="text-secondary">IT 팀장</h4>
        </div>
        <div className="col-sm-3 text-center">
          <img
            src={bizStaff}
            alt="Business Manager"
            className="avatar size-4"
          />
          <h2>최책임</h2>
          <h4 className="text-secondary">비즈니스 팀원</h4>
        </div>
        <div className="col-sm-3 text-center">
          <img src={itStaff} alt="Business Manager" className="avatar size-4" />
          <h3>박전문</h3>
          <h4 className="text-secondary">IT 팀원</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
