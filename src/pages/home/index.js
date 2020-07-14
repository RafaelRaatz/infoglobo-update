import React from "react";
import GlobalStyle from "../../styles/global";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Advertising from "../../components/advertising";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";

import {
  LargeNewsBox,
  MediumNewsBox,
  SmallNewsBox,
  BrazilNewsBox,
  WorldNewsBox,
  GamesNewsBox,
  SmallGamesNewsBox,
} from "../../modules/";

import { Container, Main } from "./styles";

const Home = () => {
  return (
    <div>
      <Header />

      <Main>
        <Container>
          <LargeNewsBox />
          <MediumNewsBox />
          <SmallNewsBox />
        </Container>
      </Main>

      <Advertising />

      <Main>
        <Container>
          <SectionTitle text="Brasil" />

          <BrazilNewsBox />

          <SectionTitle text="Mundo" />

          <WorldNewsBox />

          <Link to="/gamesnews">
            {" "}
            <SectionTitle text="Games News" />{" "}
          </Link>

          <GamesNewsBox />

          <SmallGamesNewsBox />
        </Container>
      </Main>

      <Footer />

      <GlobalStyle />
    </div>
  );
};

export default Home;
