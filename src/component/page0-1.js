import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import commonStyles from "./commonStyles"


function checkUser() {
  var user = window.history.state.state.user;
  console.log("user = " + user);
  switch (user) {
    case "me": {
      return "당신의";
    }
    case "you": {
      return "그 사람의";
    }
    default: {
      return "그 사람의";
    }
  }
}

const Page0_1 = () => {
  const commonClasses = commonStyles();
  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span>{checkUser()}</span>
            <span className={commonClasses.boldText}> 나이대는?</span>
          </Typography>
          <div className={commonClasses.buttonArea}>
            <Link
              to="/page1"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  10대
              </Typography>
              </Button>
            </Link>

            <Link
              to="/page1"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  20대
              </Typography>
              </Button>
            </Link>
            <Link
              to="/page1"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  30대
              </Typography>
              </Button>
            </Link>
            <Link
              to="/page1"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  40대
              </Typography>
              </Button>
            </Link>
            <Link
              to="/page1"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  50대
              </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page0_1;
