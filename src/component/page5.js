import React, { Fragment } from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import commonStyles from "./commonStyles";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../redux/action";

import firstIcon from "../image/page5/icon5-1.png";
import secondIcon from "../image/page5/icon5-2.png";
import thirdIcon from "../image/page5/icon5-3.png";
import fourthIcon from "../image/page5/icon5-4.png";

function checkUser(resultNum) {
  switch (resultNum) {
    case 1: {
      return "나의 ";
    }
    case 2: {
      return "그 사람의";
    }
    default: {
      return "그 사람의";
    }
  }
}

const Page5 = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const reduxState = useSelector((state) => state);
  const toNum = reduxState.questionSelectionReducer.results[0].result; // 나, 상대 사용할때
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span>당신은 누군가에게 다음 중</span>
            <br></br>
            <span className={commonClasses.boldText}>어떤 사람</span>
            으로
            <br></br>
            <span>기억되고 싶나요?</span>
          </Typography>

          <div className={classes.upperButtonArea}>
            <Button
              disableRipple="true"
              className={classes.button}
              onClick={(e) => {
                dispatch(handleNextPage("page6"));
                dispatch(
                  handleQuestionSelection("page5", parseInt(e.target.alt))
                );
              }}
            >
              <img src={firstIcon} alt="1" className={classes.buttonImg}></img>

              <Typography className={classes.buttonText}>
                따뜻하고 부드러운
              </Typography>
            </Button>

            <Button
              disableRipple="true"
              className={classes.button}
              onClick={(e) => {
                dispatch(handleNextPage("page6"));
                dispatch(
                  handleQuestionSelection("page5", parseInt(e.target.alt))
                );
              }}
            >
              <img src={secondIcon} alt="2" className={classes.buttonImg}></img>

              <Typography className={classes.buttonText}>차분한</Typography>
            </Button>
          </div>

          <div className={classes.lowerButtonArea}>
            <Button
              disableRipple="true"
              className={classes.button}
              onClick={(e) => {
                dispatch(handleNextPage("page6"));
                dispatch(
                  handleQuestionSelection("page5", parseInt(e.target.alt))
                );
              }}
            >
              <img src={thirdIcon} alt="3" className={classes.buttonImg}></img>

              <Typography className={classes.buttonText}>싱그러운</Typography>
            </Button>

            <Button
              disableRipple="true"
              className={classes.button}
              onClick={(e) => {
                dispatch(handleNextPage("page6"));
                dispatch(
                  handleQuestionSelection("page5", parseInt(e.target.alt))
                );
              }}
            >
              <img src={fourthIcon} alt="4" className={classes.buttonImg}></img>

              <Typography className={classes.buttonText}>
                유니크하고 독창적인
              </Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

const useStyles = makeStyles({
  upperButtonArea: {
    marginTop: "20%",
    display: "flex",
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 0,
  },
  lowerButtonArea: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 0,
  },
  button: {
    display: "inline",
    outline: "none",
    width:'100%'
  },
  buttonImg: {
    width: 90,
    height: 90,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: "15px",
    fontFamily: "Noto Sans KR, sans-serif !important",
  },
});
export default Page5;
