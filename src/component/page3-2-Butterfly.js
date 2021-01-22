import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import butterfly from "../image/page3/page3-2-flower/butterfly.gif";

const ButterflyMoving = () => {
  const [key, setKey] = useState(1);
  const moving = useSpring({
    from: {
      transform: `translate(${Math.floor(
        Math.random() * window.innerWidth
      )}%,${Math.floor(Math.random() * window.innerHeight)}%)`,
    },
    to: {
      transform: `translate(${Math.floor(
        Math.random() * window.innerWidth
      )}%,${Math.floor(Math.random() * window.innerHeight)}%)`,
    },

    config: { duration: 15000 },
    reset: false,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div key={key}>
      <animated.div style={moving}>
        <img className="butterfly" src={butterfly} alt="butterfly"></img>
      </animated.div>
    </div>
  );
};

export default ButterflyMoving;
