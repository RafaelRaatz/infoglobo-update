import React, { useState, useEffect } from "react";

import SmallNews from "../../components/smallNews";

import api from "../../services/api";
import styled from "styled-components";

export const SmallNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WorldNewsBox = () => {
  const [worldNews, setWorldNews] = useState([]);

  useEffect(() => {
    getWorldNews();
  }, []);

  const getWorldNews = async () => {
    const { data } = await api.get("/worldNews");
    setWorldNews(data);
  };

  return (
    <SmallNewsContainer>
      {worldNews.map((item) => {
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
