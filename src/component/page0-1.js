import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import commonStyles from "./commonStyles";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../redux/action";

function checkUser(resultNum) {

  switch (resultNum) {
    case 1: {
      return "당신의";
    }
    case 2: {
      return "그 사람의";
    }
    default: {
      return "그 사람의";
    }
  }
}

const Page0_1 = () => {
  const commonClasses = commonStyles();
  const reduxState = useSelector((state) => state);

  const toNum = reduxState.questionSelectionReducer.results[0].result;
  const dispatch = useDispatch();
  
  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span>{checkUser(toNum)}</span>
            <span className={commonClasses.boldText}> 나이대는?</span>
          </Typography>
          <div className={commonClasses.buttonArea}
            onClick={() => {
              dispatch(handleNextPage("page1"));
              dispatch(handleQuestionSelection("page0-1", toNum));
            }}
          >
            <Button className={commonClasses.styledbutton}>
              <Typography className={commonClasses.buttonText}>10대</Typography>
            </Button>

            <Button className={commonClasses.styledbutton}>
              <Typography className={commonClasses.buttonText}>20대</Typography>
            </Button>

            <Button className={commonClasses.styledbutton}>
              <Typography className={commonClasses.buttonText}>30대</Typography>
            </Button>

            <Button className={commonClasses.styledbutton}>
              <Typography className={commonClasses.buttonText}>40대</Typography>
            </Button>

            <Button className={commonClasses.styledbutton}>
              <Typography className={commonClasses.buttonText}>50대</Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page0_1;
