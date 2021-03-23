import React, { Fragment } from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import commonStyles from "./commonStyles";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../Redux/action";



const Page0_0 = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span className={commonClasses.boldText}>누구</span>
            <span>를 위한</span>
            <br></br>
            <span> 선물인가요?</span>
          </Typography>
          <div
            className={classes.buttonArea}
            onClick={() => {
              dispatch(handleNextPage("page0-1"));
            }}
          >
            <Button
              className={commonClasses.styledbutton}
              onClick={() => {
                dispatch(handleQuestionSelection("page0-0", 1));
              }}
            >
              <Typography className={commonClasses.buttonText}>
                나를 위한 선물
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => {
                dispatch(handleQuestionSelection("page0-0", 2));
              }}
            >
              <Typography className={commonClasses.buttonText}>
                타인을 위한 선물
              </Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

const useStyles = makeStyles({
  buttonArea: {
    marginTop: "80%",
    display: "block",
  },
});

export default Page0_0;
