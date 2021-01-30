import React from "react";
import { Fade } from "@material-ui/core";
import backgrounds from "./backgroundData";

const Background = (props) => {
  const currentPage = props.currentPage;
  console.log("현재 페이지", currentPage);

  //const location = useLocation(); // 현재 페이지의 라우터 위치

  const background = backgrounds.find((bg) => {
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
