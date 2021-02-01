import React, { Fragment } from "react";
import { Fade, Loop } from "react-animation-components";

import Page3 from "./Page3"

import light_img from "../image/page3/page3-4-forest/forest_light_layer.png";
import forest from "../image/page3/page3-4-forest/forest.png"
import border_img from "../image/page3/border.png";
import "./page3.css";

const Forest = () => {
    return (
      <Fragment>
        <div>
          <div className="basechild">
            <img className="background background-opacity" src={forest} alt="forest"/>
          </div>
          <div className="lightchild">
            <Loop in interval={1000} iterations={1}>
              <Fade>
                <img className="lightimg" src={light_img} alt="light"/>
              </Fade>
            </Loop>
          </div>
          <div className="albumchild">
            <img className="background border background-opacity" src={border_img} alt="border"/>
          </div>
        </div>

        <Page3 />
    </Fragment>
  );
};

export default Forest;
