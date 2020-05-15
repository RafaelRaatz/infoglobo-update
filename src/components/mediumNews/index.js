import React from 'react';
import { ArticleStyle, Thumb, LabelStyle, TitleStyle, TextStyle } from "./styles"


const MediumNews = ({ Img, Label, Title, Description }) => {
    return (

        <ArticleStyle>

            <Thumb> <img src={Img} alt="" /> </Thumb>

            <div>

                <LabelStyle>{Label}</LabelStyle>
                <TitleStyle>{Title} </TitleStyle>
                <TextStyle>{Description} </TextStyle>

            </div>


        </ArticleStyle>




    );
}

export default MediumNews;