import React, { useState} from "react";
import { useSpring, animated} from "react-spring";
import bird from './image/ANY_0813232049.gif'

const Moving = () => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(110%,0%)" },
    to: { transform: "translate(-110%,0%)" },
    config: { duration: 10000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
    
  })
  return (
    <div key={key}>
      <animated.div style={scrolling}><img className = 'bird' src = {bird} alt = 'bird'></img></animated.div>
    </div>
  );
  };


export default Moving;
