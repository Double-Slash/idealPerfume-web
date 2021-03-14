import React from "react";
import { Fade } from "react-animation-components";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../redux/action";

import commonStyles from "./commonStyles"

const Page3 = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Fade in={true} timeout={4000}>
        <div className={classes.questionRoot}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span>당신은 </span>
            <span className={commonClasses.boldText}>이 액자를 </span>
            <br></br>
            <span>어디에 두시나요?</span>
          </Typography>
        </div>

        <div className={classes.buttonArea}>
          <Button className={commonClasses.styledbutton}
            onClick={() => {
              dispatch(handleNextPage("page3-result"));
              dispatch(handleQuestionSelection("page3", 1));
            }}
          >
            <Typography className={commonClasses.buttonText}>매일 매일 볼 수 있는 탁자</Typography>
          </Button>

          <Button className={commonClasses.styledbutton}
            onClick={() => {
              dispatch(handleNextPage("page3-result"));
              dispatch(handleQuestionSelection("page3", 2));
            }}
          >
            <Typography className={commonClasses.buttonText}>어쩌다 한 번 꺼내 볼 수 있는 서랍 속</Typography>
          </Button>
        </div>
      </Fade>
    </div>
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
    marginTop: "80%",
    display: "block",
  },
});

export default Page3;
