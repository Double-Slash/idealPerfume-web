import React from "react";
import { Fade } from "@material-ui/core";

const loadBackgroundImage = (currentPage) => {
  switch (currentPage) {
    case "pageHome":
      return {
        page: "pageHome",
        src: require("../../image/0/bg0.png"),
      };
    case "6":
      return {
        page: "6",
        src: require("../../image/6/phoneBefore.png"),
      };
    default:
      return {
        page: "default",
        src: require("../../image/default/default.png"),
      };
  }
};

const Background = (props) => {
  const currentPage = props.currentPage;

  const background = loadBackgroundImage(currentPage);

  return (
    <Fade in={true} timeout={2000}>
      <img
        style={{
          width: "100%",
          height: "100%",
          zIndex: -10,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        src={background.src}
        alt={background.page}
      />
    </Fade>
  );
};

export default Background;
