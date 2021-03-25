import React from "react";
import { Fade } from "@material-ui/core";
import Backgrounds from "./BackgroundData";

const Background = (props) => {
  const currentPage = props.currentPage;

  const background = Backgrounds.find((bg) => {
    if (bg.page === currentPage) return bg.page;
  });
  
  return (
    <Fade in={true} timeout={1000}>
      <img
        style={{
          width: "100%",
          height: "100%",
          zIndex: -1,
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
