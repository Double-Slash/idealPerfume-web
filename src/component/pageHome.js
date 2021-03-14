import React from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import "../App.css";
import { useDispatch } from "react-redux";
import { handleNextPage } from "../redux/action";

const PageHome = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginTop: "100%",
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <Fade in={true} timeout={1000}>
        <Typography className="Text" style={{ fontSize: 30, color: "white" }}>
          <span>당신이 그리는</span>
          <br></br>
          <span style={{ marginTop: 5, fontSize: 40, fontWeight: "bold" }}>
            이상향 香
          </span>
          을<br></br>
          <span style={{ marginTop: 0 }}>찾아주는</span>
          <br></br>
          <span style={{ marginTop: 0 }}> 큐레이션 서비스</span>
          <br></br>
        </Typography>
      </Fade>

      <Button
        className="Button"
        disableRipple={true}
        style={{
          width: "100%",
          color: "white",
          marginTop: 50,
          outline: "none",
        }}
        onClick={() => {
          dispatch(handleNextPage("page0"));
        }}
      >
        <Fade in={true} timeout={7000}>
          <Typography
            className="Text"
            style={{
              fontSize: 25,
            }}
          >
            탭하여 테스트 시작하기
          </Typography>
        </Fade>
      </Button>
    </div>
  );
};

export default PageHome;
