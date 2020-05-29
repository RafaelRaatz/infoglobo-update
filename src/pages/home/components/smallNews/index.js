import React from "react";
import { Article, Label, Title, Text } from "./styles";

const SmallNews = ({ Img, LabelText, TitleText, Description }) => {
  return (
    <Article>
      <img src={Img} width="216px" height="121px" alt="" />
      <div>
        <Label>{LabelText}</Label>
        <Title>{TitleText} </Title>
        <Text>{Description}</Text>
      </div>
    </Article>
  );
};

export default SmallNews;
