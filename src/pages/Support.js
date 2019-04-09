import React from 'react';
import Employees from '../components/Employees';
import Location from '../components/Location';
import Help from '../components/Help';

const Support = () => {
  return (
    <div className="container">
      <h1>고객 지원</h1>
      <hr />
      <Help />
      <hr />
      <Employees />
      <hr />
      <Location />
    </div>
  );
};

export default Support;
