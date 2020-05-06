import React from 'react';
import './style.css';
import '../../global.css'

import secondNewsFirstThumb from '../../media/noticia-3.jpeg'
import secondNewssecondThumb from '../../media/noticia-4.jpeg'

function SecondNews() {
    return (
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
    );
}

export default SecondNews;