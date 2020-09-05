import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import firstIcon from "../image/icon5-1.png";
import secondIcon from "../image/icon5-2.png";
import thirdIcon from "../image/icon5-3.png";
import fourthIcon from "../image/icon5-4.png";

const Page5 = () => {
  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div style={{ marginTop: "30%", marginLeft: 30, marginRight: 30 }}>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span>당신은 누군가에게 다음 중</span>
            <br></br>
            <span style={{ marginTop: 0, marginBottom: 0, fontWeight: "bold" }}>
              어떤 사람
            </span>
            <span>으로 기억되고 싶나요?</span>
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
          style={{ display: "inline", width: "40%", outline: "none" }}
        >
          <Link to="/page6">
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
            따뜻하고 부드러운
          </Typography>
        </Button>

        <Button
          disableRipple="true"
          style={{ display: "inline", width: "40%", outline: "none" }}
        >
          <Link to="/page6">
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
            차분한
          </Typography>
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Button
          disableRipple="true"
          style={{ display: "inline", width: "40%", outline: "none" }}
        >
          <Link to="/page6">
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
            싱그러운
          </Typography>
        </Button>

        <Button
          disableRipple="true"
          style={{ display: "inline", width: "40%", outline: "none" }}
        >
          <Link to="/page6">
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
            유니크하고 독창적인
          </Typography>
        </Button>
      </div>
    </Fragment>
  );
};

export default Page5;
