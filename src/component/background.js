import React from "react";
import { Fade } from "@material-ui/core";
import Backgrounds from "./backgroundData";

const Background = (props) => {
  const currentPage = props.currentPage;
  console.log("현재 페이지", currentPage);

  const background = Backgrounds.find((bg) => {
    if (bg.page === currentPage) return bg.page;
  });
  
  return (
    <Fade in={true} timeout={3000}>
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
