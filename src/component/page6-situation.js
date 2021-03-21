import React, { Fragment, useEffect } from "react";
import { Fade } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage } from "../redux/action";
import commonStyles from "./commonStyles";

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
  const commonClasses = commonStyles();
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
          <img className={commonClasses.img}
            src={selectSituationToBackground(situationChoice)}
            alt="situationBackground"
          ></img>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page6_situation;
