import React, { useState, useEffect } from "react";
import GlobalStyle from "../../styles/global";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import HomeLargeNews from "../../components/largeNews";
import MediumNews from "./components/mediumNews";
import SmallNews from "./components/smallNews";
import Advertising from "../../components/advertising";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";
import api from "../../services/api";

import {
  Container,
  Main,
  SmallNewsContainer,
  LargeNewsContainer,
  MediumNewsContainer,
} from "./styles";

const Home = () => {
  const [largeNews, setNews] = useState([]);

  const [mediumNews, setMediumNews] = useState([]);

  const [smallNews, setSmallNews] = useState([]);

  const [brazilNews, setBrazilNews] = useState([]);

  const [worldNews, setWorldNews] = useState([]);

  const [gamesNews, setGamesNews] = useState([]);

  const [smallGamesNews, setSmallGamesNews] = useState([]);

  useEffect(() => {
    getLargeNews();
    getMediumNews();
    getSmallNews();
    getBrazilNews();
    getWorldNews();
    getGamesNews();
    getSmallGamesNews();
  }, []);

  const getLargeNews = async () => {
    const { data } = await api.get("/largeNews");
    setNews(data);
  };

  const getMediumNews = async () => {
    const { data } = await api.get("/mediumNews");
    setMediumNews(data);
  };

  const getSmallNews = async () => {
    const { data } = await api.get("/smallNews");
    setSmallNews(data);
  };

  const getBrazilNews = async () => {
    const { data } = await api.get("/brazilNews");
    setBrazilNews(data);
  };

  const getWorldNews = async () => {
    const { data } = await api.get("/worldNews");
    setWorldNews(data);
  };

  const getGamesNews = async () => {
    const { data } = await api.get("/gamesNews");
    setGamesNews(data);
  };

  const getSmallGamesNews = async () => {
    const { data } = await api.get("/smallGamesNews");
    setSmallGamesNews(data);
  };

  return (
    <div>
      <Header />

      <Main>
        <Container>
          <LargeNewsContainer>
            {largeNews.map((item) => {
              return (
                <HomeLargeNews
                  img={require(`../../media/${item.image}`)}
                  labelText={item.label}
                  titleText={item.title}
                  descriptionText={item.description}
                />
              );
            })}
          </LargeNewsContainer>
        </Container>

        <Container>
          <MediumNewsContainer>
            {mediumNews.map((item) => {
              return (
                <MediumNews
                  img={require(`../../media/${item.image}`)}
                  labelText={item.label}
                  titleText={item.title}
                  text={item.description}
                />
              );
            })}
          </MediumNewsContainer>
        </Container>

        <Container>
          <SmallNewsContainer>
            {smallNews.map((item) => {
              return (
                <SmallNews
                  img={require(`../../media/${item.image}`)}
                  labelText={item.label}
                  titleText={item.title}
                  description={item.description}
                />
              );
            })}
          </SmallNewsContainer>
        </Container>
      </Main>

      <Advertising />

      <Main>
        <Container>
          <SectionTitle text="Brasil" />
        </Container>

        <Container>
          <SmallNewsContainer>
            {brazilNews.map((item) => {
              return (
                <SmallNews
                  img={require(`../../media/${item.image}`)}
                  labelText={item.label}
                  titleText={item.title}
                  description={item.description}
                />
              );
            })}
          </SmallNewsContainer>
        </Container>

        <Container>
          <SectionTitle text="Mundo" />
        </Container>

        <Container>
          <SmallNewsContainer>
            {worldNews.map((item) => {
              return (
                <SmallNews
                  img={require(`../../media/${item.image}`)}
                  labelText={item.label}
                  titleText={item.title}
                  description={item.description}
                />
              );
            })}
          </SmallNewsContainer>
        </Container>

        <Container>
          <Link to="/gamesnews">
            {" "}
            <SectionTitle text="Games News" />{" "}
          </Link>
        </Container>

        <Container>
          <LargeNewsContainer>
            {gamesNews.map((item) => {
              return (
                <HomeLargeNews
                  img={require(`../../media/${item.image}`)}
                  labelText={item.label}
                  titleText={item.title}
                  descriptionText={item.description}
                />
              );
            })}
          </LargeNewsContainer>
        </Container>

        <Container>
          <SmallNewsContainer>
            {smallGamesNews.map((item) => {
              return (
                <SmallNews
                  img={require(`../../media/${item.image}`)}
                  labelText={item.label}
                  titleText={item.title}
                  description={item.description}
                />
              );
            })}
          </SmallNewsContainer>
        </Container>
      </Main>

      <Footer />

      <GlobalStyle />
    </div>
  );
};

export default Home;
