import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default class SampleAgGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: '기업', field: 'company' },
        { headerName: '주가', field: 'price' },
        { headerName: '보유주식수', field: 'stockAmt' }
      ],
      rowData: [
        { company: '삼성전자', price: '46,250	', stockAmt: 240 },
        { company: 'SK하이닉스', price: '78,400', stockAmt: 54 },
        { company: 'LG화학', price: '388,500', stockAmt: 340 },
        { company: '현대차', price: '128,000', stockAmt: 120 },
        { company: 'NAVER', price: '121,500', stockAmt: 10 },
        { company: 'SK텔레콤', price: '245,000', stockAmt: 10 },
        { company: 'KB금융', price: '45,200', stockAmt: 10 }
      ]
    };
  }

  render() {
    return (
      <div className="SampleAgGrid">
        <h2>가로폭 고정 테이블 샘플(ag-Grid)</h2>
        <div className="row">
          <div className="col">
            <div
              className="ag-theme-balham"
              style={{
                height: '200px',
                width: '600px'
              }}>
              <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
