import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faChartBar,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

const linkStyle = { textDecoration: "none", color: "#2d3436" };
const activeStyle = {
  textDecoration: "none",
  color: "#1C5A82",
  fontSize: "1.3rem"
};

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light justify-content-around">
      <span className="text-center">
        <NavLink
          className="nav-item"
          exact
          to="/"
          style={linkStyle}
          activeStyle={activeStyle}
          title="홈"
        >
          <FontAwesomeIcon icon={faHome} alt="홈" />
          <br />홈
        </NavLink>
      </span>
      <span className="text-center">
        <NavLink
          className="nav-item"
          to="/about"
          style={linkStyle}
          activeStyle={activeStyle}
          title="소계"
        >
          <FontAwesomeIcon icon={faUserFriends} />
          <br /> 소개
        </NavLink>
      </span>
      <span className="text-center">
        <NavLink
          className="nav-item"
          to="/sample-page"
          style={linkStyle}
          activeStyle={activeStyle}
          title="샘플페이지"
        >
          <FontAwesomeIcon icon={faChartBar} />
          <br />
          샘플페이지
        </NavLink>
      </span>
      <span className="text-center">
        <NavLink
          className="nav-item"
          to="/support"
          style={linkStyle}
          activeStyle={activeStyle}
          title="고객지원"
        >
          <FontAwesomeIcon icon={faQuestionCircle} />
          <br />
          고객지원
        </NavLink>
      </span>
    </nav>
  );
};

export default withRouter(Menu);
