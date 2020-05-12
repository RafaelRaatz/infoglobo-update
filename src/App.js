import React from 'react';
import './global.css'

import Header from './components/header'
import FirstNews from './components/firstNews'
import SecondNews from './components/secondNews'
import ThirdNews from './components/thirdNews'
import Advertising from './components/advertising'
import FourthNews from './components/fourthNews'
import FifthNews from './components/fifthNews'
import Footer from './components/footer'
import SectionTitle from './components/sectionTitle'

import FirstImg from './media/noticia-1.jpeg'
import SecondImg from './media/noticia-2.jpeg'



const App = () => {
  return (

    <div>

      <Header />

      <section className="main">

        <div className="container">

          <div className="news">

            <FirstNews
              Img={FirstImg}
              Label="esportes"
              Title="Beisebol é um esporte para todos ?"
              Description="Todo mundo sabe que futebol é muito melhor, mas estudos dizem que o beisebol é o pior." />


            <FirstNews
              Img={SecondImg}
              Label="esportes"
              Title="Desfile de moda já é modaeisebol é um esporte para todos ?"
              Description="Desfiles são tendencia na moda, palmeiras adota o novo costume." />
          </div>

        </div>

        <SecondNews />

        <ThirdNews />

      </section>

      <Advertising />

      <section>

        <SectionTitle text="Brasil" />


        <FourthNews />


        <SectionTitle text2="Brasil+" />


        <SectionTitle text="Mundo" />


        <FifthNews />


        <SectionTitle text2="Mundo+" />


      </section>
      <Footer />
    </div>


  );
}

export default App;
