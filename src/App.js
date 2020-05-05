import React from 'react';
import './style.css';
import './global.css';
import logo from './media/logo.png'

import firstNewsFirstThumb from './media/noticia-1.jpeg'
import firstNewsSecondThumb from './media/noticia-2.jpeg'

import secondNewsFirstThumb from './media/noticia-3.jpeg'
import secondNewssecondThumb from './media/noticia-4.jpeg'

import thirdNewsFirstThumb from './media/noticia-5.jpeg'
import thirdNewsSecondThumb from './media/noticia-6.jpeg'
import thirdNewsThirdThumb from './media/noticia-8.jpeg'
import thirtNewsFourthThumb from './media/noticia-9.jpeg'

import advertising from './media/propaganda.png'

import fourthNewsFirstThumb from './media/noticia-10.jpeg'
import fourthNewsSecondThumb from './media/noticia-11.jpeg'
import fourthNewsThirdThumb from './media/noticia-12.jpeg'
import fourthNewsFourthThumb from './media/noticia-13.jpeg'

import fifthNewsfirstThumb from './media/noticia-14.jpeg'
import fifthNewsSecondThumb from './media/noticia-15.jpeg'
import fifthNewsThirdThumb from './media/noticia-16.jpeg'
import fifthNewsFourthThumb from './media/noticia-17.jpeg'

import logoFooter from './media/logo-footer.png'





function App() {
  return (

    <body>


      <header>

        <div class="container">
          <img src={logo} alt="" />

        </div>
      </header>

      <section class="main">


        <div class="container">

          <div class="news">


            <article>
              <div class="news-thumb">
                <img src={firstNewsFirstThumb} alt="" />
                <div class="overlay"></div>
              </div>
              <div class="news-description">
                <span class="label">Esporte</span>
                <p class="title">Beisebol é um esporte para todos ?</p>
                <p class="description">Todo mundo sabe que futebol é muito melhor, mas estudos dizem <br /> que o
                            beisebol é o pior. </p>
              </div>
            </article>

            <article>
              <div class="news-thumb">
                <img src={firstNewsSecondThumb} alt="" />
                <div class="overlay"></div>
              </div>
              <div class="news-description">
                <span class="label">Moda</span>
                <p class="title">Desfile de moda já é moda</p>
                <p class="description">Todo mundo sabe que desfiles são tendencia na moda, palmeiras <br /> adota
                            o novo costume. </p>
              </div>
            </article>
          </div>
        </div>

        <div class="container">
          <div class="second-news">


            <div class="second-news-thumb">
              <img src={secondNewsFirstThumb} alt="" />

            </div>



            <article class="first-article">

              <div class="second-news-description">
                <span class="second-label">Influencer</span>
                <p class="second-title">Gravatas não são mais <br /> apenas adereços </p>
                <p class="second-description">O mundo sempre acorda com uma <br /> novidade e dessa vez as
                            gravatas <br /> chegam pra dominar o verão. </p>
              </div>


            </article>





            <div class="second-news-thumb">
              <img src={secondNewssecondThumb} alt="" />

            </div>



            <article class="second-article">
              <div class="second-news-description">
                <span class="second-label">Influencer</span>
                <p class="second-title">Fotos em janelas agora <br /> tem mais likes </p>
                <p class="second-description"> Instagram parou com a nova onda <br /> de fotos em janelas,
                            veja dicas de <br />como tirar a sua foto. </p>
              </div>
            </article>



          </div>
        </div>
        <div class="container">
          <div class="third-news ">


            <article>


              <div class="third-news-thumb">
                <img src={thirdNewsFirstThumb} alt="" />

              </div>

              <div class="third-news-description">
                <span class="third-label">Educação</span>
                <p class="third-title">Jbo x Leda </p>
                <p class="third-description"> Qual a melhor escola da região <br /> de itapecerica da serra, de
                            sua <br />opinião. </p>
              </div>

            </article>

            <article>
              <div class="third-news-thumb">
                <img src={thirdNewsSecondThumb} alt="" />

              </div>

              <div class="third-news-description">
                <span class="third-label">Esporte</span>
                <p class="third-title">Corridas velozes </p>
                <p class="third-description"> O esporte que mais cresceu no ano <br /> foi a corrida, o grande
                            responsavel <br />foi o jogador Mbappe. </p>
              </div>



            </article>

            <article>
              <div class="third-news-thumb">
                <img src={thirdNewsThirdThumb} alt="" />

              </div>

              <div class="third-news-description">
                <span class="third-label">Globo rural</span>
                <p class="third-title">Porco não tem mundial </p>
                <p class="third-description"> Porco vai pra campeonato mundial <br /> mas não leva a melhor em
                            disputa <br />e acaba ficando em segundo. </p>
              </div>


            </article>

            <article>
              <div class="third-news-thumb">
                <img src={thirtNewsFourthThumb} alt="" />

              </div>

              <div class="third-news-description">
                <span class="third-label">Eco</span>
                <p class="third-title">Plantas carnivoras </p>
                <p class="third-description"> A nova moda agora são plantas <br /> vegetarianas, movimento ganha
                            <br />forças em 2020. </p>
              </div>



            </article>

          </div>
        </div>




      </section>


      <div class="advertising">

        <hr />

        <img class="advertise" src={advertising} alt="" />

      </div>
      <hr />


      <section>

        <div class="container">
          <div class="section-title clearfix"> Brasil</div>
        </div>

        <div class="container">
          <div class="fourth-news">




            <article>
              <div class="fourth-news-thumb">
                <img src={fourthNewsFirstThumb} alt="" />

              </div>

              <div class="fourth-news-description">
                <span class="fourth-label">Entreterimento</span>
                <p class="fourth-title">Perdas e mais perdas </p>
                <p class="fourth-description"> A cidade de São Paulo esta entre <br /> as cidades que as pessoas
                            mais <br />perdem objetos na rua. </p>
              </div>

            </article>

            <article>
              <div class="fourth-news-thumb">
                <img src={fourthNewsSecondThumb} alt="" />

              </div>

              <div class="fourth-news-description">
                <span class="fourth-label">Eco</span>
                <p class="fourth-title">Arvores e suas ultilidades </p>
                <p class="fourth-description"> Arvores não servem apenas para <br /> subir nelas, mas tambem
                            servem <br />para tapar o sol #ficadica. </p>
              </div>



            </article>

            <article>
              <div class="fourth-news-thumb">
                <img src={fourthNewsThirdThumb} alt="" />

              </div>

              <div class="fourth-news-description">
                <span class="fourth-label">Natureza</span>
                <p class="fourth-title">Peruibe e suas rochas</p>
                <p class="fourth-description"> As rochas de peruibe são as mais <br /> perigosas do mundo diz a
                            pesquisa <br />feita pela professora Maria Helena. </p>
              </div>


            </article>

            <article>
              <div class="fourth-news-thumb">
                <img src={fourthNewsFourthThumb} alt="" />

              </div>

              <div class="fourth-news-description">
                <span class="fourth-label">Games</span>
                <p class="fourth-title">Cenarios de God of war </p>
                <p class="fourth-description"> Nessa ultima terça os cenarios do<br /> game God of War viraram
                            alvo <br /> de turistas de todo mundo. </p>
              </div>



            </article>

          </div>
        </div>



        <div class="container">
          <hr />
          <div class="section-final-text "> Brasil+ </div>

        </div>



        <div class="container">

          <div class="section-title clearfix"> Mundo</div>

        </div>

        <div class="container">
          <div class="fifth-news ">


            <article>
              <div class="fifth-news-thumb">
                <img src={fifthNewsfirstThumb} alt="" />

              </div>

              <div class="fifth-description">
                <span class="fifth-label">Entreterimento</span>
                <p class="fifth-title">Perdas e mais perdas </p>
                <p class="fifth-description"> A cidade de São Paulo esta entre <br /> as cidades que as pessoas
                            mais <br />perdem objetos na rua. </p>
              </div>

            </article>

            <article>
              <div class="fifth-news-thumb">
                <img src={fifthNewsSecondThumb} alt="" />

              </div>

              <div class="fifth-description">
                <span class="fifth-label">Eco</span>
                <p class="fifth-title">Arvores e suas ultilidades </p>
                <p class="fifth-description"> Arvores não servem apenas para <br /> subir nelas, mas tambem
                            servem <br />para tapar o sol #ficadica. </p>
              </div>



            </article>

            <article>
              <div class="fifth-news-thumb">
                <img src={fifthNewsThirdThumb} alt="" />

              </div>

              <div class="fifth-description">
                <span class="fifth-label">Natureza</span>
                <p class="fifth-title">Peruibe e suas rochas</p>
                <p class="fifth-description"> As rochas de peruibe são as mais <br /> perigosas do mundo diz a
                            pesquisa <br />feita pela professora Maria Helena. </p>
              </div>


            </article>

            <article>
              <div class="fifth-news-thumb">
                <img src={fifthNewsFourthThumb} alt="" />

              </div>

              <div class="fifth-description">
                <span class="fifth-label">Games</span>
                <p class="fifth-title">Cenarios de God of war </p>
                <p class="fifth-description"> Nessa ultima terça os cenarios do<br /> game God of War viraram
                            alvo <br /> de turistas de todo mundo. </p>
              </div>



            </article>

          </div>
        </div>




        <div class="container">
          <hr />
          <div class="section-final-text "> Mundo+ </div>

        </div>





      </section>


      <div id="footer">

        <img class="img-footer" src={logoFooter} alt="" />

        <p class="text-footer"> COPYRIGHT &copy; 2017 <br />
            TODOS OS DIREITOS RESERVADOS
        </p>

      </div>



    </body>
  );
}

export default App;
