import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import commonStyles from "./commonStyles";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../Redux/action";

function handleReduxState(dispatch, result) {
  dispatch(handleNextPage("page1"));
  dispatch(handleQuestionSelection("page0", result));
}

const Page0_1 = () => {
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span>당신의</span>
            <span className={commonClasses.boldText}> 나이대는?</span>
          </Typography>
          <div className={commonClasses.buttonArea}>
            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 1)}
            >
              <Typography className={commonClasses.buttonText}>10대</Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 2)}
            >
              <Typography className={commonClasses.buttonText}>20대</Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 3)}
            >
              <Typography className={commonClasses.buttonText}>30대</Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 4)}
            >
              <Typography className={commonClasses.buttonText}>40대</Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 5)}
            >
              <Typography className={commonClasses.buttonText}>50대</Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page0_1;
