import React, { Fragment, useState } from "react";
import { Button, Typography, Fade, makeStyles, Box } from "@material-ui/core";
import questionData from "../../data/question.json";

import FrameButtonUI from "../modules/FrameButtonUI.js";
import BackgroundBeforeChoice from "../modules/BackgroundBeforeChoice";
import BackgroundAfterChoice from "../modules/BackgroundAfterChoice";

import { width, height } from "../modules/Dimentions.js";

const Page = ({ handleButtonClick, reduxState, currentPage }) => {
  const classes = useStyles();
  const [fadeState, setFadeState] = useState(true);

  const currentQuestion = questionData[currentPage].question; // string 형태
  const currentAnswer = questionData[currentPage].answer; // array 형태

  const renderQuestionUI = () => {
    return (
      <Typography className={classes.questionAreaText}>
        {currentQuestion.split("\n").map((line, index) => {
          return (
            <Fragment key={index}>
              {line}
              <br></br>
            </Fragment>
          );
        })}
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
              setFadeState(false);
              setTimeout(() => {
                setFadeState(true);
              }, 2000);
              handleButtonClick(index + 1, 2000);
            }}
            key={index}
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
              setFadeState(false);
              setTimeout(() => {
                setFadeState(true);
              }, 2000);
              handleButtonClick(index + 1, 1900);
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
    alignItems: "flex-start",
    height: height * 0.4,
    width: width * 0.8,
  },
  questionAreaText: {
    color: "white",
    fontSize: "3vh",
    fontFamily: "Binggrae, sans-serif !important",
    textShadow: "2px 3px 3px rgba(1,1,1,0.2)",
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
    backgroundColor: "rgba(189,195,199,0.3)",
    width: "100%",
    height: "10%",
    marginTop: "7%",
    padding: "5%",
    outline: "none",
    boxShadow: "4px 4px 3px rgba(1,1,1,0.3)",
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "rgba(189,195,199,0.3)",
    },
    "&:active": {
      backgroundColor: "rgba(189,195,199,0.3)",
    },
  },
  normalButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Binggrae, sans-serif !important",
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
    fontSize: 13,
    fontFamily: "Binggrae, sans-serif !important",
  },
});

export default Page;
