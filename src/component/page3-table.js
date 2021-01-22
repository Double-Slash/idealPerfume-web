import React, { Fragment } from "react";
import { Button,Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

import firstFrame from "../image/page3/table1-fruit.png";
import secondFrame from "../image/page3/table2-flower.png";
import thirdFrame from "../image/page3/table3-ocean.png";
import fourthFrame from "../image/page3/table4-forest.png";
import fifthFrame from "../image/page3/table5-city.png";
import sixthFrame from "../image/page3/table5-city.png";

var flag = true;

function routeNameToBackground() {
  var prevPath = window.history.state.state.prevPath;
  console.log("이전 페이지" + prevPath);
  switch (prevPath) {
    case "/page3-1": {
      return firstFrame;
    }
    case "/page3-2": {
      return secondFrame;
    }
    case "/page3-3": {
      return thirdFrame;
    }
    case "/page3-4": {
      return fourthFrame;
    }
    case "/page3-5": {
      return fifthFrame;
    }
    case "/page3-6": {
      return sixthFrame;
    }
    default: {
      return "../image/page1/bg1.png";
    }
  }
}

const page3_table = () => {
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
            src={routeNameToBackground()}
            alt="tableBackground"
          ></img>
        </div>
      </Fade>
      <Link to="/page4">
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
export default page3_table;
