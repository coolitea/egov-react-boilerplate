import React, { Component } from "react";
import "../vendor/SBGrid/css/SBGrid.css";
import "../vendor/SBGrid/css/SBGrid_Default.css";
import "../vendor/SBGrid/SBGrid_Lib";
import "../vendor/SBGrid/SBGrid_min";
import $ from "jquery";
window.jQuery = window.$ = $;

class SampleSBGrid extends Component {
  constructor(props) {
    super(props);
    var SBpath = "../vendor/";

    var datagrid; // 그리드를 담기위한 객체를 선언합니다.

    $(document).ready(function() {
      createElements();
    });

    function createElements() {
      var SBGridProperties = {};
      SBGridProperties.parentid = "sbGridArea"; // [필수] 그리드 영역의 div id 입니다.
      SBGridProperties.id = "datagrid"; // [필수] 그리드를 담기위한 객체명과 동일하게 입력합니다.
      SBGridProperties.jsonref = "attr_list"; // [필수] 그리드의 데이터를 나타내기 위한 json data 객체명을 입력합니다.

      SBGridProperties.width = "300px"; // 위의 div id 영역(sbGridArea)에 그리드의 너비와 폭을 입력하지 않았을때 width 와 height 를 입력합니다.
      SBGridProperties.height = "300px"; // [그리드의 너비와 폭은 반드시 설정되어야 합니다]

      // 그리드의 여러 속성들을 입력합니다.
      SBGridProperties.extendlastcol = "scroll";
      SBGridProperties.tooltip = true;
      SBGridProperties.ellipsis = true;
      SBGridProperties.backcoloralternate = "#FFF2FF";

      // [필수] 그리드의 컬럼을 입력합니다.
      SBGridProperties.columns = [
        {
          caption: ["Category"],
          ref: "list",
          width: "80px",
          style: "text-align:center",
          type: "output"
        },
        {
          caption: ["Descrption"],
          ref: "description",
          width: "130px",
          style: "text-align:center",
          type: "output"
        }
      ];
      datagrid = _SBGrid.create(SBGridProperties); // 만들어진 SBGridProperties 객체를 파라메터로 전달합니다.

      datagrid.bind("onclick", "function명"); // 그리드 내 이벤트에 대한 설정입니다.
    }
  }

  render() {
    return (
      <div>
        <h1>SBGrid Sample</h1>
        <div id="sbGridArea" />
      </div>
    );
  }
}

export default SampleSBGrid;
