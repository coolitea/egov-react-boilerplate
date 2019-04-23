import React from "react";
import SampleTable from "../components/sample/SampleTable";
import SampleAgGrid from "../components/sample/SampleAgGrid";

const SamplePage = () => {
  return (
    <div className="SamplePage">
      <h1>샘플 페이지</h1>
      <hr />
      <SampleTable />
      <hr />
      <SampleAgGrid />
      <hr />
    </div>
  );
};

export default SamplePage;
