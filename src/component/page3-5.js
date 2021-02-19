import React, { Fragment } from "react";
import { Fade, Loop } from "react-animation-components";
import { Button, Typography } from "@material-ui/core";
import { Transition } from "react-transition-group";

import Page3 from "./page3";

import city_img from "../image/page3/page3-5-city/city.png";
import light_img from "../image/page3/page3-5-city/light.png";
import border_img from "../image/page3/border.png";
import "./page3.css";

const City = () => {
  return (
    <Fragment>
      <div>
        <img src={city_img} className="background" alt="city" />
        <img src={border_img} className="background" alt="border" />
      </div>
      <Page3 />
    </Fragment>
  );
};

export default City;
