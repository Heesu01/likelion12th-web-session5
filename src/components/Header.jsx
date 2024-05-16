import React, { useState } from 'react';import styled from 'styled-components';
import logo from '../assets/image/icon_logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/Modal';
import kakao from '../assets/image/icon_kakao.png';
import google from '../assets/image/icon_google.png';
import twitter from '../assets/image/icon_twitter.png';
import line from '../assets/image/icon_line.png';
import { Link } from "react-router-dom";

const Header = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const openModal = () => {
    setLoginModalOpen(true);
  };

  const closeModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <HeaderContainer>
      <Link to ="/">
        <Logo src={logo}></Logo>
      </Link>
      <Menu>
        <MenuItem>영화</MenuItem>
        <MenuItem>시리즈</MenuItem>
        <MenuItem>책</MenuItem>
        <MenuItem>웹툰</MenuItem>
      </Menu>
      <SearchLoginContainer>
        <SearchInput type="text" placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요. "/>
        {/* <FontAwesomeIcon icon={faSearch} /> */}
        <Login onClick={openModal}>로그인</Login>
        <Modal open={loginModalOpen} close={closeModal}>
          <Container>
            <Imglogo src={logo}/>
            <h4>로그인</h4>
            <Input type="text" placeholder="이메일"/>
            <Input type="Password" placeholder="비밀번호" />
            <Button>로그인</Button>
            <P1>비밀번호를 잊어버리셨나요?</P1>
            <P2>계정이 없으신가요? <Span>회원가입</Span></P2>
            <Line>
              <Br></Br><P3>OR</P3><Br></Br>
            </Line>
            <div className="icon">
              <Img src={kakao} alt="" />
              <Img src={google} alt="" />
              <Img src={twitter} alt="" />
              <Img src={line} alt="" />
            </div>
            <Box>
              <p>TIP.왓챠 계정이 있으신가요? 왓챠의 왓챠피디아는 같은 계정을 사용해요.</p>
            </Box>
          </Container>
        </Modal>
        <Join>회원가입</Join>
      </SearchLoginContainer>
    </HeaderContainer>
  );
}


const HeaderContainer = styled.header`
  width:100%;
  height:25px;
  display: flex;
  align-items: center;
  padding: 20px;
  // background-color: gray;
  color: #000;
  border-bottom: 1px solid #ddd;
  position:fixed;
  background-color: #fff;
`;

const Logo = styled.img`
  width:140px;
  margin: 10px;
  margin-left: 60px;
`;

const Menu = styled.nav`
  margin-left: 20px;
  display: flex;
`;

const MenuItem = styled.div`
  margin-right: 25px;
  font-size: 14px;
  cursor: pointer;
`;

const SearchLoginContainer = styled.div`
  display: flex;
  margin-left:auto;
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  width:300px;
  border:none;
  border-radius:4px;
  background-color: #eee;
`;

const Login = styled.button`
  padding: 8px 15px;
  color: #999;
  background-color:#fff;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Join = styled.button`
  margin-left:5px;
  padding: 8px 11px;
  color: #000;
  background-color: #fff;
  font-weight: 700;
  border: 1px solid #A9A9A9;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 60px;
`



// 로그인 모달

const Container = styled.div`
width: 350px;
height: 630px;
border-radius:8px;
display: flex;
flex-direction: column;
align-items: center;
z-index: 9999;
`;

const Imglogo = styled.img`
margin-top:20px;
width: 60%;
`
const Input = styled.input`
width:270px;
height: 35px;
margin: 5px;
border:none;
border-radius:5px;
background-color:#eee;
font-weight:500;
`
const Button = styled.button`
width: 275px;
height: 38px;
margin-top: 10px;
background-color:#ff355a;
color: #fff;
border:none;
border-radius:5px;
`
const P1 = styled.p`
font-size:13px;
color: #ff355a;
margin-top:20px;
`
const P2 = styled.p`
font-size:13px;
margin-top:0px;
color:gray;
`
const Span = styled.span`
color:#ff355a;
`
const Line = styled.div`
display:flex;
margin:10px;
`
const Br = styled.div`
width:100px;
height: 0px;
border: 1px solid #999;
margin:10px;
`
const P3 = styled.p`
margin:0;
color:gray;
font-size:13px;
`
const Img = styled.img`
width:50px;
height:auto;
margin:7px
`
const Box = styled.div`
margin: 30px;
padding:7px;
padding-top: 2px;
width: 300px;
height: 50px;
background-color: #eee;
border-radius:5px;
font-size:13px;
color: #999;
text-align:center;
`



export default Header;