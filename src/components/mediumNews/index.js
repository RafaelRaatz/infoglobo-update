import React from 'react';
import './style.css';
import '../../global.css'


const MediumNews = ({ Img, Label, Title, Description }) => {
    return (

        <article className="article">

            <img className="Thumb" src={Img} alt="" />

            <div className="newsDescription">
                <span className="label">{Label}</span>
                <p className="title">{Title} </p>
                <p className="description">{Description} </p>
            </div>


        </article>




    );
}

export default MediumNews;