import React, { Fragment, useEffect, useState } from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../redux/action";

import phoneBefore from "../image/page6/phoneBefore.png";
import phoneAfter from "../image/page6/phoneAfter.png";

import commonStyles from "./commonStyles";

function handleReduxState(dispatch, result) {
  dispatch(handleNextPage("page6-result"));
  dispatch(handleQuestionSelection("page6", result));
}

function Background(backgroundFlag) {
  if (backgroundFlag === false) {
    return (
      <Fade in={true} timeout={3000}>
        <img
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          src={phoneBefore}
          alt="phoneBefore"
        ></img>
      </Fade>
    );
  } else {
    return (
      <Fade in={true} timeout={3000}>
        <img
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          src={phoneAfter}
          alt="phoneAfter"
        ></img>
      </Fade>
    );
  }
}

function UI(UIFlag) {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  if (UIFlag === true) {
    return (
      <Fade in={true} timeout={3000}>
        <div className={classes.root}>
          <div className={classes.questionRoot}>
            <Typography className={commonClasses.questionArea}>
              <span className={commonClasses.boldText}>Q.</span>
              <br></br>
              <span className={commonClasses.boldText}>
                갑자기 온 연락으로{" "}
              </span>
              <br></br>
              <span className={commonClasses.boldText}>
                약속을 잡게 됩니다.
              </span>
              <br></br>
              <span>어떤 상황인가요?</span>
            </Typography>
          </div>

          <div className={classes.buttonArea}>
            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, "date")}
            >
              <Typography className={commonClasses.buttonText}>
                사랑하는 사람과 한강 데이트
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, "travel")}
            >
              <Typography className={commonClasses.buttonText}>
                멀리 떠나는 여행
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, "friend")}
            >
              <Typography className={commonClasses.buttonText}>
                절친과 함께하는 맛집 탐방
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, "meeting")}
            >
              <Typography className={commonClasses.buttonText}>
                중요한 비즈니스 미팅
              </Typography>
            </Button>
          </div>
        </div>
      </Fade>
    );
  }
}

const useStyles = makeStyles({
  root: {
    marginTop: "50%",
    marginLeft: 20,
    marginRight: 20,
    zIndex: 6,
    position: "absolute",
  },
  questionRoot: {
    marginLeft: 20,
    marginRight: 20,
  },
  buttonArea: {
    marginTop: "40%",
    display: "block",
  },
});

const Page6 = () => {
  const [backgroundFlag, setbackgroundFlag] = useState(false);
  const [UIFlag, setUIFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setbackgroundFlag(true);
    }, 3000);
    setTimeout(() => {
      setUIFlag(true);
    }, 5000);
  }, []);

  return (
    <Fragment>
      {Background(backgroundFlag)}
      {UI(UIFlag)}
    </Fragment>
  );
};

export default Page6;
