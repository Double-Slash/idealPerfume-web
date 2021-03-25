import React, { Fragment, useState, useEffect } from "react";
import { Button, Typography, Fade, makeStyles, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../Redux/action";
import commonStyles from "./commonStyles";
import questionData from "../Data/question.json";

import Page2 from "./Page2.js";

// import Icon1_0 from "../image/1/Icon1-1.png";
// import Icon1_1 from "../image/1/Icon1-2.png";
// import Icon1_2 from "../image/1/Icon1-3.png";
// import Icon1_3 from "../image/1/Icon1-4.png";
// import Icon1_4 from "../image/1/Icon1-5.png";

const width = window.innerWidth;
const height = window.innerHeight;
console.log(width, height);

const Page = ({ page }) => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  const currentQuestion = questionData[page].question; // string 형태
  const currentAnswer = questionData[page].answer; // array 형태

  const [fadeState, setFadeState] = useState(true);

  const handleButtonClick = (result) => {
    setFadeState(false);
    setTimeout(() => {
      dispatch(handleNextPage(parseInt(page) + 1));
      dispatch(handleQuestionSelection(page, result));
      setFadeState(true);
    }, 1100);
  };

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
            onClick={() => handleButtonClick(index + 1)}
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

  const createFrameUI = () => {};

  const RenderButtonUI = (page) => {
    switch (page) {
      case "1": {
        return createCircleButtonUI();
      }
      case "2": {
        return <Page2 handleButtonClick={() => handleButtonClick()}></Page2>;
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
          <Box className={classes.questionArea}>{createQuestionUI()}</Box>
          {RenderButtonUI(page)}
        </Box>
      </Fade>
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
    width: width,
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
    fontSize: "15px",
    fontFamily: "Noto Sans KR, sans-serif !important",
  },
});

export default Page;
