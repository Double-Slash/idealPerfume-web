// 꽃밭
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Fade, Loop } from "react-animation-components";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import base_img from "../image/page3/page3-2-flower/flower_base_layer.png";
import frame from "../image/page3/page3-2-flower/flower_album_layer.png";

import ButterflyMoving from "./page3-2-Butterfly.js";
import CloudMoving from "./page3-2-Cloud.js";

import "./page3.css";

const FLower = () => {
  return (
    <div>
      <div className="baselayer">
        <div className="basechild">
          <CloudMoving></CloudMoving>
          <ButterflyMoving></ButterflyMoving>
          <ButterflyMoving></ButterflyMoving>
          <ButterflyMoving></ButterflyMoving>

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
                to="/page3-table"
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
                to="/page3-drawer-4"
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

export default FLower;
