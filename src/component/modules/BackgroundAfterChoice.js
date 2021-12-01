import React, { Fragment } from "react";
import { Fade } from "@material-ui/core";

import spring from "../../image/4/bg4-spring.png";
import summer from "../../image/4/bg4-summer.png";
import autumn from "../../image/4/bg4-autumn.png";
import winter from "../../image/4/bg4-winter.png";

import date from "../../image/6/bg6-date.png";
import travel from "../../image/6/bg6-travel.png";
import friend from "../../image/6/bg6-friend.png";
import meeting from "../../image/6/bg6-meeting.png";

import dawn from "../../image/7/bg7-dawn.png";
import day from "../../image/7/bg7-day.png";
import sunset from "../../image/7/bg7-sunset.png";
import night from "../../image/7/bg7-night.png";

function selectSeasonToBackground(seasonChoice) {
  switch (seasonChoice) {
    case 1: {
      return spring;
    }
    case 2: {
      return summer;
    }
    case 3: {
      return autumn;
    }
    case 4: {
      return winter;
    }
    default:
      return;
  }
}

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
    default:
      return;
  }
}

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
    default:
      return;
  }
}

const getBackgroundSrc = (currentPage, currentPageResult) => {
  switch (currentPage) {
    case "4":
      return selectSeasonToBackground(currentPageResult);
    case "6":
      return selectSituationToBackground(currentPageResult);
    case "7":
      return selectTimeToBackground(currentPageResult);
    default:
      return;
  }
};

const BackgroundAfterChoice = ({ fadeState, reduxState, currentPage }) => {
  if (!fadeState) {
    return (
      <Fade in={true} timeout={1500}>
        <img
          alt="background"
          src={getBackgroundSrc(currentPage, reduxState[currentPage])}
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></img>
      </Fade>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default BackgroundAfterChoice;
