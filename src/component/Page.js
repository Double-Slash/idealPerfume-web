import React, { Fragment, useState, useEffect } from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../Redux/action";
import commonStyles from "./commonStyles";
import questionData from "../Data/question.json";

const Page = ({ page }) => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(page);
  console.log("현재 페이지", currentPage);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  
  const currentQuestion = questionData[currentPage].question; // string 형태
  const currentAnswer = questionData[currentPage].answer; // array 형태

  const createQuestionUI = () => {
    return (
      <Fade in={true} timeout={3000}>
        <Typography className={commonClasses.questionArea}>
          {currentQuestion}
        </Typography>
      </Fade>
    );
  };

  const createButtonUI = () => {
    return currentAnswer.map((answer, index) => (
      <Button
        className={commonClasses.styledbutton}
        onClick={() => {
          dispatch(handleNextPage("page1"));
          dispatch(handleQuestionSelection("page0", index + 1));
        }}
        key={index + 1}
      >
        <Typography className={commonClasses.buttonText}>{answer}</Typography>
      </Button>
    ));
  };

  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <div className={classes.QuestionArea}>{createQuestionUI()}</div>
          <div className={classes.buttonArea}>{createButtonUI()}</div>
        </div>
      </Fade>
    </Fragment>
  );
};

const useStyles = makeStyles({
  QuestionArea: {},
  buttonArea: {
    marginTop: "80%",
    display: "block",
  },
});

export default Page;
