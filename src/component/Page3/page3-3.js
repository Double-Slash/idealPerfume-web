import React, { Fragment } from "react";

import ocean_img from "../../image/3/page3-3-ocean/ocean.png";
import boat_img from "../../image/3/page3-3-ocean/boat.png";
import border_img from "../../image/3/border.png";

import page3Styles from "./page3Styles"

const Ocean = () => {
  const commonClasses = page3Styles();
  return (
    <Fragment>
      <div className={commonClasses.basechild}>
        <img className={commonClasses.background, commonClasses.background_opacity} src={ocean_img} alt="ocean" />
        <img className={commonClasses.background, commonClasses.background_opacity, commonClasses.border} src={border_img} alt="border" />

        <img src={boat_img} className={commonClasses.boat} alt="boat"/>
      </div>
    </Fragment>
  );
};

export default Ocean;
