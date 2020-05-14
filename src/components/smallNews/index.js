import React from 'react';
import './style.css';
import '../../global.css'

const SmallNews = ({ Img, Label, Title, Description }) => {
    return (

        <article>

            <img src={Img} alt="" />

            <span className="label">{Label}</span>
            <p className="title">{Title} </p>
            <p className="description"> {Description} </p>


        </article>

    );
}

export default SmallNews;