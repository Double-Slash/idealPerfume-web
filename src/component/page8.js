import React, { Fragment, useEffect, useState } from "react";
import { makeStyles,Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

import bg8 from "../image/page8/bg8.png";
import LP from "../image/page8/LP.png";
import LPLine from "../image/page8/LPLine.png";

import "./page8.css";

function Background(backgroundFlag) {
  if (backgroundFlag === true) {
    return (
      <Fade in={true} timeout={1000}>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <img
            style={{
              animation: `spin 6s linear infinite`,
              width: "120%",
              zIndex: -1,
              position: "absolute",
              top: "-20%",
              left: "-9%",
            }}
            src={LP}
            alt="LP"
          ></img>
          <img
            style={{
              width: "60%",
              zIndex: -1,
              position: "absolute",
              top: "30%",
              left: "70%",
            }}
            src={LPLine}
            alt="LPLine"
          ></img>
          <img
            style={{
              width: "100%",
              height: "80%",
              zIndex: -2,
              position: "absolute",
              top: "20%",
              left: 0,
            }}
            src={bg8}
            alt="bg8"
          ></img>
        </div>
      </Fade>
    );
  }
}

function UI(UIFlag) {
  if (UIFlag === true) {
    return (
      <Fade in={true} timeout={5000}>
        <div style={{ marginTop: "40%", marginLeft: 40, marginRight: 40 }}>
          <Typography className="Text" style={{ fontSize: 22, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span>여러가지 생각에 잠긴 당신은</span>
            <br></br>
            <span style={{ marginTop: 0, fontWeight: "bold" }}>
              지금의 분위기를 더해줄 음악을
            </span>
            <br></br>
            <span>틀기로 합니다.</span>
          </Typography>
          <div style={{ marginTop: "20%" }}>
            <Button
              style={{
                backgroundColor: "rgba(189,195,199,0.7)",
                width: "100%",
                height: "50px",
                borderRadius: 15,
              }}
            >
              <Link
                to={{
                  pathname: "/page7-time",
                  state: { selectTime: "dawn" },
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
                  부드러운 클래식 피아노
                </Typography>
              </Link>
            </Button>

            <Link
              to={{
                pathname: "/page7-time",
                state: { selectTime: "day" },
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "rgba(189,195,199,0.7)",
                  borderRadius: 15,
                  marginTop: 20,
                }}
              >
                <Typography
                  className="Text"
                  style={{
                    color: "white",

                    fontSize: 20,
                  }}
                >
                  감각적이고 트렌디한 재즈
                </Typography>
              </Button>
            </Link>
            <Link
              to={{
                pathname: "/page7-time",
                state: { selectTime: "sunset" },
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  width: "100%",
                  height: "50px",

                  backgroundColor: "rgba(189,195,199,0.7)",
                  borderRadius: 15,
                  marginTop: 20,
                }}
              >
                <Typography
                  className="Text"
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  신나는 디스코
                </Typography>
              </Button>
            </Link>
            <Link
              to={{
                pathname: "/page7-time",
                state: { selectTime: "night" },
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "rgba(189,195,199,0.7)",
                  borderRadius: 15,
                  marginTop: 20,
                }}
              >
                <Typography
                  className="Text"
                  style={{
                    color: "white",

                    fontSize: 20,
                  }}
                >
                  블루지한 인디음악
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
    );
  }
}

const Page8 = () => {
  const [backgroundFlag, setbackgroundFlag] = useState(false);
  const [UIFlag, setUIFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setbackgroundFlag(true);
    }, 3000);
    setTimeout(() => {
      setUIFlag(true);
    }, 5000);
  }, []);

  return (
    <Fragment>
      {Background(backgroundFlag)}
      {UI(UIFlag)}
    </Fragment>
  );
};

export default Page8;
