import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Rank = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nowMovies, setNowMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [minimumDate, setMinimumDate] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=ko-KR",
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };
    const fetchNowMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
          }
        );
        const data = await response.json();
        setNowMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };
    const fetchUpcoming = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming",
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
          }
        );
        const data = await response.json();
        const minimum = data.dates.minimum;
        setMinimumDate(minimum);
        setUpcoming(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    fetchMovies();
    fetchNowMovies();
    fetchUpcoming();
  }, []);

  return (
    <RankOutContainer>
      {loading ? (
        <LoadingMessage>로딩중...</LoadingMessage>
      ) : (
        <>
          <RankContainer>
            <H2>박스오피스 순위</H2>
            {movies.map((movie) => (
              <MovieBox key={movie.id} to={`/movie/${movie.id}`}>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                  alt={movie.title}
                />
                <Ranking>{movie.rank}</Ranking>
                <div>
                  <Title>{movie.title} </Title>
                  <P>
                    <Span>{movie.release_date.slice(0, 4)}</Span>
                    <Span> · {movie.country}</Span>
                  </P>
                  <P>
                    <SpanUnder>평점 {movie.vote_average}</SpanUnder>
                    <SpanUnder> 퍙가수 {movie.popularity}명</SpanUnder>
                  </P>
                </div>
              </MovieBox>
            ))}
            <MovieBox />
          </RankContainer>
          <RankContainer>
            <H2>상영작</H2>
            {nowMovies.map((movie) => (
              <MovieBox key={movie.id} to={`/movie/${movie.id}`}>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                  alt={movie.title}
                />
                <Ranking>{movie.rank}</Ranking>
                <div>
                  <Title>{movie.title} </Title>
                  <P>
                    <Span>{movie.release_date.slice(0, 4)}</Span>
                    <Span> · {movie.country}</Span>
                  </P>
                  <P>
                    <SpanUnder>평점 {movie.vote_average}</SpanUnder>
                    <SpanUnder> 퍙가수 {movie.popularity}명</SpanUnder>
                  </P>
                </div>
              </MovieBox>
            ))}
            <MovieBox />
          </RankContainer>
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
        </>
      )}
    </RankOutContainer>
  );
};

const RankOutContainer = styled.div`
  width: 80%;
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
const SpanUnder = styled.span`
  font-size: 10px;
  margin: 0;
  color: #999;
`;

const LoadingMessage = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #555;
  text-align: center;
  margin-top: 50px;
`;

export default Rank;
