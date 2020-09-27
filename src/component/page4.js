import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
// import jQuery from "jquery";
// import $ from "jquery";

import "../App.css";

// import spring from "../image/bg4-spring.png";
// import summer from "../image/bg4-summer.png";
// import autumn from "../image/bg4-autumn.png";
// import winter from "../image/bg4-winter.png";
import frame from "../image/page4/frame.png";

// const season = [spring, summer, autumn, winter];

// var imgIdx = 0;
// function swapBackgrounds() {
//   if (++imgIdx >= season.length) {
//     imgIdx = 0;
//   }
//   $(".background").animate({ opacity: 0 }, 2000, function () {
//     $(".background")
//       .css("background-image", "url('" + season[imgIdx] + "')")
//       .animate({ opacity: 1 }, 2000);
//   });
// }

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
              <Button
                style={{
                  backgroundColor: "rgba(189,195,199,0.7)",
                  width: "100%",
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
                  봄
                </Typography>
              </Button>
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
              <Button
                style={{
                  backgroundColor: "rgba(189,195,199,0.7)",
                  width: "100%",
                  marginTop: 25,
                  outline: "none",
                }}
              >
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
              </Button>
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
              <Button
                style={{
                  backgroundColor: "rgba(189,195,199,0.7)",
                  width: "100%",
                  marginTop: 25,
                  outline: "none",
                }}
              >
                {" "}
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
              </Button>
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
              <Button
                style={{
                  backgroundColor: "rgba(189,195,199,0.7)",
                  width: "100%",
                  marginTop: 25,
                  outline: "none",
                }}
              >
                {" "}
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
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default page4;
