import React, { useState, useEffect } from "react";

import SmallNews from "../../components/smallNews";

import api from "../../services/api";
import styled from "styled-components";

export const SmallNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BrazilNewsBox = () => {
  const [brazilNews, setBrazilNews] = useState([]);

  useEffect(() => {
    getBrazilNews();
  }, []);

  const getBrazilNews = async () => {
    const { data } = await api.get("/brazilNews");
    setBrazilNews(data);
  };

  return (
    <SmallNewsContainer>
      {brazilNews.map((item) => {
        return (
          <SmallNews
            img={require(`../../media/${item.image}`)}
            labelText={item.label}
            titleText={item.title}
            description={item.description}
          />
        );
      })}
    </SmallNewsContainer>
  );
};

export default BrazilNewsBox;
