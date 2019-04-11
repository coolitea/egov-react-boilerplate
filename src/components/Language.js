import React, { Component } from "react";

class Language extends Component {
  render() {
    return (
      <div className="form-group row text-right">
        <div className="col-auto">
          <select
            className="form-control"
            id="languageSelected"
            aria-label="language"
          >
            <option value="kor">한국어</option>
            <option value="eng">English</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Language;
