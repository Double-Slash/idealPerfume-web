import React, { Fragment } from "react";
import phone from "../../image/web/phone.png";
import qrcode from "../../image/qrcode_global.svg";
import background from "../../image/page1/bg1.png";
import {
  View,
  Container,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";

const App = () => {
  const classes = useStyles();

  console.log("webView 렌더링")
  return (
    <Fragment>
      <img
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
          position: "absolute",
        }}
        src={background}
        alt={background}
      />
      <Grid
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
        container
      >
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img style={{ width: "50%" }} src={phone} alt="휴대폰 화면"></img>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "60%",
          }}
          item
          xs={5}
          direction="column"
        >
          <div style={{marginBottom:30}}>
            <Typography
              style={{
                fontSize: "6vh",
                fontWeight: "bold",
                color: "white",
                textShadow: "6px 2px 2px gray",
              }}
            >
              이상향 테스트
            </Typography>
            <Typography
              style={{
                fontSize: "4vh",
                fontWeight: "bold",
                color: "white",
                textShadow: "6px 2px 2px gray",
              }}
            >
              나에게 맞는 향수 찾기
            </Typography>
          </div>

          <div>
            <a href="http://m.site.naver.com/0LjVD">
              <img src="https://qrcodethumb-phinf.pstatic.net/20210305_244/1614935008131FllEu_PNG/0LjVD.png" />
            </a>

            <Typography
              style={{
                fontSize: "2vh",
                fontWeight: "bold",
                color: "white",
                textShadow: "2px 2px 2px gray",

              }}
            >
              휴대폰으로 QR코드를 스캔 후, 최적화된 모바일 환경에서 이용하세요
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: "50%",
    marginLeft: 20,
    marginRight: 20,
    zIndex: 6,
    position: "absolute",
  },
  questionRoot: {
    marginLeft: 20,
    marginRight: 20,
  },
  buttonArea: {
    marginTop: "80%",
    display: "block",
  },
});

export default App;
