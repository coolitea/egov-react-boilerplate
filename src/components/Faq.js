import React, { Component } from 'react';

export default class Faq extends Component {
  render() {
    return (
      <div className="Faq">
        <h2>자주 묻는 질문</h2>
        <div className="card">
          <h5 className="card-header">[계정] 회원 가입은 어떻게 하나요?</h5>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">[계정] 비밀번호를 잊었어요</h5>
          <div className="card-body">
            <p className="card-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
