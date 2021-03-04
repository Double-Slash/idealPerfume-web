import React from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../redux/action";
import commonStyles from "./commonStyles";

function handleReduxState(dispatch, result) {
  dispatch(handleNextPage("page7-result"));
  dispatch(handleQuestionSelection("page7", result));
}

const Page7 = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  return (
    <Fade in={true} timeout={3000}>
      <div className={classes.root}>
        <div className={classes.questionRoot}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span className={commonClasses.boldText}>하루 중</span>
            <br></br>
            <span className={commonClasses.boldText}>당신이 가장 선호하는</span>
            <br></br>
            <span>시간대는 언제인가요?</span>
          </Typography>
        </div>

        <div className={classes.buttonArea}>
          <Button
            className={commonClasses.styledbutton}
            onClick={() => handleReduxState(dispatch, "dawn")}
          >
            <Typography className={commonClasses.buttonText}>
              새벽 아침 산책길
            </Typography>
          </Button>

          <Button
            className={commonClasses.styledbutton}
            onClick={() => handleReduxState(dispatch, "day")}
          >
            <Typography className={commonClasses.buttonText}>
              햇빛이 따사로운 정오
            </Typography>
          </Button>

          <Button
            className={commonClasses.styledbutton}
            onClick={() => handleReduxState(dispatch, "sunset")}
          >
            <Typography className={commonClasses.buttonText}>
              노을이 지는 저녁무렵
            </Typography>
          </Button>

          <Button
            className={commonClasses.styledbutton}
            onClick={() => handleReduxState(dispatch, "night")}
          >
            <Typography className={commonClasses.buttonText}>
              센치해지는 늦은 밤
            </Typography>
          </Button>
        </div>
      </div>
    </Fade>
  );
};

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

export default Page7;
