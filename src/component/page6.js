import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

import phoneBefore from "../image/page6/phoneBefore.png";
import phoneAfter from "../image/page6/phoneAfter.png";
import phone from "../image/page6/phone.png";

const page6 = () => {
  return (
    <Fragment>
      <img
        style={{
          width: "100%",
          height: "100%",
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        src={phoneBefore}
        alt="phoneBefore"
      ></img>

      <Fade in={true} timeout={2000}>
        <div style={{ marginTop: "30%", marginLeft: 40, marginRight: 40 }}>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span style={{ fontWeight: "bold" }}>갑자기 온 연락으로 </span>
            <br></br>
            <span style={{ marginTop: 0, fontWeight: "bold" }}>
              약속을 잡게 됩니다.
            </span>
            <br></br>
            <span>어떤 상황인가요?</span>
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
                  pathname: "/page6-situation",
                  state: { selectSituation: "date" },
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
                  사랑하는 사람과 한강 데이트
                </Typography>
              </Link>
            </Button>

            <Link
              to={{
                pathname: "/page6-situation",
                state: { selectSituation: "travel" },
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
                  멀리 떠나는 여행
                </Typography>
              </Button>
            </Link>
            <Link
              to={{
                pathname: "/page6-situation",
                state: { selectSituation: "friend" },
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
                  절친과 함께하는 맛집 탐방
                </Typography>
              </Button>
            </Link>
            <Link
              to={{
                pathname: "/page6-situation",
                state: { selectSituation: "meeting" },
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
                  중요한 비즈니스 미팅
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default page6;
