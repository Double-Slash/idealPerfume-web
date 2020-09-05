import React, { Fragment } from "react";
import { Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

import firstFrame from "../image/page2-1.png";
import secondFrame from "../image/page2-2.png";
import thirdFrame from "../image/page2-3.png";
import fourthFrame from "../image/page2-4.png";
import fifthFrame from "../image/page2-5.png";
import sixthFrame from "../image/page2-6.png";

const frames = [
  firstFrame,
  secondFrame,
  thirdFrame,
  fourthFrame,
  fifthFrame,
  sixthFrame,
];
const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

const Page2 = () => {
  const [styles, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
    boxShadow: "5px 5px 15px grey",
  }));

  // frame 들의 기울기 최대를 15deg로 제한
  const limit = (value, clampAt = 15) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? limit(event.delta[0]) : 0
      }deg)`,
      boxShadow: 20,
    });
  });

  return (
    <Fragment>
      <Fade in={true} timeout={5000}>
        <div style={{ marginTop: "20%", marginLeft: 30, marginRight: 30 }}>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            당신이 좋아하는
            <br></br>
            <span style={{ marginTop: 0, marginBottom: 0, fontWeight: "bold" }}>
              풍경이 담긴 액자가
            </span>
            <br></br>
            <span style={{ marginTop: 0 }}>
              걸려있습니다.<br></br>어떤 장소인가요?
            </span>
          </Typography>
        </div>
      </Fade>

      <div className="frameContainer" {...bind()}>
        {frames.map((src) => {
          return (
            <Link to={`/${src.substring(14,21)}`}>
              <animated.img
                className="frame"
                src={src}
                style={{
                  width: innerWidth / 2,
                  height: innerHeight / 2,
                  ...styles,
                }}
              />
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Page2;
