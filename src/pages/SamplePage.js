import React from 'react';
import SampleAgGrid from '../components/SampleAgGrid';
import SampleTable from '../components/SampleTable';

const SamplePage = () => {
  return (
    <div className="SameplePage">
      <h1>샘플 페이지</h1>
      <hr />
      <SampleTable />
      <hr />
      <SampleAgGrid />
    </div>
  );
};

export default SamplePage;
