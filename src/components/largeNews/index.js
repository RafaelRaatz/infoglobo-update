import React from "react";
import {
  Article,
  Thumb,
  Overlay,
  Description,
  Label,
  Title,
  Text,
} from "./styles";

const homeLargeNews = ({ img, labelText, titleText, descriptionText }) => {
  return (
    <Article>
      <Thumb>
        <img src={img} width="464" height="261" alt="" />
        <Overlay></Overlay>
      </Thumb>

      <Description>
        <Label>{labelText}</Label>
        <Title>{titleText}</Title>
        <Text>{descriptionText}</Text>
      </Description>
    </Article>
  );
};

export default homeLargeNews;
