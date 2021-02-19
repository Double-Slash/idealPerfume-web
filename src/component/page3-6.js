import React, { useState,Fragment } from "react";
import { useSpring, animated } from "react-spring";
import { Fade } from "react-animation-components";
import { Button, Typography } from "@material-ui/core";

import Page3 from "./page3";

import base_img from "../image/page3/page3-6-East/East_base_layer.png";
import bird from "../image/page3/page3-6-East/bird.gif";
import frame from "../image/page3/page3-6-East/frame.png";
import "./page3.css";

const East = () => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(110%,0%)" },
    to: { transform: "translate(-110%,0%)" },
    config: { duration: 5000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <Fragment>
      <div className="baselayer">
        <div className="basechild">
          <animated.div style={scrolling}>
            <img className="bird" src={bird} alt="bird"></img>
          </animated.div>
          <img className="baseimg" src={base_img} alt="background" />
        </div>
      </div>
      <img className="frame" src={frame} alt="frame"></img>

      <Page3 />
    </Fragment>
  );
};

export default East;
