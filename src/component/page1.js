import React, { Fragment } from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import commonStyles from "./commonStyles"

import firstIcon from "../image/page1/icon1-1.png";
import secondIcon from "../image/page1/icon1-2.png";
import thirdIcon from "../image/page1/icon1-3.png";
import fourthIcon from "../image/page1/icon1-4.png";
import fifthIcon from "../image/page1/icon1-5.png";

const useStyles = makeStyles({
  upperButtonArea: {
    marginTop: "20%",
    display: "flex",
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 0,
  },
  lowerButtonArea: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 0,
  },
  button: {
    display: "inline",
    outline: "none"
  },
  buttonImg: {
    width: 90,
    height: 90
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: "15px",
    fontFamily: "Noto Sans KR, sans-serif !important",
  }
});

const Page1 = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span>누군가에게 비춰질</span>
            <br></br>
            <span>나의 </span>
            <span className={commonClasses.boldText}>첫인상</span>
            <span>은</span>
            <br></br>
            <span>어땠으면 하나요?</span>
          </Typography>

          <div className={classes.upperButtonArea}>
            <Button
              disableRipple="true"
              className={classes.button}
            >
              <Link to="/page2">
                <img
                  src={firstIcon}
                  alt="firstIcon"
                  className={classes.buttonImg}
                ></img>
              </Link>

              <Typography className={classes.buttonText}>
                깨끗하고 청순
          </Typography>
            </Button>

            <Button
              disableRipple="true"
              className={classes.button}
            >
              <Link to="/page2">
                <img
                  src={secondIcon}
                  alt="secondIcon"
                  className={classes.buttonImg}
                ></img>
              </Link>

              <Typography className={classes.buttonText}>
                진중하고 차분
          </Typography>
            </Button>

            <Button
              disableRipple="true"
              className={classes.button}
            >
              <Link to="/page2">
                <img
                  src={thirdIcon}
                  alt="thirdIcon"
                  className={classes.buttonImg}
                ></img>
              </Link>

              <Typography className={classes.buttonText}>
                고급스러운
          </Typography>
            </Button>
          </div>

          <div className={classes.lowerButtonArea}>
            <Button
              disableRipple="true"
              className={classes.button}
            >
              <Link to="/page2">
                <img
                  src={fourthIcon}
                  alt="fourthIcon"
                  className={classes.buttonImg}
                ></img>
              </Link>

              <Typography className={classes.buttonText}>
                사랑스러운
          </Typography>
            </Button>

            <Button
              disableRipple="true"
              className={classes.button}
            >
              <Link to="/page2">
                <img
                  src={fifthIcon}
                  alt="fifthIcon"
                  className={classes.buttonImg}
                ></img>
              </Link>

              <Typography className={classes.buttonText}>
                카리스마있는
          </Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page1;
