import React, { Fragment } from "react";

import Page3 from "./page3"
import base_img from "../image/page3/page3-2-flower/flower_base_layer.png";
import border_img from "../image/page3/border.png";

import "./page3.css";

const Page3_1 = () => {
  return (
    <Fragment>
      <div className="basechild">
        <img className="background background-opacity" src={base_img} alt="background" />
        <img className="background border background-opacity" src={border_img} alt="border" />
        
      </div>

      <Page3 />
    </Fragment>
  );
};

export default Page3_1;