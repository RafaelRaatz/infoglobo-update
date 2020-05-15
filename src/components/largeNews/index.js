import React from 'react';
import { ArticleStyle, ThumbStyle, Overlay, DescriptionStyle, LabelStyle, TitleStyle, TextStyle } from "./styles"


const FirstNews = ({ Img, Label, Title, Description }) => {
    return (

        <ArticleStyle>
            <ThumbStyle>
                <img src={Img} alt="" />
                <Overlay></Overlay>
            </ThumbStyle>

            <DescriptionStyle>

                <LabelStyle>{Label}</LabelStyle>
                <TitleStyle>{Title}</TitleStyle>
                <TextStyle>{Description}</TextStyle>

            </DescriptionStyle>
        </ArticleStyle>

    );
}

export default FirstNews;