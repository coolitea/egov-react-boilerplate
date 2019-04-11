import React from "react";

const Location = () => {
  return (
    <div className="location">
      <h2>기관 위치</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">부산 본사</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.3695516279276!2d129.06354354995847!3d35.14740326657529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3e69c8599b%3A0xd71763f2773231d7!2zS1NEIHwg7ZWc6rWt7JiI7YOB6rKw7KCc7JuQIOuzuOyCrA!5e0!3m2!1sko!2skr!4v1554812114936!5m2!1sko!2skr"
              frameBorder="0"
              allowFullScreen
              title="부산 본사"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">서울 사옥</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.4269153262967!2d126.92636495004022!3d37.521432534370135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3e6814fe1b%3A0x7c1cadc7f9309fdd!2zS1NE7Kad6raM7JiI7YOB7JuQ67mM65Sp!5e0!3m2!1sko!2skr!4v1554812609971!5m2!1sko!2skr"
              frameBorder="0"
              allowFullScreen
              title="서울 사옥"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">일산 센터</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.454084597446!2d126.7834029500445!3d37.638527227661996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9acdb34c3883%3A0x2a07e886ba465ca0!2z7ZWc6rWt7JiI7YOB6rKw7KCc7JuQIOydvOyCsOyEvO2EsA!5e0!3m2!1sko!2skr!4v1554812491599!5m2!1sko!2skr"
              frameBorder="0"
              allowFullScreen
              title="일산 센터"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
