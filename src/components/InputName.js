import React, { Component } from "react";
import PropTypes from "prop-types";

class InputName extends Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.searchName = this.searchName.bind(this);
  }

  changeName(e) {
    this.props.changeName(e.target.value);
  }

  searchName() {
    this.props.searchContact();
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="input-group">
            <input
              id="name"
              type="text"
              className="form-control"
              name="name"
              placeholder="이름을 두 글자 이상 입력하고 검색 버튼을 누르세요... (예: '신뢰', 'an', 등)"
              value={this.props.name}
              onChange={this.changeName}
            />
            <span
              className="btn btn-primary input-group-addon"
              onClick={this.searchName}
            >
              검{"  "}색
            </span>
          </div>
        </div>
      </div>
    );
  }
}

InputName.propTypes = {
  searchContact: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default InputName;
