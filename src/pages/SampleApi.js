import React, { Component } from "react";
import SampleContactList from "../components/sample/SampleContact";

export default class SampleApi extends Component {
  render() {
    return (
      <div className="SampleApi">
        <h1>샘플 API</h1>
        <hr />
        <SampleContactList />
      </div>
    );
  }
}
