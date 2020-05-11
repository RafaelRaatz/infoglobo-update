import React from 'react';
import './style.css';
import '../../global.css'

import fifthNewsfirstThumb from '../../media/noticia-14.jpeg'
import fifthNewsSecondThumb from '../../media/noticia-15.jpeg'
import fifthNewsThirdThumb from '../../media/noticia-16.jpeg'
import fifthNewsFourthThumb from '../../media/noticia-17.jpeg'

function FifthNews() {
    return (
        <div className="container">
            <div className="fifth-news ">


                <article>
                    <div className="fifth-news-thumb">
                        <img src={fifthNewsfirstThumb} alt="" />

                    </div>

                    <div className="fifth-description">
                        <span className="fifth-label">Entreterimento</span>
                        <p className="fifth-title">Perdas e mais perdas </p>
                        <p className="fifth-description"> A cidade de São Paulo esta entre <br /> as cidades que as pessoas
                            mais <br />perdem objetos na rua. </p>
                    </div>

                </article>

                <article>
                    <div className="fifth-news-thumb">
                        <img src={fifthNewsSecondThumb} alt="" />

                    </div>

                    <div className="fifth-description">
                        <span className="fifth-label">Eco</span>
                        <p className="fifth-title">Arvores e suas ultilidades </p>
                        <p className="fifth-description"> Arvores não servem apenas para <br /> subir nelas, mas tambem
                            servem <br />para tapar o sol #ficadica. </p>
                    </div>



                </article>

                <article>
                    <div className="fifth-news-thumb">
                        <img src={fifthNewsThirdThumb} alt="" />

                    </div>

                    <div className="fifth-description">
                        <span className="fifth-label">Natureza</span>
                        <p className="fifth-title">Peruibe e suas rochas</p>
                        <p className="fifth-description"> As rochas de peruibe são as mais <br /> perigosas do mundo diz a
                            pesquisa <br />feita pela professora Maria Helena. </p>
                    </div>


                </article>

                <article>
                    <div className="fifth-news-thumb">
                        <img src={fifthNewsFourthThumb} alt="" />

                    </div>

                    <div className="fifth-description">
                        <span className="fifth-label">Games</span>
                        <p className="fifth-title">Cenarios de God of war </p>
                        <p className="fifth-description"> Nessa ultima terça os cenarios do<br /> game God of War viraram
                            alvo <br /> de turistas de todo mundo. </p>
                    </div>



                </article>

            </div>
        </div>

    );
}

export default FifthNews;