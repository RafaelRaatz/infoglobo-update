import React from 'react';
import './global.css'

import Header from './components/header'
import LargeNews from './components/largeNews'
import MediumNews from './components/mediumNews'
import SmallNews from './components/smallNews'
import Advertising from './components/advertising'
import Footer from './components/footer'
import SectionTitle from './components/sectionTitle'

import { Container, Main, SmallNewsStyle, LargeNewsStyle, MediumNewsStyle } from "./styles"

import LargeFirstThumb from './media/noticia-1.jpeg'
import LargeSecondThumb from './media/noticia-2.jpeg'

import MediumNewsFirstThumb from './media/noticia-3.jpeg'
import MediumNewssecondThumb from './media/noticia-4.jpeg'

import thirdNewsFirstThumb from './media/noticia-5.jpeg'
import thirdNewsSecondThumb from './media/noticia-6.jpeg'
import thirdNewsThirdThumb from './media/noticia-8.jpeg'
import thirtNewsFourthThumb from './media/noticia-9.jpeg'

import fourthNewsFirstThumb from './media/noticia-10.jpeg'
import fourthNewsSecondThumb from './media/noticia-11.jpeg'
import fourthNewsThirdThumb from './media/noticia-12.jpeg'
import fourthNewsFourthThumb from './media/noticia-13.jpeg'

import fifthNewsfirstThumb from './media/noticia-14.jpeg'
import fifthNewsSecondThumb from './media/noticia-15.jpeg'
import fifthNewsThirdThumb from './media/noticia-16.jpeg'
import fifthNewsFourthThumb from './media/noticia-17.jpeg'


const App = () => {
  return (

    <div>

      <Header />

      <Main>

        <Container>

          <LargeNewsStyle>

            <LargeNews
              Img={LargeFirstThumb}
              Label="esportes"
              Title="Beisebol é um esporte para todos ?"
              Description="Todo mundo sabe que futebol é muito melhor, mas estudos dizem que o beisebol é o pior." />


            <LargeNews
              Img={LargeSecondThumb}
              Label="esportes"
              Title="Desfile de moda já é moda"
              Description="Desfiles são tendencia na moda, palmeiras adota o novo costume em seu time." />

          </LargeNewsStyle>

        </Container>

        <Container>

          <MediumNewsStyle>

            <MediumNews
              Img={MediumNewsFirstThumb}
              Label="Moda"
              Title="Gravatas não são mais apenas adereços "
              Description="O mundo sempre acorda com uma novidade e dessa vez as
              gravatas chegam pra dominar o verão." />

            <MediumNews
              Img={MediumNewssecondThumb}
              Label="Influencer"
              Title="Fotos em janelas agora tem mais likes"
              Description="Instagram parou com a nova onda de fotos em janelas,
              veja dicas de como tirar a sua foto." />

          </MediumNewsStyle>

        </Container>

        <Container>

          <SmallNewsStyle>

            <SmallNews
              Img={thirdNewsFirstThumb}
              LabelText="Influencer"
              TitleText="Jbo x Leda"
              DescriptionText=" Qual a melhor escola da região de itapecerica da serra de sua opinião."
            />

            <SmallNews
              Img={thirdNewsSecondThumb}
              LabelText="Esporte"
              TitleText="Corridas velozes"
              DescriptionText=" O esporte que mais cresceu no ano foi a corrida, o grande responsavel foi o jogador Mbappe."
            />

            <SmallNews
              Img={thirdNewsThirdThumb}
              LabelText="Globo rural"
              TitleText="Porco não tem mundial"
              DescriptionText="Porco vai pra campeonato mundial mas não leva a melhor em disputa e acaba ficando em segundo."
            />

            <SmallNews
              Img={thirtNewsFourthThumb}
              LabelText="Eco"
              TitleText="Plantas carnivoras"
              DescriptionText="A nova moda agora são plantas vegetarianas, movimento ganha forças em 2020."
            />

          </SmallNewsStyle>

        </Container>

      </Main>

      <Advertising />

      <Main>

        <Container>

          <SectionTitle text="Brasil" />

        </Container>

        <Container>

          <SmallNewsStyle>

            <SmallNews
              Img={fourthNewsFirstThumb}
              LabelText="Entreterimento"
              TitleText="Perdas e mais perdas"
              DescriptionText=" A cidade de São Paulo esta entre as cidades que as pessoas mais perdem objetos na rua."
            />

            <SmallNews
              Img={fourthNewsSecondThumb}
              LabelText="Games"
              TitleText="Harvest Moon"
              DescriptionText="O jogo Harvest Moon ensina como seu outono pode ser melhor plantando batatas doce."
            />

            <SmallNews
              Img={fourthNewsThirdThumb}
              LabelText="Natureza"
              TitleText="Peruibe e suas rochas"
              DescriptionText="As rochas de peruibe são as mais perigosas do mundo diz pesquisa feita pela professora Maria Helena."
            />

            <SmallNews
              Img={fourthNewsFourthThumb}
              LabelText="Games"
              TitleText="Cenarios de God of war"
              DescriptionText="Nessa ultima terça os cenarios do game God of War viraram alvo de turistas de todo mundo."
            />

          </SmallNewsStyle>

        </Container>


        <Container>

          <SectionTitle text="Mundo" />

        </Container>

        <Container>

          <SmallNewsStyle>

            <SmallNews
              Img={fifthNewsfirstThumb}
              LabelText="Séries"
              TitleText="Game of Thrones"
              DescriptionText=" Game of Thrones ganha versão baby, veja como Tyrion ficou."
            />

            <SmallNews
              Img={fifthNewsSecondThumb}
              LabelText="Cinema"
              TitleText="Velozes e Furiosos"
              DescriptionText=" O novo filme da serie ganha nova temática e prédios tomam o lugar dos carros, arquitetos apoiam. "
            />

            <SmallNews
              Img={fifthNewsThirdThumb}
              LabelText="Eco"
              TitleText="Águas de lindóia"
              DescriptionText="quantas vezes se perguntou onde fica águas de lindóia ao beber sua garrafinha, descubra agora. "
            />

            <SmallNews
              Img={fifthNewsFourthThumb}
              LabelText="Eco"
              TitleText="Arvores e suas ultilidades"
              DescriptionText="Arvores não servem apenas para subir nelas, mas tambem servem para tapar o sol #ficadica."
            />

          </SmallNewsStyle>

        </Container>

      </Main>

      <Footer />

    </div>


  );
}

export default App;
