import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import cloud from "../image/page3/page3-2-flower/cloud.png";

const CloudMoving = () => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    to: { transform: "translate(100%,0)" },
    from: { transform: "translate(-100%,0)" },
    config: { duration: 45000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div key={key}>
      <animated.div style={scrolling}>
        <img className="cloud" src={cloud} alt="cloud"></img>
      </animated.div>
    </div>
  );
};

export default CloudMoving;
