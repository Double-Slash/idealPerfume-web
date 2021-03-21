import React, { Fragment } from "react";

import Page3 from "./page3";

import base_img from "../image/page3/page3-6-East/East_base_layer.png";
import bird from "../image/page3/page3-6-East/bird.gif";
import frame from "../image/page3/page3-6-East/frame.png";
import page3Styles from "./page3Styles"

const East = () => {
  const commonClasses = page3Styles();
  return (
    <Fragment>
      <div className={commonClasses.basechild}>
        <img className={commonClasses.background, commonClasses.background_opacity} src={base_img} alt="background" />
        <img className={commonClasses.background, commonClasses.background_opacity, commonClasses.border} src={frame} alt="border" />
        <img src={bird} className={commonClasses.butterfly} alt="bird"/>
      </div>

      <Page3 />
    </Fragment>
  );
};

export default East;
