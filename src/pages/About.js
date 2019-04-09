import React from "react";
import bizMagager from "../static/images/team/biz-manager_320.jpg";
import itMagager from "../static/images/team/it-manager_320.jpg";
import bizStaff from "../static/images/team/biz-staff_320.jpg";
import itStaff from "../static/images/team/it-staff_320.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1>소개</h1>
      <hr />
      <h2>서비스 소개</h2>
      <div className="row">
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ull1 amco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <hr />

      <h2>팀 소개</h2>
      <h4 className="text-secondary">
        세계 일류 종합증권서비스를 제공하는 책임있는 전문가 그룹을 소개합니다.
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
