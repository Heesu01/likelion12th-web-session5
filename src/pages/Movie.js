import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import MovieInfo from '../components/MovieInfo'
import Footer from '../components/Footer';

const Movie = () => {

  return (
    <Container>
      <Header/>
      <MovieInfo/>
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

export default Movie;