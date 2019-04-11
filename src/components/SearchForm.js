import React, { Component, Fragment } from 'react';
import './SearchForm.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        '강책임 (IT전략부) sample.email-123@egov.or.kr',
        '고단수 (증권정보부) sample.email-111@egov.or.kr',
        '김신뢰 (의결권서비스부) sample.email-7501@egov.or.kr',
        '김신의 (증권예탁부) sample.email-136701@egov.or.kr',
        '김지성 (홍보부) sample.email-10137@egov.or.kr',
        '박전문 (IT서비스부) sample.email-112301@egov.or.kr',
        '이따뜻 (IT서비스부) sample.email-08101@egov.or.kr',
        '이미소 (주식등록부) sample.email-1031@egov.or.kr',
        '이지금 (IT인프라운영부) sample.email-26701@egov.or.kr',
        '지성인 (홍보부) sample.email-10241@egov.or.kr',
        '최책임 (의결권서비스부) sample.email-79371@egov.or.kr',
        '최열정 (글로벌서비스부) sample.email-2238@egov.or.kr'
      ]
    };
  }

  render() {
    return (
      <div className="SearchForm content">
        <div className="container">
          <section className="section">
            <List items={this.state.list} delete={this.removeItem} />
          </section>
        </div>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== '') {
      // Assign the original list to currentList
      currentList = this.props.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <Fragment>
        <div className="input-group">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="검색하실 내용을 입력하세요..."
          />
          {/* <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div> */}
        </div>
        <ul className="list-unstyled">
          {this.state.filtered.map(item => (
            <li key={item}> {item} </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
