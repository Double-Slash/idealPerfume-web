import React, { Fragment,useEffect } from "react";
import { Fade } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage } from "../redux/action";

import dawn from "../image/page7/bg7-dawn.png";
import day from "../image/page7/bg7-day.png";
import sunset from "../image/page7/bg7-sunset.png";
import night from "../image/page7/bg7-night.png";

function selectTimeToBackground(timeChoice) {
  switch (timeChoice) {
    case 1: {
      return dawn;
    }
    case 2: {
      return day;
    }
    case 3: {
      return sunset;
    }
    case 4: {
      return night;
    }
    default: {
      return "../image/page1/bg1.png";
    }
  }
}

const Page7_time = () => {
  const timeChoice = useSelector((state) => state.questionSelectionReducer.results["page7"]);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(handleNextPage("page8"));
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
            src={selectTimeToBackground(timeChoice)}
            alt="timeBackground"
          ></img>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page7_time;
