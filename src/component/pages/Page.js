import React, { Fragment, useState } from "react";
import { Button, Typography, Fade, makeStyles, Box } from "@material-ui/core";
import questionData from "../../data/question.json";

import FrameButtonUI from "../modules/FrameButtonUI.js";
import BackgroundBeforeChoice from "../modules/BackgroundBeforeChoice";
import BackgroundAfterChoice from "../modules/BackgroundAfterChoice";

const width = window.innerWidth;
const height = window.innerHeight;

const Page = ({ handleButtonClick, reduxState, currentPage }) => {
  const classes = useStyles();
  const [fadeState, setFadeState] = useState(true);

  const currentQuestion = questionData[currentPage].question; // string 형태
  const currentAnswer = questionData[currentPage].answer; // array 형태

  const renderQuestionUI = () => {
    return (
      <Typography className={classes.questionAreaText}>
        {currentQuestion}
      </Typography>
    );
  };

  const createNormalButtonUI = () => {
    return (
      <Box className={classes.normalButtonArea}>
        {currentAnswer.map((answer, index) => (
          <Button
            className={classes.normalButton}
            onClick={() => {
              handleButtonClick(index + 1, 2000);
              setFadeState(false);
              setTimeout(() => {
                setFadeState(true);
              }, 2000);
            }}
            key={index + 1}
          >
            <Typography className={classes.normalButtonText}>
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
              currentAnswer.length === 5 ? { width: "25%" } : { width: "30%" }
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
              src={require(`../../image/${currentPage}/Icon${currentPage}-${
                index + 1
              }.png`)}
              alt={index}
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
      <BackgroundBeforeChoice
        currentPage={currentPage}
      ></BackgroundBeforeChoice>

      <Fade in={fadeState} timeout={1000}>
        <Box className={classes.mainContainer}>
          <Box className={classes.questionArea}>{renderQuestionUI()}</Box>
          {renderButtonUI(currentPage)}
        </Box>
      </Fade>

      <BackgroundAfterChoice
        fadeState={fadeState}
        reduxState={reduxState}
        currentPage={currentPage}
      ></BackgroundAfterChoice>
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
  questionAreaText: {
    color: "white",
    fontSize: 25,
    fontFamily: "Noto Sans KR, sans-serif !important",
  },
  normalButtonArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.6,
    width: width * 0.8,
  },
  normalButton: {
    backgroundColor: "rgba(189,195,199,0.7)",
    width: "100%",
    marginTop: 25,
    outline: "none",
    borderRadius: 15,
  },
  normalButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Noto Sans KR, sans-serif !important",
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
    fontSize: 14,
    fontFamily: "Noto Sans KR, sans-serif !important",
  },
});

export default Page;
