import React from "react";
import styled from "styled-components";
import { DATA } from "../assets/Data";
import { Link } from "react-router-dom";

const Rank = () => {
  return (
    <RankOutContainer>
      <h2>박스오피스 순위</h2>
      <RankContainer>
        {DATA.map((movie) => (
          <MovieBox key={movie.rank} to={`/movie/${movie.rank}`}>
            <MovieImage src={movie.img} alt={movie.title} />
            <Ranking>{movie.rank}</Ranking>
            <Info>
              <Title>{movie.title} </Title>
              <P>
                <Span>{movie.year}</Span>
                <Span> · {movie.country}</Span>
              </P>
              <P>
                <Span2>예매율 {movie.percent}</Span2>
                <Span2> · 누적 관객 {movie.audience}명</Span2>
              </P>
            </Info>
          </MovieBox>
        ))}
      </RankContainer>
    </RankOutContainer>
  );
};

const RankOutContainer = styled.div`
  width: 80%;
  margin-top: 30px;
`;
const RankContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
`;
const MovieBox = styled(Link)`
  display: inline-block;
  margin-right: 20px;
  max-width: 240px;
  text-align: left;
  position: relative;
  text-decoration: none;
  color: #000;
`;

const Ranking = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 5px;
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Info = styled.div`
  margin: 0;
  padding: 0;
`;
const Title = styled.div`
  margin: 5px;
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: bold;
`;

const P = styled.p`
  margin: 0;
  margin-left: 5px;
`;
const Span = styled.span`
  font-size: 12px;
`;
const Span2 = styled.span`
  font-size: 10px;
  margin: 0;
  color: #999;
`;

export default Rank;
