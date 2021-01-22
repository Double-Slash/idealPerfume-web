import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Fade, Loop } from "react-animation-components";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

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
    <div>
      <div className="baselayer">
        <div className="basechild">
          <animated.div style={scrolling}>
            <img className="bird" src={bird} alt="bird"></img>
          </animated.div>
          <img className="baseimg" src={base_img} alt="background" />
        </div>
      </div>
      <img className="frame" src={frame} alt="frame"></img>
      <div
        style={{
          marginTop: "30%",
          marginLeft: 10,
          marginRight: 10,
          zIndex: 6,
          position: "absolute",
        }}
      >
        <Fade in={true} timeout={5000}>
          <div style={{ marginLeft: 40, marginRight: 40 }}>
            <Typography
              className="Text"
              style={{ fontSize: 25, color: "white" }}
            >
              <span
                style={{
                  marginTop: 0,
                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                Q.
              </span>
              <br></br>
              <span style={{ fontWeight: "bold" }}>당신은 이 액자를 </span>
              <br></br>
              <span style={{ marginTop: 0, fontWeight: "bold" }}>
                어디에 두시나요?
              </span>
            </Typography>
          </div>

          <div
            style={{
              width: "90%",
              marginTop: "60%",
              display: "block",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(189,195,199,0.7)",
                width: "100%",
                height: "50px",
                borderRadius: 15,
                outline: "none",
              }}
            >
              <Link
                to={{
                  pathname: "/page3-table",
                  state: { prevPath: window.location.pathname },
                }}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  className="Text"
                  style={{
                    opacity: 1,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  매일 매일 볼 수 있는 탁자
                </Typography>
              </Link>
            </Button>
          </div>

          <div
            style={{
              width: "90%",
              marginTop: "5%",
              display: "block",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Button
              style={{
                backgroundColor: "rgba(189,195,199,0.7)",
                width: "100%",
                height: "50px",
                borderRadius: 15,
                outline: "none",
              }}
            >
              <Link
                to={{
                  pathname: "/page3-drawer",
                  state: { prevPath: window.location.pathname },
                }}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  className="Text"
                  style={{
                    opacity: 1,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  어쩌다 한 번 꺼내 볼 수 있는 서랍 속
                </Typography>
              </Link>
            </Button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default East;
