import React from 'react';
import SearchForm from './SearchForm';

const Employees = () => {
  return (
    <div className="employees">
      <h2>직원</h2>
      <SearchForm />
      {/* <div className="row">
        <div className="col">
          <ul>
            <li>김신뢰</li>
            <li>이따뜻</li>
            <li>최책임</li>
            <li>박전문</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Employees;
