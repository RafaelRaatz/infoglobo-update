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

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const { data } = await api.get("/largeNews");
    setNews(data);
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
            <MediumNews
              img={require("../../media/noticia-3.jpeg")}
              labelText="Moda"
              titleText="Gravatas não são mais apenas adereços "
              text="O mundo sempre acorda com uma novidade e dessa vez as
              gravatas chegam pra dominar o verão."
            />

            <MediumNews
              img={require("../../media/noticia-4.jpeg")}
              labelText="Influencer"
              titleText="Fotos em janelas agora tem mais likes"
              text="Instagram parou com a nova onda de fotos em janelas,
              veja dicas de como tirar a sua foto."
            />
          </MediumNewsContainer>
        </Container>

        <Container>
          <SmallNewsContainer>
            <SmallNews
              img={require("../../media/noticia-5.jpeg")}
              labelText="Influencer"
              titleText="Jbo x Leda"
              description=" Qual a melhor escola da região de itapecerica da serra de sua opinião."
            />

            <SmallNews
              img={require("../../media/noticia-6.jpeg")}
              labelText="Esporte"
              titleText="Corridas velozes"
              description=" O esporte que mais cresceu no ano foi a corrida, o grande responsavel foi o jogador Mbappe."
            />

            <SmallNews
              img={require("../../media/noticia-8.jpeg")}
              labelText="Globo rural"
              titleText="Porco não tem mundial"
              description="Porco não leva a melhor no japão e acaba ficando em segundo."
            />

            <SmallNews
              img={require("../../media/noticia-9.jpeg")}
              labelText="Eco"
              titleText="Plantas carnivoras"
              description="A nova moda agora são plantas vegetarianas, movimento 2020."
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
              img={require("../../media/noticia-10.jpeg")}
              labelText="Entreterimento"
              titleText="Perdas e mais perdas"
              description=" A cidade de São Paulo esta entre as cidades que as pessoas mais perdem objetos na rua."
            />

            <SmallNews
              img={require("../../media/noticia-11.jpeg")}
              labelText="Games"
              titleText="Harvest Moon"
              description="O jogo Harvest Moon ensina como seu outono pode ser melhor plantando batatas doce."
            />

            <SmallNews
              img={require("../../media/noticia-12.jpeg")}
              labelText="Natureza"
              titleText="Peruibe e suas rochas"
              description="As rochas de peruibe são as mais perigosas do mundo diz pesquisa feita pela professora Maria Helena."
            />

            <SmallNews
              img={require("../../media/noticia-13.jpeg")}
              labelText="Games"
              titleText="Cenarios de God of war"
              description="Nessa ultima terça os cenarios do game God of War viraram alvo de turistas de todo mundo."
            />
          </SmallNewsContainer>
        </Container>

        <Container>
          <SectionTitle text="Mundo" />
        </Container>

        <Container>
          <SmallNewsContainer>
            <SmallNews
              img={require("../../media/noticia-14.jpeg")}
              labelText="Séries"
              titleText="Game of Thrones"
              description=" Game of Thrones ganha versão baby, veja como Tyrion ficou."
            />

            <SmallNews
              img={require("../../media/noticia-15.jpeg")}
              labelText="Cinema"
              titleText="Velozes e Furiosos"
              description=" O novo filme da serie ganha nova temática e prédios tomam o lugar dos carros, arquitetos apoiam. "
            />

            <SmallNews
              img={require("../../media/noticia-16.jpeg")}
              labelText="Eco"
              titleText="Águas de lindóia"
              description="quantas vezes se perguntou onde fica águas de lindóia ao beber sua garrafinha, descubra agora. "
            />

            <SmallNews
              img={require("../../media/noticia-17.jpeg")}
              labelText="Eco"
              titleText="Arvores e suas ultilidades"
              description="Arvores não servem apenas para subir nelas, mas tambem servem para tapar o sol #ficadica."
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
            <HomeLargeNews
              img={require("../../media/god-of-war.jpg")}
              labelText="Games"
              titleText="God of war é um jogo para todos ?"
              descriptionText="O deus do olimpo esta de volta agora na mitologia nórdica."
            />

            <HomeLargeNews
              img={require("../../media/mario1.jpg")}
              labelText="Games"
              titleText="Mario Kart já é moda!"
              descriptionText="O game de corrida da nintendo fixou seu nome nos mais vendidos do mês novamente."
            />
          </LargeNewsContainer>
        </Container>

        <Container>
          <SmallNewsContainer>
            <SmallNews
              img={require("../../media/assassins.jpg")}
              labelText="Aventura/RPG"
              titleText="Asssassin's Creed Odyssey"
              description="O melhor game da franquia desde o final da saga de Ezio Auditore."
            />

            <SmallNews
              img={require("../../media/uncharted.jpg")}
              labelText="Ação"
              titleText="Uncharted 4"
              description="O game que leva o final perfeito para a história de Nathan Drake. "
            />

            <SmallNews
              img={require("../../media/zelda.jpg")}
              labelText="Aventura"
              titleText="Majora's mask remaster"
              description="O famoso jogo dark da franquia recebeu um remaster para o portatil da nintendo "
            />

            <SmallNews
              img={require("../../media/pubg.jpg")}
              labelText="Shooter"
              titleText="PUBG em queda ?"
              description="Pubg ainda reina no PC, embora o numero de players tenha caido consideravelmente."
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
