import React, { Fragment } from "react";
import { Transition } from "react-transition-group";

import Page3 from "./page3"

import ocean_img from "../image/page3/page3-3-ocean/ocean.png";
import boat_img from "../image/page3/page3-3-ocean/boat.png";
import border_img from "../image/page3/border.png";
import "./page3.css";

const Ocean = () => {
  return (
    <Fragment>
      <div className="basechild">
        <img src={ocean_img} className="background background-opacity" alt="ocean"/>
        <img src={border_img} className="background border background-opacity" alt="border"/>

        <Transition timeout={4000} in={true} appear>
          {(status) => <img src={boat_img} className={`boat boat-${status}`} alt="boat"/>}
        </Transition>
      </div>

      <Page3 />
    </Fragment>
  );
};

export default Ocean;
