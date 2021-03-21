import React, { Fragment } from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../redux/action";

import frame from "../image/page4/frame.png";

import commonStyles from "./commonStyles";

function handleReduxState(dispatch, result) {
  dispatch(handleNextPage("page4-result"));
  dispatch(handleQuestionSelection("page4", result));
}

const Page4 = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <img className={commonClasses.img} src={frame} alt="frame"></img>

      <Fade in={true} timeout={3000}>
        <div className={classes.questionRoot}>
          <Typography className={commonClasses.questionArea}>
            <span  className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span>당신을 닮은</span>
            <br></br>
            <span className={commonClasses.boldText}>계절은 언제인가요?</span>
          </Typography>

          <div className={classes.buttonArea}>
            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, "spring")}
            >
              <Typography className={commonClasses.questionArea}>
                봄
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, "summer")}
            >
              <Typography className={commonClasses.questionArea}>
                여름
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, "autumn")}
            >
              <Typography className={commonClasses.questionArea}>
                가을
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, "winter")}
            >
              <Typography className={commonClasses.questionArea}>
                겨울
              </Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

const useStyles = makeStyles({
  questionRoot: {
    marginTop: "30%",
    marginLeft: 50,
    marginRight: 50,
  },
  buttonArea: {
    marginTop: "40%",
    marginLeft: 60,
    marginRight: 60,
  },
});

export default Page4;
