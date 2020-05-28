import React from "react";
import { Article, Description, Label, Title, SmallText } from "./styles";

const MediumNews = ({ Img, LabelText, TitleText, Text }) => {
  return (
    <Article>
      <img src={Img} alt="" />

      <Description>
        <Label>{LabelText}</Label>
        <Title>{TitleText} </Title>
        <SmallText>{Text} </SmallText>
      </Description>
    </Article>
  );
};

export default MediumNews;
