// 꽃밭
import React, { Fragment } from "react";
import Page3 from "./page3"

import base_img from "../image/page3/page3-2-flower/flower_base_layer.png";
import border_img from "../image/page3/border.png";

import cloud from "../image/page3/page3-2-flower/cloud.png";
import butterfly from "../image/page3/page3-2-flower/butterfly.gif";

import page3Styles from "./page3Styles"

const FLower = () => {
  const commonClasses = page3Styles();
  return (
    <Fragment>
      <div className={commonClasses.basechild}>
        <img className={commonClasses.background, commonClasses.background_opacity} src={base_img} alt="background" />
        <img className={commonClasses.background, commonClasses.background_opacity, commonClasses.border} src={border_img} alt="border" />

        <img src={cloud} className={commonClasses.cloud} alt="cloud"/>
        <img src={butterfly} className={commonClasses.butterfly} alt="butterfly"/>
      </div>

      <Page3 />
    </Fragment>
  );
};

export default FLower;
