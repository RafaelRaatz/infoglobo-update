import React from 'react';
import './style.css';
import '../../global.css'

import thirdNewsFirstThumb from '../../media/noticia-5.jpeg'
import thirdNewsSecondThumb from '../../media/noticia-6.jpeg'
import thirdNewsThirdThumb from '../../media/noticia-8.jpeg'
import thirtNewsFourthThumb from '../../media/noticia-9.jpeg'

function ThirdNews() {
    return (
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

    );
}

export default ThirdNews;