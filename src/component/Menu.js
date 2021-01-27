import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { IconButton } from "@material-ui/core";
import BGM from "../music/bgm1.mp3";
import MusicOn from "@material-ui/icons/MusicNote";
import MusicOFF from "@material-ui/icons/MusicOff";
import Back from "@material-ui/icons/ArrowBackIos";

// 이전 페이지로
function goBack() {
  window.history.back();
}

const Menu = () => {
  let [musicFlag, setMusicFlag] = useState(false);

  return (
    <Fragment>
      <div
        style={{
          position: "absolute",
          width: `${window.screen.width * 0.95}px`,
          marginTop: "5%",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <IconButton
          color="inherit"
          aria-label="back"
          onClick={() => {
            goBack();
          }}
        >
          <Back fontSize="large" style={{ fill: "white" }}></Back>
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="musicOn"
          onClick={() => {
            if (musicFlag === false) {
              setMusicFlag(true);
            } else {
              setMusicFlag(false);
            }
          }}
        >
          {musicFlag ? (
            <MusicOn fontSize="large" style={{ fill: "white" }}></MusicOn>
          ) : (
            <MusicOFF fontSize="large" style={{ fill: "white" }}></MusicOFF>
          )}
        </IconButton>
      </div>

      <ReactPlayer
        url={BGM} // Carried - Lauren Duski
        width="100%"
        height="100px"
        controls={false}
        loop={true}
        playing={musicFlag ? true : false}
      ></ReactPlayer>
    </Fragment>
  );
};

export default Menu;
