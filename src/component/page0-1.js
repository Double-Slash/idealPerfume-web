import React from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

const Page0_1 = () => {
  return (
    <div style={{ marginTop: "30%", marginLeft: 30, marginRight: 30 }}>
      <Fade in={true} timeout={5000}>
        <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
          <span style={{ fontWeight: "bold" }}>Q.</span>
          <br></br>
          <span style={{ marginTop: 20 }}>그 사람의</span>
          <span style={{ fontWeight: "bold" }}> 나이대는?</span>
        </Typography>
      </Fade>

      <Fade in={true} timeout={7000}>
        <div
          style={{
            marginTop: "20%",
            marginLeft: 20,
            marginRight: 20,
            display: "block",
          }}
        >
          <Link
            to="/page1"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: 15,
                backgroundColor: "rgba(189,195,199,0.6)",
                marginTop: 20,
                outline: "none",
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                10대
              </Typography>
            </Button>
          </Link>

          <Link
            to="/page1"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: 15,
                backgroundColor: "rgba(189,195,199,0.6)",
                marginTop: 20,
                outline: "none",
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                20대
              </Typography>
            </Button>
          </Link>
          <Link
            to="/page1"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: 15,
                backgroundColor: "rgba(189,195,199,0.6)",
                marginTop: 20,
                outline: "none",
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                30대
              </Typography>
            </Button>
          </Link>
          <Link
            to="/page1"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: 15,
                backgroundColor: "rgba(189,195,199,0.6)",
                marginTop: 20,
                outline: "none",
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                40대
              </Typography>
            </Button>
          </Link>
          <Link
            to="/page1"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: 15,
                backgroundColor: "rgba(189,195,199,0.6)",
                marginTop: 20,
                outline: "none",
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                50대
              </Typography>
            </Button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Page0_1;
