import React, { useState, useEffect, Fragment } from "react";
import { Fade, Box, makeStyles } from "@material-ui/core";

import phoneAfter from "../../image/6/phoneAfter.png";
import LP from "../../image/8/LP.png";
import LPLine from "../../image/8/LPLine.png";

import "./page8.css";

const BackgroundBeforeChoice = ({ currentPage }) => {
  const classes = useStyles();

  switch (currentPage) {
    case "6":
      return (
        <Fade in={true} timeout={4000}>
          <img
            className={classes.imgDefault}
            src={phoneAfter}
            alt="phoneAfter"
          ></img>
        </Fade>
      );
    case "8":
      return (
        <Fade in={true} timeout={1000}>
          <Box className={classes.mainContainer}>
            <img className={classes.LPDefault} src={LP} alt="LP"></img>

            <Fade in={true} timeout={4000}>
              <img
                className={classes.LPDefault}
                style={{
                  animation: `spin 6s linear infinite`,
                }}
                src={LP}
                alt="LP"
              ></img>
            </Fade>

            <img className={classes.LPLine} src={LPLine} alt="LPLine"></img>
          </Box>
        </Fade>
      );
    default:
      return <Fragment></Fragment>;
  }
};

const useStyles = makeStyles({
  mainContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    top: 0,
    left: 0,
  },
  imgDefault: {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
  },
  LPDefault: {
    width: "120%",
    zIndex: -1,
    position: "absolute",
    top: "-20%",
    left: "-9%",
  },
  LPLine: {
    width: "60%",
    zIndex: -1,
    position: "absolute",
    top: "30%",
    left: "70%",
  },
});
export default BackgroundBeforeChoice;
