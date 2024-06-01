import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Upcoming = () => {
  const [loading, setLoading] = useState(true);
  const [upcoming, setUpcoming] = useState([]);
  const [minimumDate, setMinimumDate] = useState("");

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming",
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
          }
        );
        const data = response.data;
        const minimum = data.dates.minimum;
        setMinimumDate(minimum);
        setUpcoming(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };
    fetchUpcoming();
  });
  return (
    <RankOutContainer>
      {loading ? (
        <LoadingMessage>로딩중...</LoadingMessage>
      ) : (
        <RankContainer>
          <H2>왓챠 공개 예정작</H2>
          {upcoming.map((movie) => (
            <MovieBox key={movie.id} to={`/movie/${movie.id}`}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                alt={movie.title}
              />
              <div>
                <Title>{movie.title} </Title>
                <P>
                  <Span> 왓챠 {minimumDate}</Span>
                </P>
              </div>
            </MovieBox>
          ))}
          <MovieBox />
        </RankContainer>
      )}
    </RankOutContainer>
  );
};
const RankOutContainer = styled.div`
  width: 80%;
`;
const LoadingMessage = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #555;
  text-align: center;
  margin-top: 50px;
`;
const H2 = styled.h2`
  margin-top: 40px;
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

const MovieImage = styled.img`
  width: 100%;
  border-radius: 5px;
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
export default Upcoming;
