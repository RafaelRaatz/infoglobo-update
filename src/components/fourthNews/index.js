import React from 'react';
import './style.css';
import '../../global.css'

import fourthNewsFirstThumb from '../../media/noticia-10.jpeg'
import fourthNewsSecondThumb from '../../media/noticia-11.jpeg'
import fourthNewsThirdThumb from '../../media/noticia-12.jpeg'
import fourthNewsFourthThumb from '../../media/noticia-13.jpeg'

function FourthNews() {
    return (

        <div class="container">
            <div class="fourth-news">




                <article>
                    <div class="fourth-news-thumb">
                        <img src={fourthNewsFirstThumb} alt="" />

                    </div>

                    <div class="fourth-news-description">
                        <span class="fourth-label">Entreterimento</span>
                        <p class="fourth-title">Perdas e mais perdas </p>
                        <p class="fourth-description"> A cidade de São Paulo esta entre <br /> as cidades que as pessoas mais <br />perdem objetos na rua. </p>
                    </div>

                </article>

                <article>
                    <div class="fourth-news-thumb">
                        <img src={fourthNewsSecondThumb} alt="" />

                    </div>

                    <div class="fourth-news-description">
                        <span class="fourth-label">Eco</span>
                        <p class="fourth-title">Arvores e suas ultilidades </p>
                        <p class="fourth-description"> Arvores não servem apenas para <br /> subir nelas, mas tambem servem <br />para tapar o sol #ficadica. </p>
                    </div>



                </article>

                <article>
                    <div class="fourth-news-thumb">
                        <img src={fourthNewsThirdThumb} alt="" />

                    </div>

                    <div class="fourth-news-description">
                        <span class="fourth-label">Natureza</span>
                        <p class="fourth-title">Peruibe e suas rochas</p>
                        <p class="fourth-description"> As rochas de peruibe são as mais <br /> perigosas do mundo diz pesquisa <br />feita pela professora Maria Helena. </p>
                    </div>


                </article>

                <article>
                    <div class="fourth-news-thumb">
                        <img src={fourthNewsFourthThumb} alt="" />

                    </div>

                    <div class="fourth-news-description">
                        <span class="fourth-label">Games</span>
                        <p class="fourth-title">Cenarios de God of war </p>
                        <p class="fourth-description"> Nessa ultima terça os cenarios do<br /> game God of War viraram alvo <br /> de turistas de todo mundo. </p>
                    </div>



                </article>

            </div>
        </div>


    );
}

export default FourthNews;