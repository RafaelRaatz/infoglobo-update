import React from "react";
import GlobalStyle from "../../styles/global";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Advertising from "../../components/advertising";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";

import LargeNewsBox from "../../modules/largeNews";
import MediumNewsBox from "../../modules/mediumNews";
import SmallNewsBox from "../../modules/smallNews";
import BrazilNewsBox from "../../modules/brazilNews";
import WorldNewsBox from "../../modules/worldNews";
import GamesNewsBox from "../../modules/gamesNews";
import SmallGamesNewsBox from "../../modules/smallGamesNews";

import { Container, Main } from "./styles";

const Home = () => {
  return (
    <div>
      <Header />

      <Main>
        <Container>
          <LargeNewsBox />
        </Container>

        <Container>
          <MediumNewsBox />
        </Container>

        <Container>
          <SmallNewsBox />
        </Container>
      </Main>

      <Advertising />

      <Main>
        <Container>
          <SectionTitle text="Brasil" />
        </Container>

        <Container>
          <BrazilNewsBox />
        </Container>

        <Container>
          <SectionTitle text="Mundo" />
        </Container>

        <Container>
          <WorldNewsBox />
        </Container>

        <Container>
          <Link to="/gamesnews">
            {" "}
            <SectionTitle text="Games News" />{" "}
          </Link>
        </Container>

        <Container>
          <GamesNewsBox />
        </Container>

        <Container>
          <SmallGamesNewsBox />
        </Container>
      </Main>

      <Footer />

      <GlobalStyle />
    </div>
  );
};

export default Home;
