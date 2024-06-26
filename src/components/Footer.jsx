import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        지금까지 <Star>★ 129,312,381,209개의 평가가 </Star> 쌓였어요.
      </p>
      <Contain>
        <p>서비스 이용약관 | 개인정보 처리방침 | 회사 안내</p>
        <p>
          고객센터 | <a href="mailto:">cs@watchapedia.co.kr</a>,
          <a href="tel:02-515-9985">02-515-9985</a> <br />
          제휴 및 대외 협력 |
          <a href="https://watcha.team/contact">https://watcha.team/contact</a>
          <br />
          주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩
          3층 <br />
          사업자 등록 번호 211-88-66013
        </p>
      </Contain>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

const Star = styled.span`
  color: red;
`;
const Contain = styled.div`
  background-color: rgb(0, 0, 10);
  height: 300px;
  font-size: 10px;
  text-align: left;
  padding-left: 150px;
`;
export default Footer;
