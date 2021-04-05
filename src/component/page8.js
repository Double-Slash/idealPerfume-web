import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Button, Typography, Fade } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../Redux/action";
import commonStyles from "./commonStyles";

import LP from "../image/page8/LP.png";
import LPLine from "../image/page8/LPLine.png";

import "./page8.css";

const Background = (backgroundFlag) => {
  if (backgroundFlag === true) {
    return (
      <Fade in={true} timeout={1000}>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <img
            style={{
              animation: `spin 6s linear infinite`,
              width: "120%",
              zIndex: -1,
              position: "absolute",
              top: "-20%",
              left: "-9%",
            }}
            src={LP}
            alt="LP"
          ></img>
          <img
            style={{
              width: "60%",
              zIndex: -1,
              position: "absolute",
              top: "30%",
              left: "70%",
            }}
            src={LPLine}
            alt="LPLine"
          ></img>
        </div>
      </Fade>
    );
  } else {
    return (
      <Fade in={true} timeout={1000}>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <img
            style={{
              width: "120%",
              zIndex: -1,
              position: "absolute",
              top: "-20%",
              left: "-9%",
            }}
            src={LP}
            alt="LP"
          ></img>
          <img
            style={{
              width: "60%",
              zIndex: -1,
              position: "absolute",
              top: "30%",
              left: "70%",
            }}
            src={LPLine}
            alt="LPLine"
          ></img>
        </div>
      </Fade>
    );
  }
};

const UI = (UIFlag) => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  if (UIFlag === true) {
    return (
      <Fade in={true} timeout={5000}>
        <div className={classes.root}>
          <div className={classes.questionRoot}>
            <Typography className={commonClasses.questionArea}>
              <span className={commonClasses.boldText}>Q.</span>
              <br></br>
              <span className={commonClasses.boldText}>
                여러가지 생각에 잠긴 당신은
              </span>
              <br></br>
              <span className={commonClasses.boldText}>
                지금의 분위기를 더해줄 음악을
              </span>
              <br></br>
              <span>틀기로 합니다.</span>
            </Typography>
          </div>

          <div className={classes.buttonArea}>
            <Button
              className={commonClasses.styledbutton}
              onClick={() => {
                dispatch(handleQuestionSelection("page8", 1));
                dispatch(handleNextPage("page9"));
              }}
            >
              <Typography className={commonClasses.buttonText}>
                부드러운 클래식 피아노
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => {
                dispatch(handleQuestionSelection("page8", 2));
                dispatch(handleNextPage("page9"));
              }}
            >
              <Typography className={commonClasses.buttonText}>
                감각적이고 트렌디한 재즈
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => {
                dispatch(handleQuestionSelection("page8", 3));
                dispatch(handleNextPage("page9"));
              }}
            >
              <Typography className={commonClasses.buttonText}>
                신나는 디스코
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => {
                dispatch(handleQuestionSelection("page8", 4));
                dispatch(handleNextPage("page9"));
              }}
            >
              <Typography className={commonClasses.buttonText}>
                블루지한 인디음악
              </Typography>
            </Button>
          </div>
        </div>
      </Fade>
    );
  }
};

const Page8 = ({ handleButtonClick, reduxState }) => {
  const [backgroundFlag, setbackgroundFlag] = useState(false);
  const [UIFlag, setUIFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setbackgroundFlag(true);
    }, 2500);
    setTimeout(() => {
      setUIFlag(true);
    }, 3500);
  }, []);

  return (
    <Fragment>
      {Background(backgroundFlag)}
      {UI(UIFlag)}
    </Fragment>
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: "40%",
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
    marginTop: "30%",
    display: "block",
  },
});

export default Page8;
