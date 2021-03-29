import React, { Fragment, useState } from "react";
import { Button, Typography, Fade, makeStyles, Box } from "@material-ui/core";
import commonStyles from "./commonStyles";
import questionData from "../Data/question.json";

import FrameButtonUI from "./FrameButtonUI.js";

const width = window.innerWidth;
const height = window.innerHeight;

const Page = ({ handleButtonClick, page }) => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const [fadeState, setFadeState] = useState(true);

  const currentQuestion = questionData[page].question; // string 형태
  const currentAnswer = questionData[page].answer; // array 형태

  const createQuestionUI = () => {
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
              handleButtonClick(index + 1);
              setFadeState(false);
              setTimeout(() => {
                setFadeState(true);
              }, 1000);
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
            onClick={() => {
              handleButtonClick(index + 1);
              setFadeState(false);
              setTimeout(() => {
                setFadeState(true);
              }, 1000);
            }}
          >
            {console.log(`../image/${page}/Icon${page}-${index + 1}.png`)}
            <img
              src={require(`../image/${page}/Icon${page}-${index + 1}.png`)}
              alt="이미지"
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

  const renderButtonUI = (page) => {
    switch (page) {
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
    <Fade in={fadeState} timeout={1000}>
      <Box className={classes.mainContainer}>
        <Box className={classes.questionArea}>{createQuestionUI()}</Box>
        {renderButtonUI(page)}
      </Box>
    </Fade>
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
    width: "25%",
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
