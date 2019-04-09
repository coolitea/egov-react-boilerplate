import React from "react";
import mainIamge from "../static/images/accomplishment-achievement_640.jpg";

const Home = ({ history }) => {
  return (
    <div className="container marketing">
      <h1>안녕하세요. 전자정부 서비스입니다.</h1>
      <hr />
      <div className="row align-items-center featurette">
        <div className="col-sm">
          <img src={mainIamge} className="rounded img-fluid" alt="Main" />
        </div>
        <div className="col-sm">
          <p className="font-weight-bold">
            Lorem ipsum dolor sit amet, assum neglegentur ullamcorper vel no.
          </p>
          <p class="font-weight-normal">
            Dicam accusam ex eos, no duis autem similique vis, pri verear
            recusabo no. Eum voluptua placerat convenire in, cu sea elitr
            oblique, quaestio referrentur sea et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
