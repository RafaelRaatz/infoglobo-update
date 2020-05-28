import React from "react";
import GlobalStyle from "../../styles/global";

import Header from "./components/header";
import Footer from "./components/footer";
import LargeArticle from "./components/largeArticle";
import MediumArticle from "./components/mediumArticle";
import SectionTitle from "./components/sectionTitle";

import { Container, Main, LargeNewsContainer } from "./styles";
import LargeFirstThumb from "../../media/assassins.jpg";
import LargeSecondThumb from "../../media/uncharted.jpg";
import LargeThirdThumb from "../../media/fifa-20.png";
import LargeFourthThumb from "../../media/pubg.jpg";

const GamesNews = () => {
  return (
    <div>
      <Header />

      <Main>
        <Container>
          <LargeNewsContainer>
            <MediumArticle
              Img={LargeThirdThumb}
              LabelText="esportes"
              TitleText="Fifa mais do mesmo ?"
              DescriptionText="Fifa 20 leva a melhor no PS4 e Xbox-one entre games de esporte."
            />

            <MediumArticle
              Img={LargeFourthThumb}
              LabelText="Shooter"
              TitleText="PUBG em queda ?"
              DescriptionText="Pubg ainda reina no PC, embora o numero de players tenha caido consideravelmente."
            />
          </LargeNewsContainer>
        </Container>

        <Container>
          <SectionTitle text="Destaque" />
        </Container>

        <Container>
          <LargeArticle
            Text=" ' Eu vivi nas sombras dos deuses por tempo demais! O tempo dos
          deuses chegou ao fim! '"
            SecondText=" Kratos - God of War"
          />
        </Container>

        <Container>
          <SectionTitle text="Reviews da Semana" />
        </Container>

        <Container>
          <LargeNewsContainer>
            <MediumArticle
              Img={LargeFirstThumb}
              LabelText="Aventura"
              TitleText="Asssassin's Creed Odyssey "
              DescriptionText="Assassin's Creed Odyssey é, tranquilamente, o melhor game da franquia desde o final
              da saga de Ezio Auditore."
            />

            <MediumArticle
              Img={LargeSecondThumb}
              LabelText="Ação"
              TitleText="Uncharted 4"
              DescriptionText="Positivamente diferente de seus bons antecessores, Uncharted 4 leva o final perfeito para a história
              de Nathan Drake."
            />
          </LargeNewsContainer>
        </Container>
      </Main>

      <Footer />

      <GlobalStyle />
    </div>
  );
};

export default GamesNews;
