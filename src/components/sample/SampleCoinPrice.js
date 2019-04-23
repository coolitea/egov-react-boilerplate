import React, { Component } from "react";

var data = require("./data/coin.json");

class SampleCoinPrice extends Component {
  render() {
    var coinList = data.coin.map((item, index) => {
      return (
        <tr key={item.time.updated}>
          <td>{item.time.updated}</td>
          <td>{item.bpi.USD.code}</td>
          <td>{item.bpi.USD.rate}</td>
        </tr>
      );
    });

    return (
      <div className="SampleCoinPrice">
        <h2>{data.chartName}</h2>
        <hr />

        <table>
          <thead>
            <tr>
              <th>업데이트 시간</th>
              <th>통화단위</th>
              <th>비율</th>
            </tr>
          </thead>
          <tbody>{coinList}</tbody>
        </table>
      </div>
    );
  }
}

export default SampleCoinPrice;
