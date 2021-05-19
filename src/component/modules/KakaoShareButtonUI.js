import React, { useEffect } from "react";
import { Button, Typography } from "@material-ui/core";

import kakaoLogo from "../../image/kakao.png";

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.createDefaultButton({
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "이상향 테스트 / 향수 심리테스트",
          description: "심리테스트를 통해 당신만의 향수를 찾아보세요. 😊",
          imageUrl: "https://i.imgur.com/TQewalj.png",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "테스트 시작하기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <Button
      id="kakao-link-btn"
      style={{
        backgroundColor: "#f6b93b",
        color: "white",
        fontWeight: "bold",
        width: "100%",
        height: "80%",
        borderRadius: 10,
        boxShadow: "0px 5px 25px rgba(1,1,1,0.2)",
      }}
    >
      <img
        src={kakaoLogo}
        alt={"kakaologo"}
        style={{ width: "10%", height: "auto", marginRight: "10px" }}
      ></img>
      <Typography
        style={{
          fontFamily: "Binggrae, sans-serif !important",
        }}
      >
        테스트 공유하기
      </Typography>
    </Button>
  );
};
export default KakaoShareButton;
