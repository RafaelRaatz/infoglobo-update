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
  const [LargeNews, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const { data } = await api.get("/news");
    setNews(data);
  };

  return (
    <div>
      <Header />

      <Main>
        <Container>
          <LargeNewsContainer>
            {LargeNews.map((LargeNews) => {
              return (
                <HomeLargeNews
                  Img={require(`${LargeNews.image}`)}
                  LabelText={LargeNews.Label}
                  TitleText={LargeNews.Title}
                  DescriptionText={LargeNews.Description}
                />
              );
            })}
          </LargeNewsContainer>
        </Container>

        <Container>
          <MediumNewsContainer>
            <MediumNews
              Img={require("../../media/noticia-3.jpeg")}
              LabelText="Moda"
              TitleText="Gravatas não são mais apenas adereços "
              Text="O mundo sempre acorda com uma novidade e dessa vez as
              gravatas chegam pra dominar o verão."
            />

            <MediumNews
              Img={require("../../media/noticia-4.jpeg")}
              LabelText="Influencer"
              TitleText="Fotos em janelas agora tem mais likes"
              Text="Instagram parou com a nova onda de fotos em janelas,
              veja dicas de como tirar a sua foto."
            />
          </MediumNewsContainer>
        </Container>

        <Container>
          <SmallNewsContainer>
            <SmallNews
              Img={require("../../media/noticia-5.jpeg")}
              LabelText="Influencer"
              TitleText="Jbo x Leda"
              Description=" Qual a melhor escola da região de itapecerica da serra de sua opinião."
            />

            <SmallNews
              Img={require("../../media/noticia-6.jpeg")}
              LabelText="Esporte"
              TitleText="Corridas velozes"
              Description=" O esporte que mais cresceu no ano foi a corrida, o grande responsavel foi o jogador Mbappe."
            />

            <SmallNews
              Img={require("../../media/noticia-8.jpeg")}
              LabelText="Globo rural"
              TitleText="Porco não tem mundial"
              Description="Porco não leva a melhor no japão e acaba ficando em segundo."
            />

            <SmallNews
              Img={require("../../media/noticia-9.jpeg")}
              LabelText="Eco"
              TitleText="Plantas carnivoras"
              Description="A nova moda agora são plantas vegetarianas, movimento 2020."
            />
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
            <SmallNews
              Img={require("../../media/noticia-10.jpeg")}
              LabelText="Entreterimento"
              TitleText="Perdas e mais perdas"
              Description=" A cidade de São Paulo esta entre as cidades que as pessoas mais perdem objetos na rua."
            />

            <SmallNews
              Img={require("../../media/noticia-11.jpeg")}
              LabelText="Games"
              TitleText="Harvest Moon"
              Description="O jogo Harvest Moon ensina como seu outono pode ser melhor plantando batatas doce."
            />

            <SmallNews
              Img={require("../../media/noticia-12.jpeg")}
              LabelText="Natureza"
              TitleText="Peruibe e suas rochas"
              Description="As rochas de peruibe são as mais perigosas do mundo diz pesquisa feita pela professora Maria Helena."
            />

            <SmallNews
              Img={require("../../media/noticia-13.jpeg")}
              LabelText="Games"
              TitleText="Cenarios de God of war"
              Description="Nessa ultima terça os cenarios do game God of War viraram alvo de turistas de todo mundo."
            />
          </SmallNewsContainer>
        </Container>

        <Container>
          <SectionTitle text="Mundo" />
        </Container>

        <Container>
          <SmallNewsContainer>
            <SmallNews
              Img={require("../../media/noticia-14.jpeg")}
              LabelText="Séries"
              TitleText="Game of Thrones"
              Description=" Game of Thrones ganha versão baby, veja como Tyrion ficou."
            />

            <SmallNews
              Img={require("../../media/noticia-15.jpeg")}
              LabelText="Cinema"
              TitleText="Velozes e Furiosos"
              Description=" O novo filme da serie ganha nova temática e prédios tomam o lugar dos carros, arquitetos apoiam. "
            />

            <SmallNews
              Img={require("../../media/noticia-16.jpeg")}
              LabelText="Eco"
              TitleText="Águas de lindóia"
              Description="quantas vezes se perguntou onde fica águas de lindóia ao beber sua garrafinha, descubra agora. "
            />

            <SmallNews
              Img={require("../../media/noticia-17.jpeg")}
              LabelText="Eco"
              TitleText="Arvores e suas ultilidades"
              Description="Arvores não servem apenas para subir nelas, mas tambem servem para tapar o sol #ficadica."
            />
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
            <LargeNews
              Img={require("../../media/god-of-war.jpg")}
              LabelText="Games"
              TitleText="God of war é um jogo para todos ?"
              DescriptionText="O deus do olimpo esta de volta agora na mitologia nórdica."
            />

            <LargeNews
              Img={require("../../media/mario1.jpg")}
              LabelText="Games"
              TitleText="Mario Kart já é moda!"
              DescriptionText="O game de corrida da nintendo fixou seu nome nos mais vendidos do mês novamente."
            />
          </LargeNewsContainer>
        </Container>

        <Container>
          <SmallNewsContainer>
            <SmallNews
              Img={require("../../media/assassins.jpg")}
              LabelText="Aventura/RPG"
              TitleText="Asssassin's Creed Odyssey"
              Description="O melhor game da franquia desde o final da saga de Ezio Auditore."
            />

            <SmallNews
              Img={require("../../media/uncharted.jpg")}
              LabelText="Ação"
              TitleText="Uncharted 4"
              Description="O game que leva o final perfeito para a história de Nathan Drake. "
            />

            <SmallNews
              Img={require("../../media/zelda.jpg")}
              LabelText="Aventura"
              TitleText="Majora's mask remaster"
              Description="O famoso jogo dark da franquia recebeu um remaster para o portatil da nintendo "
            />

            <SmallNews
              Img={require("../../media/pubg.jpg")}
              LabelText="Shooter"
              TitleText="PUBG em queda ?"
              Description="Pubg ainda reina no PC, embora o numero de players tenha caido consideravelmente."
            />
          </SmallNewsContainer>
        </Container>
      </Main>

      <Footer />

      <GlobalStyle />
    </div>
  );
};

export default Home;
