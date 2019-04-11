import React, { Component } from 'react';
import './Language.scss';

class Language extends Component {
  render() {
    return (
      <span className="Language">
        <span className="form-group row text-right">
          <div className="col-auto">
            <select
              className="form-control"
              id="languageSelected"
              aria-label="language">
              <option value="kor">한국어</option>
              <option value="eng">English</option>
            </select>
          </div>
        </span>
      </span>
    );
  }
}

export default Language;
