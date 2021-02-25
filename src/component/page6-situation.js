import React, { Fragment, useEffect } from "react";
import { Fade } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage } from "../redux/action";

import date from "../image/page6/bg6-date.png";
import travel from "../image/page6/bg6-travel.png";
import friend from "../image/page6/bg6-friend.png";
import meeting from "../image/page6/bg6-meeting.png";

function selectSituationToBackground(situationChoice) {
  switch (situationChoice) {
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

const Page6_situation = () => {
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();
  const situationChoice = reduxState.questionSelectionReducer.results[7].result;

  useEffect(() => {
    setTimeout(() => {
      dispatch(handleNextPage("page7"));
    }, 2500);
  }, []);

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
            src={selectSituationToBackground(situationChoice)}
            alt="situationBackground"
          ></img>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page6_situation;
