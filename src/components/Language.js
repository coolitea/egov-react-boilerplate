import React, { Component } from 'react';
import './Language.scss';

class Language extends Component {
  render() {
    return (
      <select
        className="form-control"
        id="languageSelected"
        aria-label="language">
        <option value="kor">한국어</option>
        <option value="eng">English</option>
      </select>
    );
  }
}

export default Language;
