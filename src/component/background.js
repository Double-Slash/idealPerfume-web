import React from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import backgrounds from "./backgroundData";

const Background = () => {
  const location = useLocation(); // 현재 페이지의 라우터 위치
  const background = backgrounds.find((bg) => bg.path === location.pathname);

  console.log(background.path);

  const checkResource = () => {
    if (background.src != null) {
      return (
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
          alt={background.path.slice(1)}
        />
      );
    }
  };

  return (
    <React.Fragment>
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={2000} key={background.path}>
          {checkResource}
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
};

export default Background;
