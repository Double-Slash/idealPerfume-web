import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

import firstIcon from "../image/page1/icon1-1.png";
import secondIcon from "../image/page1/icon1-2.png";
import thirdIcon from "../image/page1/icon1-3.png";
import fourthIcon from "../image/page1/icon1-4.png";
import fifthIcon from "../image/page1/icon1-5.png";

const Page1 = () => {
  return (
    <Fragment>
      <Fade in={true} timeout={5000}>
        <div style={{ marginTop: "30%", marginLeft: 30, marginRight: 30 }}>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span>누군가에게 비춰질</span>
            <br></br>
            <span>나의 </span>
            <span style={{ marginTop: 0, marginBottom: 0, fontWeight: "bold" }}>
              첫인상
            </span>
            <span>은</span>
            <br></br>
            <span style={{ marginTop: 0 }}>어땠으면 하나요?</span>
          </Typography>
        </div>
      </Fade>

      <div
        style={{
          display: "flex",
          marginTop: "20%",
          justifyContent: "center",
        }}
      >
        <Button
          disableRipple="true"
          style={{ display: "inline", outline: "none" }}
        >
          <Link to="/page2">
            <img
              src={firstIcon}
              alt="firstIcon"
              style={{
                width: 90,
                height: 90,
              }}
            ></img>
          </Link>

          <Typography className="Text" style={{ textAlign: "center" }}>
            깨끗하고 청순
          </Typography>
        </Button>

        <Button
          disableRipple="true"
          style={{ display: "inline", outline: "none" }}
        >
          <Link to="/page2">
            <img
              src={secondIcon}
              alt="secondIcon"
              style={{
                width: 90,
                height: 90,
              }}
            ></img>
          </Link>

          <Typography className="Text" style={{ textAlign: "center" }}>
            진중하고 차분
          </Typography>
        </Button>

        <Button
          disableRipple="true"
          style={{ display: "inline", outline: "none" }}
        >
          <Link to="/page2">
            <img
              src={thirdIcon}
              alt="thirdIcon"
              style={{
                width: 90,
                height: 90,
              }}
            ></img>
          </Link>

          <Typography className="Text" style={{ textAlign: "center" }}>
            고급스러운
          </Typography>
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Button
          disableRipple="true"
          style={{ display: "inline", outline: "none" }}
        >
          <Link to="/page2">
            <img
              src={fourthIcon}
              alt="fourthIcon"
              style={{
                width: 90,
                height: 90,
              }}
            ></img>
          </Link>

          <Typography className="Text" style={{ textAlign: "center" }}>
            사랑스러운
          </Typography>
        </Button>

        <Button
          disableRipple="true"
          style={{ display: "inline", outline: "none" }}
        >
          <Link to="/page2">
            <img
              src={fifthIcon}
              alt="fifthIcon"
              style={{
                width: 90,
                height: 90,
              }}
            ></img>
          </Link>

          <Typography className="Text" style={{ textAlign: "center" }}>
            카리스마있는
          </Typography>
        </Button>
      </div>
    </Fragment>
  );
};

export default Page1;
