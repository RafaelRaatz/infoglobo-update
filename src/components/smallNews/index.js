import React from "react";
import { Article, Label, Title, Text } from "./styles";

const SmallNews = ({ Img, LabelText, TitleText, Description }) => {
  return (
    <Article>
      <img src={Img} alt="" />

      <Label>{LabelText}</Label>
      <Title>{TitleText} </Title>
      <Text>{Description}</Text>
    </Article>
  );
};

export default SmallNews;
