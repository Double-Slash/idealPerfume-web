import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

const Page8 = () => {
  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div style={{ marginTop: "30%", marginLeft: 40, marginRight: 40 }}>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
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
    </Fragment>
  );
};

export default Page8;
