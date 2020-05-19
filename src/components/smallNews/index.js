import React from "react";
import { Article, Label, Title, Description } from "./styles";

const SmallNews = ({ Img, LabelText, TitleText, DescriptionText }) => {
  return (
    <Article>
      <img src={Img} alt="" />

      <Label>{LabelText}</Label>
      <Title>{TitleText} </Title>
      <Description>{DescriptionText}</Description>
    </Article>
  );
};

export default SmallNews;
