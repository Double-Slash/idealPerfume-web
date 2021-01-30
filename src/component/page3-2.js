// 꽃밭
import React, { Fragment } from "react";
import { Transition } from "react-transition-group";

import Page3 from "./page3"
import base_img from "../image/page3/page3-2-flower/flower_base_layer.png";
import border_img from "../image/page3/border.png";

import ButterflyMoving from "./page3-2-Butterfly.js";
import CloudMoving from "./page3-2-Cloud.js";
import cloud from "../image/page3/page3-2-flower/cloud.png";
import butterfly from "../image/page3/page3-2-flower/butterfly.gif";

import "./page3.css";

const FLower = () => {
  const innerWidth = window.history.state.state.innerWidth;
  const innerHeight = window.history.state.state.innerHeight;
  return (
    <Fragment>
      <div className="basechild">
        <img className="background background-opacity" src={base_img} alt="background" />
        <img className="background border background-opacity" src={border_img} alt="border" />
        
        <Transition timeout={4000} in={true} appear>
          {(status) => <img src={cloud} className={`cloud cloud-${status}`} alt="cloud"/>}
        </Transition>
        <Transition timeout={4000} in={true} appear>
          { (status) => <img src={butterfly} className={`butterfly butterfly-${status}`} alt="butterfly"/>}
        </Transition>
        {/* <CloudMoving></CloudMoving> */}
        {/* <ButterflyMoving></ButterflyMoving>
        <ButterflyMoving></ButterflyMoving> */}
      </div>

      <Page3 />
    </Fragment>
  );
};

export default FLower;
