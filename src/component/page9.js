import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import commonStyles from "./commonStyles"

const Page9 = () => {
  const commonClasses = commonStyles();
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
            <Link
              to="/page8"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  1 ~ 2 시간
                </Typography>
              </Button>
            </Link>

            <Link
              to="/page8"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  3 ~ 5 시간
                </Typography>
              </Button>
            </Link>
            <Link
              to="/page8"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  5시간 이상
                </Typography>
              </Button>
            </Link>
            <Link
              to="/page8"
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  없음
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page9;
