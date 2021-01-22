import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../App.css";

// import spring from "../image/bg4-spring.png";
// import summer from "../image/bg4-summer.png";
// import autumn from "../image/bg4-autumn.png";
// import winter from "../image/bg4-winter.png";
import frame from "../image/page4/frame.png";

const StyledButton = styled(Button)({
  backgroundColor: "rgba(189,195,199,0.7)",
  width: "100%",
  marginTop: 25,
  outline: "none",
  borderRadius: 15,
});

const page4 = () => {
  return (
    <Fragment>
      <img
        className="background"
        style={{ height: "87%", zIndex: -1 }}
        src={frame}
        alt="frame"
      ></img>

      <Fade in={true} timeout={3000}>
        <div style={{ marginTop: "30%", marginLeft: 50, marginRight: 50 }}>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span>당신을 닮은</span>
            <br></br>
            <span style={{ marginTop: 0, fontWeight: "bold" }}>
              계절은 언제인가요?
            </span>
          </Typography>

          <div
            style={{
              marginTop: "40%",
              marginLeft: 60,
              marginRight: 60,
            }}
          >
            <Link
              to={{
                pathname: "/page4-season",
                state: { selectSeason: "spring" },
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <StyledButton>
                <Typography
                  className="Text"
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  봄
                </Typography>
              </StyledButton>
            </Link>
            <Link
              to={{
                pathname: "/page4-season",
                state: { selectSeason: "summer" },
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <StyledButton>
                {" "}
                <Typography
                  className="Text"
                  style={{
                    opacity: 1,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  여름
                </Typography>{" "}
              </StyledButton>
            </Link>
            <Link
              to={{
                pathname: "/page4-season",
                state: { selectSeason: "autumn" },
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <StyledButton>
                <Typography
                  className="Text"
                  style={{
                    opacity: 1,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  가을
                </Typography>{" "}
              </StyledButton>
            </Link>
            <Link
              to={{
                pathname: "/page4-season",
                state: { selectSeason: "winter" },
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <StyledButton>
                <Typography
                  className="Text"
                  style={{
                    opacity: 1,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  겨울
                </Typography>{" "}
              </StyledButton>
            </Link>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default page4;
