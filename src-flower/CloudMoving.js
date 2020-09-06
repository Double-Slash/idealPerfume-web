import React, { useState} from "react";
import { useSpring, animated} from "react-spring";
import cloud from './image/1596737150337-4.png'

const CloudMoving = () => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    to: { transform: "translate(200%,0)" },
    from: { transform: "translate(-200%,0)" },
    config: { duration: 15000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
    
  });
  return (
    <div key={key}>
      <animated.div style={scrolling}><img className = 'cloud' src = {cloud} alt = 'cloud'></img></animated.div>
    </div>
  );
  };


export default CloudMoving;
