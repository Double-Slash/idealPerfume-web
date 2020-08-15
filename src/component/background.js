import React from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import backgrounds from "./backgroundData";

const Background = () => {
  const location = useLocation();
  const background = backgrounds.find((bg) => bg.path === location.pathname);

  const checkResource = () => {
    if (background.src != null) {
      return (
        <img
          className="background"
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
