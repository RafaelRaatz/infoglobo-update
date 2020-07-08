import React from "react";
import { Article, Label, Title, Text } from "./styles";

const SmallNews = ({ img, labelText, titleText, description }) => {
  return (
    <Article>
      <img src={img} width="216px" height="121px" alt="" />
      <div>
        <Label>{labelText}</Label>
        <Title>{titleText} </Title>
        <Text>{description}</Text>
      </div>
    </Article>
  );
};

export default SmallNews;
