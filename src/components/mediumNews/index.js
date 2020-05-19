import React from "react";
import { Article, Thumb, Label, Title, Text } from "./styles";

const MediumNews = ({ Img, LabelText, TitleText, Description }) => {
  return (
    <Article>
      <Thumb>
        {" "}
        <img src={Img} alt="" />{" "}
      </Thumb>

      <div>
        <Label>{LabelText}</Label>
        <Title>{TitleText} </Title>
        <Text>{Description} </Text>
      </div>
    </Article>
  );
};

export default MediumNews;
