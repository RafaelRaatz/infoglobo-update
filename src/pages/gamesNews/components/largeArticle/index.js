import React from "react";
import { Article, Description, FinalText } from "./styles";

const LargeArticle = ({ Text, SecondText }) => {
  return (
    <Article>
      <hr />
      <img
        src={require("../../../../media/god-of-war.jpg")}
        alt="God of war news"
        width="100%"
        height="600px"
      />

      <Description>{Text}</Description>

      <FinalText>{SecondText} </FinalText>
    </Article>
  );
};

export default LargeArticle;
