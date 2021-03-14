import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { useDispatch } from "react-redux";
import commonStyles from "./commonStyles";
import { handleNextPage, handleQuestionSelection } from "../redux/action";

function handleReduxState(dispatch, result) {
  dispatch(handleNextPage("pageResult"));
  dispatch(handleQuestionSelection("page9", result));
}

const Page9 = () => {
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span>원하는</span>
            <br></br>
            <span className={commonClasses.boldText}> 향수의 지속 시간</span>
            <span>이 있나요?</span>
          </Typography>
          <div className={commonClasses.buttonArea}>
            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 1)}
            >
              <Typography className={commonClasses.buttonText}>
                1 ~ 2 시간
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 2)}
            >
              <Typography className={commonClasses.buttonText}>
                3 ~ 5 시간
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 3)}
            >
              <Typography className={commonClasses.buttonText}>
                5시간 이상
              </Typography>
            </Button>

            <Button className={commonClasses.styledbutton}>
              <Typography className={commonClasses.buttonText}>없음</Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page9;
