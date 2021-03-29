import React, { Fragment, useEffect } from "react";
import { Fade } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage } from "../Redux/action";
import commonStyles from "./commonStyles";

import date from "../image/6/bg6-date.png";
import travel from "../image/6/bg6-travel.png";
import friend from "../image/6/bg6-friend.png";
import meeting from "../image/6/bg6-meeting.png";

function selectSituationToBackground(situationChoice) {
  switch (situationChoice) {
    case 1: {
      return date;
    }
    case 2: {
      return travel;
    }
    case 3: {
      return friend;
    }
    case 4: {
      return meeting;
    }
  }
}

const Page6_situation = () => {
  const commonClasses = commonStyles();
  const situationChoice = useSelector((state) => state.questionSelectionReducer.results["page6"]);
  const dispatch = useDispatch();

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
