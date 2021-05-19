import React, { Fragment } from "react";
import phone from "../image/web/phone.png";
import background from "../image/default/default.png";
import qrcode from "../image/web/qrcode.png";

import { Typography, Grid, makeStyles, Box } from "@material-ui/core";

const WebView = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <img
        className={classes.backgroundImage}
        src={background}
        alt={background}
      />
      <Grid className={classes.mainContainer} container>
        <Grid item xs={5} className={classes.leftGrid}>
          <img
            style={{
              width: "auto",
              height: "100%",
              overflow: "hidden",
            }}
            src={phone}
            alt="phone"
          ></img>
        </Grid>
        <Grid item xs={6} direction="column" className={classes.rightGrid}>
          <Box style={{ marginBottom: 50 }}>
            <Typography
              className={classes.textfont}
              style={{
                fontSize: "4vw",
                fontWeight: "bold",
                textShadow: "3px 2px 5px gray",
              }}
            >
              이상향 테스트
            </Typography>
            <Typography
              className={classes.textfont}
              style={{
                fontSize: "3vw",
                textShadow: "3px 2px 5px gray",
              }}
            >
              나에게 맞는 향수 찾기
            </Typography>
          </Box>
          <Box style={{ marginBottom: 10 }}>
            <img
              style={{ width: "auto", height: "15vw", borderRadius: "10px" }}
              src={qrcode}
              alt="qrImage"
            />
          </Box>

          <Box>
            <Typography
              className={classes.textfont}
              style={{
                fontSize: "1.5vw",
                fontWeight: "bold",
                textShadow: "1px 2px 5px gray",
              }}
            >
              휴대폰으로 QR코드를 스캔 후,<br></br>최적화된 모바일 환경에서
              이용하세요
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const useStyles = makeStyles({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  mainContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  leftGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  rightGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "80%",
  },
  textfont: {
    color: "white",
    fontFamily: "Noto Sans SC, Binggrae, sans-serif !important",
  },
});

export default WebView;
