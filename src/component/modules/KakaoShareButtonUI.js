import React, { useEffect } from "react";
import { Button } from "@material-ui/core";

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아서 렌더링 시작
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "이상향 테스트",
          description: "#이상향 테스트 #향수 #심리테스트",
          imageUrl: "IMAGE_URL", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "앱으로 보기",
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
    <Button id="kakao-link-btn">
      <img src="/icons/kakao.png" alt="kakao-share-icon" />
    </Button>
  );
};
export default KakaoShareButton;
