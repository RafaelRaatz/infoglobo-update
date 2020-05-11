import React from 'react';
import './style.css';
import '../../global.css'

import firstNewsFirstThumb from '../../media/noticia-1.jpeg'
import firstNewsSecondThumb from '../../media/noticia-2.jpeg'




function FirstNews() {
    return (
        <div className="container">
            <div className="news">
                <article>
                    <div className="news-thumb">
                        <img src={firstNewsFirstThumb} alt="" />
                        <div className="overlay"></div>
                    </div>
                    <div className="news-description">
                        <span className="label">Esporte</span>
                        <p className="title">Beisebol é um esporte para todos ?</p>
                        <p className="description">Todo mundo sabe que futebol é muito melhor, mas estudos dizem <br /> que o
                        beisebol é o pior. </p>
                    </div>
                </article>

                <article>
                    <div className="news-thumb">
                        <img src={firstNewsSecondThumb} alt="" />
                        <div className="overlay"></div>
                    </div>
                    <div className="news-description">
                        <span className="label">Moda</span>
                        <p className="title">Desfile de moda já é moda</p>
                        <p className="description">Todo mundo sabe que desfiles são tendencia na moda, palmeiras <br /> adota
                        o novo costume. </p>
                    </div>
                </article>

            </div>

        </div>

    );
}

export default FirstNews;