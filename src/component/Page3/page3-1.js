import React, { Fragment } from "react";

import base_img from "../../image/2/page3-1.png";
import page3Styles from "./page3Styles";

const Fruits = () => {
  const commonClasses = page3Styles();
  return (
    <Fragment>
      <div className={commonClasses.basechild}>
        <img
          className={
            (commonClasses.background, commonClasses.background_opacity)
          }
          src={base_img}
          alt="background"
        />
        {/* <img className="background border background-opacity" src={border_img} alt="border" /> */}
      </div>
    </Fragment>
  );
};

export default Fruits;
