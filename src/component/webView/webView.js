import React, { Fragment } from "react";
import phone from "../../image/web/phone.png";
import background from "../../image/default/default.png";
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
          <img style={{ width: "50%" }} src={phone} alt="휴대폰 화면"></img>
        </Grid>
        <Grid item xs={4} direction="column" className={classes.rightGrid}>
          <Box style={{ marginBottom: 50 }}>
            <Typography
              style={{
                fontSize: "4vw",
                color: "white",
                fontWeight: "bold",
                textShadow: "3px 2px 5px gray",
                fontFamily: "Noto Sans KR, sans-serif !important",

              }}
            >
              이상향 테스트
            </Typography>
            <Typography
              style={{
                fontSize: "3vw",
                color: "white",
                textShadow: "3px 2px 5px gray",
                fontFamily: "Noto Sans KR, sans-serif !important",
              }}
            >
              나에게 맞는 향수 찾기
            </Typography>
          </Box>
          <Box style={{ marginBottom: 10 }}>
            <img src="https://qrcodethumb-phinf.pstatic.net/20210305_244/1614935008131FllEu_PNG/0LjVD.png" />
          </Box>

          <Box>
            <Typography
              style={{
                fontSize: "1.5vw",
                color: "white",
                fontWeight: "bold",
                textShadow: "1px 2px 5px gray",
                fontFamily: "Noto Sans KR, sans-serif !important",
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
  },
  rightGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default WebView;
