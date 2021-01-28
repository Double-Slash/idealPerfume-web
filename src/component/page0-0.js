import React, { Fragment } from "react";
import { Button, Typography, Fade, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import commonStyles from "./commonStyles"

const useStyles = makeStyles({
  buttonArea: {
    marginTop: "80%",
    display: "block",
  },
});

const Page0_0 = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div className={commonClasses.root}>
          <Typography className={commonClasses.questionArea}>
            <span className={commonClasses.boldText}>Q.</span>
            <br></br>
            <span className={commonClasses.boldText}>누구</span>
            <sapn>를 위한</sapn>
            <br></br>
            <span> 선물인가요?</span>
          </Typography>
          <div className={classes.buttonArea}>
            <Link
              to={{
                pathname: "/page0-1",
                state: { user: "me" },
              }}
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  나를 위한 선물
                </Typography>
              </Button>
            </Link>

            <Link
              to={{
                pathname: "/page0-1",
                state: { user: "you" },
              }}
              className={commonClasses.link}
            >
              <Button className={commonClasses.styledbutton}>
                <Typography className={commonClasses.buttonText}>
                  타인을 위한 선물
                  </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page0_0;
