import React from "react";
import SampleTable from "../components/SampleTable";
// import SampleCoinPrice from "../components/SampleCoinPrice";
// import SampleNasdaq from "../components/SampleNasdaq";
import SampleAgGrid from "../components/SampleAgGrid";

const SamplePage = () => {
  return (
    <div className="SamplePage">
      <h1>샘플 페이지</h1>
      <hr />
      <SampleTable />
      <hr />
      <SampleAgGrid />
      <hr />
      {/* <hr />
      <SampleCoinPrice />
      <hr />
      <SampleNasdaq /> */}
    </div>
  );
};

export default SamplePage;
