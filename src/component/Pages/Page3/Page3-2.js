// 꽃밭
import React, { Fragment } from "react";
import classNames from "classnames";

import base_img from "../../../image/3/page3-2-flower/flower_base_layer.png";
import border_img from "../../../image/3/border.png";
import cloud from "../../../image/3/page3-2-flower/cloud.png";
import butterfly from "../../../image/3/page3-2-flower/butterfly.gif";

import page3Styles from "./page3Styles";

const FLower = () => {
  const commonClasses = page3Styles();
  return (
    <Fragment>
      <div
        className={classNames(
          commonClasses.basechild,
          commonClasses.background_opacity
        )}
      >
        <img
          className={classNames(commonClasses.background)}
          src={base_img}
          alt="background"
        />
        <img
          className={classNames(commonClasses.border)}
          src={border_img}
          alt="border"
        />
        <img src={cloud} className={commonClasses.cloud} alt="cloud" />

        <img
          src={butterfly}
          className={commonClasses.butterfly}
          alt="butterfly"
        />
      </div>
    </Fragment>
  );
};

export default FLower;
