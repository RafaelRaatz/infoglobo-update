import React from 'react';
import './style.css';
import '../../global.css'

import secondNewsFirstThumb from '../../media/noticia-3.jpeg'
import secondNewssecondThumb from '../../media/noticia-4.jpeg'

function SecondNews() {
    return (
        <div className="container">
            <div className="second-news">
                <div className="second-news-thumb">


                    <img src={secondNewsFirstThumb} alt="" />

                </div>



                <article className="first-article">

                    <div className="second-news-description">
                        <span className="second-label">Influencer</span>
                        <p className="second-title">Gravatas não são mais <br /> apenas adereços </p>
                        <p className="second-description">O mundo sempre acorda com uma <br /> novidade e dessa vez as
                            gravatas <br /> chegam pra dominar o verão. </p>
                    </div>


                </article>

                <div className="second-news-thumb">
                    <img src={secondNewssecondThumb} alt="" />

                </div>



                <article className="second-article">
                    <div className="second-news-description">
                        <span className="second-label">Influencer</span>
                        <p className="second-title">Fotos em janelas agora <br /> tem mais likes </p>
                        <p className="second-description"> Instagram parou com a nova onda <br /> de fotos em janelas,
                            veja dicas de <br />como tirar a sua foto. </p>
                    </div>
                </article>

            </div>
        </div>
    );
}

export default SecondNews;