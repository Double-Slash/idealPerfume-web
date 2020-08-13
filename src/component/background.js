import React from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import backgrounds from "./backgroundData";

const Background = () => {
  const location = useLocation();
  const background = backgrounds.find((bg) => bg.path === location.pathname);
  var isCompleted = false;

  if ("/static/media/bg0.e0d97582.png" === background.src) {
    isCompleted = true;
    console.log("true");
  } else {
    isCompleted = false;
    console.log("false");
  }

  const check = () => {
    if (isCompleted === true) {
      return (
        <img
          className="background"
          src={background.src}
          alt={background.path.slice(1)}
        />
      );
    } else {
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
          <img
            className="background"
            src={background.src}
            alt={background.path.slice(1)}
          />
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
};

export default Background;
