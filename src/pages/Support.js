import React, { Fragment } from 'react';
import Employees from '../components/Employees';
import Location from '../components/Location';
import Faq from '../components/Faq';

const Support = () => {
  return (
    <Fragment>
      <h1>고객 지원</h1>
      <hr />
      <Faq />
      <hr />
      <Employees />
      <hr />
      <Location />
    </Fragment>
  );
};

export default Support;
