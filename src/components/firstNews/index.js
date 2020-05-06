import React from 'react';
import './style.css';
import '../../global.css'

import firstNewsFirstThumb from '../../media/noticia-1.jpeg'
import firstNewsSecondThumb from '../../media/noticia-2.jpeg'




function FirstNews() {
    return (
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

    );
}

export default FirstNews;