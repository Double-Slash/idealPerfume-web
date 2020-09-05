import React, { Fragment } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const page6 = () => {
  return (
    <Fragment>
      <div style={{ marginTop: "30%", marginLeft: 40, marginRight: 40 }}>
        <div>
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
        </div>

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
              to="/page6-date"
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
            to="/page6-trip"
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
    </Fragment>
  );
};

export default page6;
