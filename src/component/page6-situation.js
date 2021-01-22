import React, { Fragment } from "react";
import { Button, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

import date from "../image/page6/bg6-date.png";
import travel from "../image/page6/bg6-travel.png";
import friend from "../image/page6/bg6-friend.png";
import meeting from "../image/page6/bg6-meeting.png";

var flag = true;

function selectSituationToBackground() {
  var selectSituation = window.history.state.state.selectSituation;
  console.log("선택한 상황" + selectSituation);
  switch (selectSituation) {
    case "date": {
      return date;
    }
    case "travel": {
      return travel;
    }
    case "friend": {
      return friend;
    }
    case "meeting": {
      return meeting;
    }
    default: {
      return "../image/page1/bg1.png";
    }
  }
}

const page6_situation = () => {
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
            src={selectSituationToBackground()}
            alt="situationBackground"
          ></img>
        </div>
      </Fade>
      <Link to="/page7">
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

export default page6_situation;
