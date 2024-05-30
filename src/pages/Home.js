import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Rank from "../components/Rank";
import Recommend from "../components/Recommend";
import Footer from "../components/Footer";
import Upcoming from "../components/Upcoming";
import Now from "../components/Now";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Rank />
      <Now />
      <Upcoming />
      <Recommend />
      <Header />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0;
`;
export default Home;
