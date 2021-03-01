import { makeStyles } from "@material-ui/core";

const page3Styles = makeStyles({
  basechild: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "1"
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  border: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "8"
  },
  background_opacity: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "1",
    animation: "$background_opacity 4s forwards"
  },
  "@keyframes background_opacity": {
    "0%, 40%, 80%": { opacity: "1" },
    "100%": { opacity: "0.7" }
  },
  cloud: {
    position: "relative",
    zIndex: "1",
    width: "100%",
    marginTop: "3rem",
    opacity: "0.5",
    animation: "$cloud_moving 4s forwards"
  },
  "@keyframes cloud_moving": {
    "0%": {
      left: "-50%",
      marginTop: "3rem",
      opacity: "0.5"
    },
    "70%": {
      marginTop: "3rem",
      opacity: "1"
    },
    "100%": {
      left: "0%",
      marginTop: "3rem",
      opacity: "1"
    }
  },
  butterfly: {
    position: "relative",
    zIndex: "1",
    width: "10%",
    right: "100%",
    top: "30%",
    opacity: "1",
    animation: "$butterfly_moving 4s forwards"
  },
  "@keyframes butterfly_moving": {
    "0%": {
      right: "-100%",
      top: "30%",
      opacity: "1"
    },
    "60%": {
      right: "-50%",
      top: "50%",
      opacity: "1"
    },
    "100%": {
      right: "-5%",
      top: "10%",
      opacity: "0"
    }
  },
});

export default page3Styles;

// const useStyles = makeStyles({
//   transitionGroup: {
//     position: "relative",
//     width: props => props.width,
//     height: props => props.width,
//     background: "red",
//     animation: "$slideDown 5s infinite"
//   },
//   "@keyframes slideDown": {
//     from: { top: "0px" },
//     to: { top: "200px" }
//   }
// });

// function App() {
//   const props = { height: 50, width: 50 };
//   const classes = useStyles(props);
//   return (
//     <div className="App">
//       <div className={classes.transitionGroup}>我正在向下滑</div>
//     </div>
//   );
// }


// import React from "react";
// import ReactDOM from "react-dom";

// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import clsx from "clsx";

// const useStyles = makeStyles(theme => ({
//   animatedItem: {
//     animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
//   },
//   animatedItemExiting: {
//     animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
//     opacity: 0,
//     transform: "translateY(-200%)"
//   },
//   "@keyframes myEffect": {
//     "0%": {
//       opacity: 0,
//       transform: "translateY(-200%)"
//     },
//     "100%": {
//       opacity: 1,
//       transform: "translateY(0)"
//     }
//   },
//   "@keyframes myEffectExit": {
//     "0%": {
//       opacity: 1,
//       transform: "translateY(0)"
//     },
//     "100%": {
//       opacity: 0,
//       transform: "translateY(-200%)"
//     }
//   }
// }));