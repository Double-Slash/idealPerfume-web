import React from "react";
import phone from "../image/phone_ko.png";
import qrcode from "../image/qrcode_global.svg";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../webView.css";

const App = () => {
  return (
    <Container className="App" fluid>
      <Row>
        <Col sm className="PhoneImg_col">
          <img className="PhoneImg" src={phone} alt="휴대폰 화면"></img>
        </Col>
        <Col sm className="Explanation_col">
          <Row className="Title_row">
            <Col>
              <p className="Title">이상향 테스트</p>
            </Col>
          </Row>
          <Row className="Content_row">
            <Col>
              <p className="Content">나에게 맞는 향수 찾기</p>
            </Col>
          </Row>
          <Row className="Qr_row">
            <Container className="Qr_container">
              <Row>
                <Col>
                  <img src={qrcode} alt="Qr코드" className="QrPicture"></img>
                </Col>
                <Col>
                  <p className="QrExplanation">
                    휴대폰으로 QR코드를 스캔 후 최적화된 모바일 환경에서 이용
                    가능
                  </p>
                </Col>
              </Row>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
