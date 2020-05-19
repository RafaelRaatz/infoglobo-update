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

const FirstNews = ({ Img, LabelText, TitleText, DescriptionText }) => {
  return (
    <Article>
      <Thumb>
        <img src={Img} alt="" />
        <Overlay></Overlay>
      </Thumb>

      <Description>
        <Label>{LabelText}</Label>
        <Title>{TitleText}</Title>
        <Text>{DescriptionText}</Text>
      </Description>
    </Article>
  );
};

export default FirstNews;
