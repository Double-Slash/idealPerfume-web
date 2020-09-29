import React, { Fragment } from "react";
import { Button, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

import dawn from "../image/page7/bg7-dawn.png";
import day from "../image/page7/bg7-day.png";
import sunset from "../image/page7/bg7-sunset.png";
import night from "../image/page7/bg7-night.png";

var flag = true;

function selectTimeToBackground() {
  var selectTime = window.history.state.state.selectTime;
  console.log("선택한 시간대" + selectTime);
  switch (selectTime) {
    case "dawn": {
      return dawn;
    }
    case "day": {
      return day;
    }
    case "sunset": {
      return sunset;
    }
    case "night": {
      return night;
    }
  }
}

function changeRoute() {
  console.log("routing...");
  console.log(flag);
  if (flag === true) {
    setTimeout(() => {
      document.getElementById("btn").click();
    }, 3000);
    flag = false;
  }
}

const page7_time = () => {
  return (
    <Fragment>
      <Fade in={true} timeout={2000}>
        <div>
          <img
            style={{
              width: "100%",
              height: "100%",
              zIndex: -1,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            src={selectTimeToBackground()}
            alt="timeBackground"
          ></img>
        </div>
      </Fade>
      <Link to="/">
        <Button id="btn" onLoad={changeRoute()}></Button>
      </Link>
    </Fragment>
  );
};

flag = true;

export default page7_time;
