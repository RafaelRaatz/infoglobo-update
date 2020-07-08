import React from "react";
import { Article, Description, Label, Title, SmallText } from "./styles";

const MediumNews = ({ img, labelText, titleText, text }) => {
  return (
    <Article>
      <img src={img} alt="" />

      <Description>
        <Label>{labelText}</Label>
        <Title>{titleText} </Title>
        <SmallText>{text} </SmallText>
      </Description>
    </Article>
  );
};

export default MediumNews;
