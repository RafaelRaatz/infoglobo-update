import React from "react";
import GlobalStyle from "../../styles/global";

import Header from "./components/header";
import LargeNews from "./components/largeNews";
import MediumNews from "./components/mediumNews";
import SmallNews from "./components/smallNews";
import Advertising from "./components/advertising";
import Footer from "./components/footer";
import SectionTitle from "./components/sectionTitle";

import {
  Container,
  Main,
  SmallNewsContainer,
  LargeNewsContainer,
  MediumNewsContainer,
} from "./styles";

import LargeFirstThumb from "../../media/noticia-1.jpeg";
import LargeSecondThumb from "../../media/noticia-2.jpeg";

import MediumNewsFirstThumb from "../../media/noticia-3.jpeg";
import MediumNewssecondThumb from "../../media/noticia-4.jpeg";

import thirdNewsFirstThumb from "../../media/noticia-5.jpeg";
import thirdNewsSecondThumb from "../../media/noticia-6.jpeg";
import thirdNewsThirdThumb from "../../media/noticia-8.jpeg";
import thirtNewsFourthThumb from "../../media/noticia-9.jpeg";

import fourthNewsFirstThumb from "../../media/noticia-10.jpeg";
import fourthNewsSecondThumb from "../../media/noticia-11.jpeg";
import fourthNewsThirdThumb from "../../media/noticia-12.jpeg";
import fourthNewsFourthThumb from "../../media/noticia-13.jpeg";

import fifthNewsfirstThumb from "../../media/noticia-14.jpeg";
import fifthNewsSecondThumb from "../../media/noticia-15.jpeg";
import fifthNewsThirdThumb from "../../media/noticia-16.jpeg";
import fifthNewsFourthThumb from "../../media/noticia-17.jpeg";

const Home = () => {
  return (
    <div>
      <Header />

      <Main>
        <Container>
          <LargeNewsContainer>
            <LargeNews
              Img={LargeFirstThumb}
              LabelText="esportes"
              TitleText="Beisebol é um esporte para todos ?"
              DescriptionText="Todo mundo sabe que futebol é muito melhor, mas estudos dizem que o beisebol é o pior."
            />

            <LargeNews
              Img={LargeSecondThumb}
              LabelText="esportes"
              TitleText="Desfile de moda já é moda"
              DescriptionText="Desfiles são tendencia na moda, palmeiras adota o novo costume em seu time."
            />
          </LargeNewsContainer>
        </Container>

        <Container>
          <MediumNewsContainer>
            <MediumNews
              Img={MediumNewsFirstThumb}
              LabelText="Moda"
              TitleText="Gravatas não são mais apenas adereços "
              Text="O mundo sempre acorda com uma novidade e dessa vez as
              gravatas chegam pra dominar o verão."
            />

            <MediumNews
              Img={MediumNewssecondThumb}
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
              Img={thirdNewsFirstThumb}
              LabelText="Influencer"
              TitleText="Jbo x Leda"
              Description=" Qual a melhor escola da região de itapecerica da serra de sua opinião."
            />

            <SmallNews
              Img={thirdNewsSecondThumb}
              LabelText="Esporte"
              TitleText="Corridas velozes"
              Description=" O esporte que mais cresceu no ano foi a corrida, o grande responsavel foi o jogador Mbappe."
            />

            <SmallNews
              Img={thirdNewsThirdThumb}
              LabelText="Globo rural"
              TitleText="Porco não tem mundial"
              Description="Porco não leva a melhor no japão e acaba ficando em segundo."
            />

            <SmallNews
              Img={thirtNewsFourthThumb}
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
              Img={fourthNewsFirstThumb}
              LabelText="Entreterimento"
              TitleText="Perdas e mais perdas"
              Description=" A cidade de São Paulo esta entre as cidades que as pessoas mais perdem objetos na rua."
            />

            <SmallNews
              Img={fourthNewsSecondThumb}
              LabelText="Games"
              TitleText="Harvest Moon"
              Description="O jogo Harvest Moon ensina como seu outono pode ser melhor plantando batatas doce."
            />

            <SmallNews
              Img={fourthNewsThirdThumb}
              LabelText="Natureza"
              TitleText="Peruibe e suas rochas"
              Description="As rochas de peruibe são as mais perigosas do mundo diz pesquisa feita pela professora Maria Helena."
            />

            <SmallNews
              Img={fourthNewsFourthThumb}
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
              Img={fifthNewsfirstThumb}
              LabelText="Séries"
              TitleText="Game of Thrones"
              Description=" Game of Thrones ganha versão baby, veja como Tyrion ficou."
            />

            <SmallNews
              Img={fifthNewsSecondThumb}
              LabelText="Cinema"
              TitleText="Velozes e Furiosos"
              Description=" O novo filme da serie ganha nova temática e prédios tomam o lugar dos carros, arquitetos apoiam. "
            />

            <SmallNews
              Img={fifthNewsThirdThumb}
              LabelText="Eco"
              TitleText="Águas de lindóia"
              Description="quantas vezes se perguntou onde fica águas de lindóia ao beber sua garrafinha, descubra agora. "
            />

            <SmallNews
              Img={fifthNewsFourthThumb}
              LabelText="Eco"
              TitleText="Arvores e suas ultilidades"
              Description="Arvores não servem apenas para subir nelas, mas tambem servem para tapar o sol #ficadica."
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
