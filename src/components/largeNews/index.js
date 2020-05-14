import React from 'react';
import './style.css';
import '../../global.css'





const FirstNews = ({ Img, Label, Title, Description }) => {
    return (

        <article>
            <div className="thumb">
                <img src={Img} alt="" />
                <div className="overlay"></div>
            </div>

            <div className="largeNewsDescription">
                <span className="label">{Label}</span>
                <p className="title">{Title}</p>
                <p className="description">{Description}</p>
            </div>
        </article>

    );
}

export default FirstNews;