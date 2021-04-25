import { makeStyles } from "@material-ui/core";

const page3Styles = makeStyles({
  // 공통
  basechild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  border: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 3,
  },
  background_opacity: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    animation: "$background_opacity 4s forwards",
  },

  // Page3-2
  "@keyframes background_opacity": {
    "0%, 40%, 80%": { opacity: "1" },
    "100%": { opacity: "0.6" },
  },
  cloud: {
    position: "absolute",
    width: "100%",
    marginTop: "3rem",
    opacity: "0.5",
    animation: "$cloud_moving 4s forwards",
    zIndex: 2,
  },
  "@keyframes cloud_moving": {
    "0%": {
      left: "-50%",
      opacity: "0.5",
    },
    "70%": {
      opacity: "1",
    },
    "100%": {
      left: "0%",
      opacity: "1",
    },
  },
  butterfly: {
    position: "relative",
    zIndex: 1,
    width: "10%",
    right: "100%",
    top: "30%",
    opacity: "1",
    animation: "$butterfly_moving 4s forwards",
  },
  "@keyframes butterfly_moving": {
    "0%": {
      right: "-100%",
      top: "30%",
      opacity: "1",
    },
    "60%": {
      right: "-50%",
      top: "50%",
      opacity: "1",
    },
    "100%": {
      right: "-5%",
      top: "10%",
      opacity: "0",
    },
  },

  // Page3-3
  boat: {
    position: "relative",
    zIndex: 1,
    width: "20%",
    left: "-20%",
    marginTop: "70%",
    opacity: "0.5",
    animation: "$boat_moving 4s forwards",
  },
  "@keyframes boat_moving": {
    "0%": {
      left: "-20%",
      opacity: "0.5",
    },
    "40%": {
      left: "40%",
      opacity: "1",
    },
    "60%": {
      left: "10%",
      opacity: "1",
    },
    "100%": {
      left: "70%",
      opacity: "1",
    },
  },
  
  // Page3-4
  lightchild: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
  },
  albumchild: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 5,
  },
  lightimg: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 5,
  },
});

export default page3Styles;
