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

const MediumNews = ({ Img, LabelText, TitleText, DescriptionText }) => {
  return (
    <Article>
      <Thumb>
        <img src={Img} width="464px" height="261px" alt="" />
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

export default MediumNews;
