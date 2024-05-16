import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import Banner from '../components/Banner';
import Comment from '../components/Comment';
import Rank from '../components/Rank';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Container>
      <Banner/>
      <Comment/>
      <Rank/>
      <Rank/>
      <Header/>
      {/* 모달창 맨위보내려면 rank보다 아래에 렌더링.. */}
      <Footer/>
    </Container>
  );
};

const Container = styled.div`
// background-color:gray;
// width: 80%;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
padding:0;
`
export default Home;