import React, { Fragment, useState } from "react";
import { Button, Typography, Fade, makeStyles, Box } from "@material-ui/core";
import commonStyles from "./commonStyles";
import questionData from "../data/question.json";

import FrameButtonUI from "./FrameButtonUI.js";

import spring from "../image/4/bg4-spring.png";
import summer from "../image/4/bg4-summer.png";
import autumn from "../image/4/bg4-autumn.png";
import winter from "../image/4/bg4-winter.png";

import date from "../image/6/bg6-date.png";
import travel from "../image/6/bg6-travel.png";
import friend from "../image/6/bg6-friend.png";
import meeting from "../image/6/bg6-meeting.png";

import dawn from "../image/7/bg7-dawn.png";
import day from "../image/7/bg7-day.png";
import sunset from "../image/7/bg7-sunset.png";
import night from "../image/7/bg7-night.png";

const width = window.innerWidth;
const height = window.innerHeight;

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
  }
}

const renderBackgroundAfterChoice = (fadeState, reduxState, currentPage) => {
  if (!fadeState) {
    console.log(currentPage, "페이지 없어지는중..", fadeState);

    switch (currentPage) {
      case "4": {
        return (
          <Fade in={true} timeout={500}>
            <img
              src={selectSeasonToBackground(reduxState[currentPage])}
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
      }
      case "6": {
        return (
          <Fade in={true} timeout={500}>
            <img
              src={selectSituationToBackground(reduxState[currentPage])}
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
      }
      case "7": {
        return (
          <Fade in={true} timeout={500}>
            <img
              src={selectTimeToBackground(reduxState[currentPage])}
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
      }
    }
  }
};

const Page = ({ handleButtonClick, reduxState, currentPage }) => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const [fadeState, setFadeState] = useState(true);

  const currentQuestion = questionData[currentPage].question; // string 형태
  const currentAnswer = questionData[currentPage].answer; // array 형태

  const renderQuestionUI = () => {
    return (
      <Typography className={commonClasses.questionArea}>
        {currentQuestion}
      </Typography>
    );
  };

  const createNormalButtonUI = () => {
    return (
      <Box className={classes.normalButtonArea}>
        {currentAnswer.map((answer, index) => (
          <Button
            className={commonClasses.styledbutton}
            onClick={() => {
              handleButtonClick(index + 1, 2000);
              setFadeState(false);
              setTimeout(() => {
                setFadeState(true);
              }, 2000);
            }}
            key={index + 1}
          >
            <Typography className={commonClasses.buttonText}>
              {answer}
            </Typography>
          </Button>
        ))}
      </Box>
    );
  };

  const createCircleButtonUI = () => {
    return (
      <Box className={classes.circleButtonArea}>
        {currentAnswer.map((answer, index) => (
          <Button
            disableRipple={true}
            className={classes.circleButton}
            style={
              currentAnswer.length == 5 ? { width: "25%" } : { width: "30%" }
            }
            key={index}
            onClick={() => {
              handleButtonClick(index + 1, 2000);
              setFadeState(false);
              setTimeout(() => {
                setFadeState(true);
              }, 2000);
            }}
          >
            <img
              src={require(`../image/${currentPage}/Icon${currentPage}-${
                index + 1
              }.png`)}
              alt="이미지 버튼"
              className={classes.circleButtonImg}
            ></img>

            <Typography className={classes.circleButtonText}>
              {answer}
            </Typography>
          </Button>
        ))}
      </Box>
    );
  };

  const createFrameButtonUI = () => {
    return (
      <FrameButtonUI
        handleButtonClick={handleButtonClick}
        setFadeState={setFadeState}
      ></FrameButtonUI>
    );
  };

  const renderButtonUI = (currentPage) => {
    switch (currentPage) {
      case "1": {
        return createCircleButtonUI();
      }
      case "5": {
        return createCircleButtonUI();
      }
      case "2": {
        return createFrameButtonUI();
      }
      default: {
        return createNormalButtonUI();
      }
    }
  };

  return (
    <Fragment>
      <Fade in={fadeState} timeout={1000}>
        <Box className={classes.mainContainer}>
          <Box className={classes.questionArea}>{renderQuestionUI()}</Box>
          {renderButtonUI(currentPage)}
        </Box>
      </Fade>
      {renderBackgroundAfterChoice(fadeState, reduxState, currentPage)}
    </Fragment>
  );
};

const useStyles = makeStyles({
  mainContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  questionArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.4,
    width: width * 0.8,
  },
  normalButtonArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.6,
    width: width * 0.8,
  },
  circleButtonArea: {
    display: "block",
    textAlign: "center",
    height: height * 0.6,
    width: width * 0.9,
  },
  circleButton: {
    display: "inline",
    margin: "4%",
    padding: 0,
  },
  circleButtonImg: {
    width: "100%",
  },
  circleButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: "14px",
    fontFamily: "Noto Sans KR, sans-serif !important",
  },
});

export default Page;
