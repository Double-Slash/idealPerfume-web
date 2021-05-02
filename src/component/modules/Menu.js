import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { IconButton, makeStyles, Box } from "@material-ui/core";
import BGM from "../../music/bgm1.mp3";
import MusicOn from "@material-ui/icons/MusicNote";
import MusicOFF from "@material-ui/icons/MusicOff";

import { width } from "./Dimentions.js";

const Menu = () => {
  let [musicFlag, setMusicFlag] = useState(true);
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.menuContainer}>
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
      </Box>

      <ReactPlayer
        url={BGM} // Carried - Lauren Duski
        height={0}
        controls={false}
        loop={true}
        playing={musicFlag ? true : false}
      ></ReactPlayer>
    </Fragment>
  );
};

const useStyles = makeStyles({
  menuContainer: {
    display:'flex',
    flexDirection:'row-reverse',
    position: "absolute",
    width: width * 0.95,
    marginTop: "2%",
    top: 0,
    left: 0,
    marginLeft: "2%",
    marginRight: "2%",
    zIndex: 10,
  },
});

export default Menu;
