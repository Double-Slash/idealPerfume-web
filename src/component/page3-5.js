import React, { Fragment } from "react";

import Page3 from "./page3";

import city_img from "../image/page3/page3-5-city/city.png";
import light_img from "../image/page3/page3-5-city/light.png";
import border_img from "../image/page3/border.png";
import page3Styles from "./page3Styles"

const City = () => {
  const commonClasses = page3Styles();
  return (
    <Fragment>
      <div className={commonClasses.basechild}>
        <img className={commonClasses.background, commonClasses.background_opacity} src={city_img} alt="city" />
        <img className={commonClasses.background, commonClasses.background_opacity} src={border_img} alt="border" />
      </div>
      <Page3 />
    </Fragment>
  );
};

export default City;
