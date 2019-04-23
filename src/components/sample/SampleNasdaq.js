import React, { Component } from "react";

const data = require("./data/nasdaq_msft.json");

class SampleNasdaq extends Component {
  render() {
    var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    var day = yesterday.toISOString().slice(0, 10);

    const dailyData = data["Time Series (Daily)"];
    return (
      <div className="SampleNasdaq">
        <h2>{data["Meta Data"]["1. Information"]}</h2>

        <ul>
          <li> 종목 (Nasdaq) : {data["Meta Data"]["2. Symbol"]}</li>
          <li> 일자 : {data["Meta Data"]["3. Last Refreshed"]}</li>
          <li> 타임존 : {data["Meta Data"]["5. Time Zone"]}</li>
        </ul>

        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>일자</th>
                <th>1. 시가</th>
                <th>2. 최고</th>
                <th>3. 최저</th>
                <th>4. 종가</th>
                <th>adjusted close</th>
                <th>dividend amount</th>
                <th>split coefficient</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{day}</td>
                <td>{dailyData[day]["1. open"]}</td>
                <td>{dailyData[day]["2. high"]}</td>
                <td>{dailyData[day]["3. low"]}</td>
                <td>{dailyData[day]["4. close"]}</td>
                <td>{dailyData[day]["5. adjusted close"]}</td>
                <td>{dailyData[day]["7. dividend amount"]}</td>
                <td>{dailyData[day]["8. split coefficient"]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SampleNasdaq;
