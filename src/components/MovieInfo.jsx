import React from 'react';
import Movieimg from '../assets/image/movieBack.jpeg';
import styled from 'styled-components';
import { DATA } from '../assets/Data'; 
import { useParams } from 'react-router-dom';
import StarRating from './StarRating2';
import PeopleDiv from './PeopleDiv';
import { FiPlus } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEllipsis } from 'react-icons/ai';

const MovieInfo = () => {
  const { rank } = useParams();
  const movieData = DATA[rank - 1]; 
  return (
    <Container>
      <BackgroundImg src={movieData.B}/>
      <Info>
        <h1>{movieData.title}</h1>
        <p>
        {movieData.title} <br />
        {movieData.year} • {movieData.country}<br />
        예매 순위 {movieData.rank}위 ({movieData.percent}) • 누적관객 {movieData.audience}명
        </p>
      </Info>
      <MovieDetailBox>
        <MovieDetail>
          <Left>
            <MovieImg src={movieData.img}  alt="" />
          </Left>
          <Right>
            <RightHeader>
              <Rating>
                <StarRating />
              </Rating>
              <AvgRating>
                <p style={{ color: 'gray', fontSize: '40px', margin: '0 5px' }} >{movieData.average}</p>
                <p style={{margin: '0', fontSize: '13px', color:'gray'}}> 평균 별점({movieData.audience}명)</p>
              </AvgRating>
              <ButtonList>
                <Div>
                  <FiPlus size={34} />
                  <p style={{fontSize: '13px', color:'gray'}}>보고싶어요</p>
                </Div>
                <Div>
                  <RiPencilFill size={34} />
                  <p style={{fontSize: '13px', color:'gray'}}>코멘트</p>
                </Div>
                <Div>
                  <AiOutlineEye size={34} />
                  <p style={{fontSize: '13px', color:'gray'}}>보는중</p>
                </Div>
                <Div>
                  <AiOutlineEllipsis size={34} />
                  <p style={{fontSize: '13px', color:'gray'}}>더보기</p>
                </Div>
              </ButtonList>
            </RightHeader>
            <hr />
            <Content>
              {movieData.content}
            </Content>
          </Right>
        </MovieDetail>
      </MovieDetailBox>
      <OtherDetailBox>
        <People>
          <h2>출연/제작</h2>
          <PeopleDiv/>
        </People>

        <Gallery>
          <h2>갤러리</h2>
          <GalleryItem>
            <img src={Movieimg} alt="" style={{width:'80%', marginRight:'13px'}}/>
            <img src={Movieimg} alt="" style={{width:'80%', marginRight:'13px'}}/>
            <img src={Movieimg} alt="" style={{width:'80%', marginRight:'13px'}}/>
          </GalleryItem>
        </Gallery>
      </OtherDetailBox>
    </Container>
  );
};

const Container = styled.div`
  
`
const BackgroundImg = styled.img`
width:100vw;
height:700px;
`
const Info = styled.div`
  margin:auto;
  position:absolute;
  bottom:100px;
  left: 90px;
  color:#fff;
`
const MovieDetailBox = styled.div`
  background-color: #efefef;
`
const MovieDetail = styled.div`
  width:87%;
  margin:auto;
  display: flex;
  padding:30px;
`
const Left = styled.div`
  float: left;
`
const Right = styled.div`
  width:100%;
  float: right;
  margin-left: 30px;
`
const MovieImg = styled.img`
  width:260px;
  border: 1px solid #c2c2c2;
`
const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
const Rating = styled.div`
  font-size:40px;
  color:#999;
`
const AvgRating = styled.div`
  text-align: center;
`
const ButtonList = styled.div`
  display: flex;
  justify-content: space-around;
  color:#575757;
  align-items: center;
  cursor: pointer;
`
const Div = styled.div`
  margin:0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Content = styled.div`
  color:#575757;
  margin: 20px 0;
`
const OtherDetailBox= styled.div`
  width:87%;
  margin:auto;
  margin-top: 50px;
`
const People = styled.div`
  
`
const Gallery= styled.div`
margin-top: 40px;
`
const GalleryItem = styled.div`
  overflow: scroll;
  scrollbar-width: none;
  display: flex;
`
export default MovieInfo;