import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating2";
import { FiPlus } from "react-icons/fi";
import { RiPencilFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEllipsis } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieInfo = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendaions, setRecommendaions] = useState([]);
  const [genres, setGenres] = useState([]);
  const [production_companies, setProduction_companies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
          }
        );
        const data = await response.json();
        setMovieDetails(data);
        setLoading(false);
        if (data.genres) {
          const genreNames = data.genres.map((genre) => genre.name);
          setGenres(genreNames);
        }
        if (data.production_companies) {
          const companies = data.production_companies.map((company) => ({
            name: company.name,
            logoPath: company.logo_path,
          }));
          setProduction_companies(companies);
        }
      } catch (error) {
        console.error("Failed to fetch movie details", error);
      }
    };

    const fetchSimilarMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?language=ko-KR`,
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
          }
        );
        const data = await response.json();
        setSimilarMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch similar movies", error);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?language=ko-KR`,
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
            },
          }
        );
        const data = await response.json();
        setRecommendaions(data.results);
      } catch (error) {
        console.error("Failed to fetch similar movies", error);
      }
    };

    fetchMovieDetails();
    fetchSimilarMovies();
    fetchRecommendations();
  }, [id]);

  const getRating = (adult) => {
    return adult ? "청불" : "15세";
  };

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}시간 ${minutes}분`;
  };

  return (
    <Container>
      <div>
        {loading ? (
          <LoadingMessage>로딩중...</LoadingMessage>
        ) : (
          <>
            <BackgroundImg
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
            />
            <Info>
              <h1>{movieDetails.title}</h1>
              <p>
                {movieDetails.original_title} <br />
                {movieDetails.release_date.slice(0, 4)} •
                {genres.map((genre, index) => (
                  <span key={index}>{genre} </span>
                ))}
                • {movieDetails.origin_country}
                <br />
                {formatRuntime(movieDetails.runtime)} •
                {getRating(movieDetails.adult)} <br />
                {/* 예매 순위 {movieDetails.rank}위 ({movieDetails.percent}) •
                누적관객 {movieDetails.audience}명 */}
              </p>
            </Info>

            <MovieDetailBox>
              <MovieDetail>
                <Left>
                  <MovieImg
                    src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                  />
                </Left>
                <Right>
                  <RightHeader>
                    <Rating>
                      <StarRating />
                    </Rating>
                    <AvgRating>
                      <p
                        style={{
                          color: "gray",
                          fontSize: "40px",
                          margin: "0 5px",
                        }}
                      >
                        {movieDetails.vote_average}
                      </p>
                      <p
                        style={{ margin: "0", fontSize: "13px", color: "gray" }}
                      >
                        {" "}
                        평균 별점({movieDetails.vote_count}명)
                      </p>
                    </AvgRating>
                    <ButtonList>
                      <Div>
                        <FiPlus size={34} />
                        <P>보고싶어요</P>
                      </Div>
                      <Div>
                        <RiPencilFill size={34} />
                        <P>코멘트</P>
                      </Div>
                      <Div>
                        <AiOutlineEye size={34} />
                        <P>보는중</P>
                      </Div>
                      <Div>
                        <AiOutlineEllipsis size={34} />
                        <P>더보기</P>
                      </Div>
                    </ButtonList>
                  </RightHeader>
                  <hr />
                  <Content>{movieDetails.overview}</Content>
                </Right>
              </MovieDetail>
            </MovieDetailBox>
            <OtherDetailBox>
              <H2>제작회사</H2>
              <People>
                {production_companies.map((company, index) => (
                  <Li key={index}>
                    <LogoImg
                      src={`https://image.tmdb.org/t/p/w500/${company.logoPath}`}
                    />
                    <span>{company.name}</span>
                  </Li>
                ))}
              </People>
              <div>
                <H2>비슷한 영화 작품</H2>
                <Gallery>
                  {similarMovies.map((movie) => (
                    <GalleryItem
                      to={`/movie/${movie.id}`}
                      key={movie.id}
                      className="card"
                    >
                      <PosterImg
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <p>{movie.title}</p>
                    </GalleryItem>
                  ))}
                </Gallery>
                <H2>관련 추천 작품</H2>
                <Gallery>
                  {recommendaions.map((movie) => (
                    <GalleryItem
                      to={`/movie/${movie.id}`}
                      key={movie.id}
                      className="card"
                    >
                      <PosterImg
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <p>{movie.title}</p>
                    </GalleryItem>
                  ))}
                </Gallery>
              </div>
            </OtherDetailBox>
          </>
        )}
      </div>
    </Container>
  );
};
const Container = styled.div``;
const BackgroundImg = styled.img`
  width: 100%;
  height: 700px;
`;
const Info = styled.div`
  position: absolute;
  transform: translateX(30%);
  top: 60%;
  left: 50px;
  color: #fff;
`;
const MovieDetailBox = styled.div`
  background-color: #efefef;
`;
const MovieDetail = styled.div`
  width: 87%;
  margin: auto;
  display: flex;
  padding: 30px;
`;
const Left = styled.div`
  float: left;
`;
const Right = styled.div`
  width: 100%;
  float: right;
  margin-left: 30px;
`;
const MovieImg = styled.img`
  width: 260px;
  border: 1px solid #c2c2c2;
`;
const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Rating = styled.div`
  font-size: 40px;
  color: #999;
`;
const AvgRating = styled.div`
  text-align: center;
`;
const ButtonList = styled.div`
  display: flex;
  justify-content: space-around;
  color: #575757;
  align-items: center;
  cursor: pointer;
`;
const Div = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const P = styled.p`
  font-size: 13px;
  color: gray;
`;
const Content = styled.div`
  color: #575757;
  margin: 20px 0;
`;
const OtherDetailBox = styled.div`
  width: 87%;
  margin: auto;
  margin-top: 50px;
`;
const H2 = styled.h2`
  margin-top: 40px;
`;
const People = styled.div`
  display: flex;
`;
const Li = styled.div`
  margin-bottom: 20px;
`;
const LogoImg = styled.img`
  width: 10%;
  margin-right: 10px;
`;
const LoadingMessage = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: red;
  text-align: center;
  margin-top: 120px;
`;
const PosterImg = styled.img`
  width: 200px;
`;
const Gallery = styled.div`
  margin-top: 20px;
  max-width: 1500px;
  /* width: 100%; /어떻게해야 화면따라맞춰지지 */
  display: flex;
  overflow: scroll;
  scrollbar-width: none;
`;
const GalleryItem = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: #000;
`;
export default MovieInfo;
