import React, { Fragment } from "react";
import { Button, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

import spring from "../image/page4/bg4-spring.png";
import summer from "../image/page4/bg4-summer.png";
import autumn from "../image/page4/bg4-autumn.png";
import winter from "../image/page4/bg4-winter.png";

var flag = true;

function selectSeasonToBackground() {
  var selectSeason = window.history.state.state.selectSeason;
  console.log("선택한 계절" + selectSeason);
  switch (selectSeason) {
    case "spring": {
      return spring;
    }
    case "summer": {
      return summer;
    }
    case "autumn": {
      return autumn;
    }
    case "winter": {
      return winter;
    }
    default: {
      return "../image/page1/bg1.png";
    }
  }
}

const page4_winter = () => {
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
            src={selectSeasonToBackground()}
            alt="seasonBackground"
          ></img>
        </div>
      </Fade>
      <Link to="/page5">
        <Button id="btn" onLoad={changeRoute()}></Button>
      </Link>
    </Fragment>
  );
};

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

flag = true;

export default page4_winter;
