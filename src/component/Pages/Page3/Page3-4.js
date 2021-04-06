import React, { Fragment } from "react";
import { Fade, Loop } from "react-animation-components";

import light_img from "../../../image/3/page3-4-forest/forest_light_layer.png";
import forest from "../../../image/3/page3-4-forest/forest.png"
import border_img from "../../../image/3/border.png";
import page3Styles from "./page3Styles"

const Forest = () => {
  const commonClasses = page3Styles();
    return (
      <Fragment>
        <div>
          <div className={commonClasses.basechild}>
            <img className={commonClasses.background, commonClasses.background_opacity} src={forest} alt="forest"/>
          </div>
          <div className={commonClasses.lightchild}>
            <Loop in interval={1000} iterations={1}>
              <Fade>
                <img className={commonClasses.lightimg} src={light_img} alt="light"/>
              </Fade>
            </Loop>
          </div>
          <div className={commonClasses.albumchild}>
            <img className={commonClasses.background, commonClasses.background_opacity} src={border_img} alt="border"/>
          </div>
        </div>
    </Fragment>
  );
};

export default Forest;
